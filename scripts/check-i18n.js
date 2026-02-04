import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const localesDir = path.join(root, 'locales')
const locales = ['pt', 'en', 'es']
const ignoreDirs = new Set(['node_modules', '.nuxt', '.output', 'dist'])

const keyPattern = /\$t\(\s*['"]([^'"]+)['"]/g

const usedKeys = new Set()

const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (ignoreDirs.has(entry.name) || entry.name.startsWith('.')) continue
      walk(path.join(dir, entry.name))
    } else if (entry.isFile() && entry.name.endsWith('.vue')) {
      const filePath = path.join(dir, entry.name)
      const content = fs.readFileSync(filePath, 'utf8')
      let match
      while ((match = keyPattern.exec(content)) !== null) {
        usedKeys.add(match[1])
      }
    }
  }
}

const flatten = (obj, prefix = '', out = {}) => {
  for (const [key, value] of Object.entries(obj)) {
    const nextKey = prefix ? `${prefix}.${key}` : key
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      flatten(value, nextKey, out)
    } else {
      out[nextKey] = value
    }
  }
  return out
}

const loadLocale = (locale) => {
  const filePath = path.join(localesDir, `${locale}.json`)
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing locale file: ${filePath}`)
  }
  const raw = fs.readFileSync(filePath, 'utf8')
  try {
    return JSON.parse(raw)
  } catch (error) {
    throw new Error(`Invalid JSON in ${filePath}: ${error.message}`)
  }
}

walk(root)

const localeMaps = {}
for (const locale of locales) {
  localeMaps[locale] = flatten(loadLocale(locale))
}

const missingByLocale = {}
for (const locale of locales) missingByLocale[locale] = []

const usedKeysSorted = Array.from(usedKeys).sort()
for (const key of usedKeysSorted) {
  for (const locale of locales) {
    if (!(key in localeMaps[locale])) missingByLocale[locale].push(key)
  }
}

let hasMissing = false
for (const locale of locales) {
  if (missingByLocale[locale].length === 0) {
    continue
  }
  hasMissing = true
  console.error(`Missing keys in ${locale}.json:`)
  for (const key of missingByLocale[locale]) {
    console.error(`  - ${key}`)
  }
}

if (hasMissing) {
  process.exit(1)
}

console.log(`i18n ok: ${usedKeys.size} keys checked across ${locales.length} locales`)
