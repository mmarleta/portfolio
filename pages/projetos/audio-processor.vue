<template>
  <ProjectPage class="text-gray-100">
    <ProjectHero :config="heroConfig" />

    <!-- O Problema -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">{{ $t('cases.audio.challenge.title') }}</h2>

        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="text-xl font-bold mb-4 text-purple-400">
              {{ $t('cases.audio.challenge.voiceNotes') }}
            </h3>
            <p class="text-gray-400 text-sm mb-4">
              {{ $t('cases.audio.challenge.voiceNotesDesc') }}
              <strong class="text-purple-300">{{
                $t('cases.audio.challenge.audioPercentage')
              }}</strong
              >.
            </p>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">•</span>
                <span>{{ $t('cases.audio.challenge.issue1') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">•</span>
                <span>{{ $t('cases.audio.challenge.issue2') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">•</span>
                <span>{{ $t('cases.audio.challenge.issue3') }}</span>
              </li>
            </ul>
          </div>

          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="text-xl font-bold mb-4 text-purple-400">
              {{ $t('cases.audio.challenge.commonProblems') }}
            </h3>
            <ul class="space-y-3 text-gray-400 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">❌</span>
                <span
                  ><strong class="text-red-300">{{ $t('cases.audio.challenge.problem1') }}</strong
                  >{{ $t('cases.audio.challenge.problem1Desc') }}</span
                >
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">❌</span>
                <span
                  ><strong class="text-red-300">{{ $t('cases.audio.challenge.problem2') }}</strong
                  >{{ $t('cases.audio.challenge.problem2Desc') }}</span
                >
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">❌</span>
                <span
                  ><strong class="text-red-300">{{ $t('cases.audio.challenge.problem3') }}</strong
                  >{{ $t('cases.audio.challenge.problem3Desc') }}</span
                >
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">❌</span>
                <span
                  ><strong class="text-red-300">{{ $t('cases.audio.challenge.problem4') }}</strong
                  >{{ $t('cases.audio.challenge.problem4Desc') }}</span
                >
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">❌</span>
                <span
                  ><strong class="text-red-300">{{ $t('cases.audio.challenge.problem5') }}</strong
                  >{{ $t('cases.audio.challenge.problem5Desc') }}</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Arquitetura Multi-Provider -->
    <section class="py-16 border-t border-gray-800 bg-gray-900/30">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">{{ $t('cases.audio.architecture.title') }}</h2>

        <div class="bg-gray-900/50 rounded-xl p-8 border border-gray-800 mb-8">
          <pre
            class="text-sm text-purple-400 overflow-x-auto"
          ><code>┌─────────────────────────────────────────────────────────────────────────┐
│                      {{ $t('cases.audio.architecture.diagramTitle') }}                        │
└─────────────────────────────────────────────────────────────────────────┘

   {{ $t('cases.audio.architecture.whatsappVoice') }}          {{ $t('cases.audio.architecture.webMobileAudio') }}           {{ $t('cases.audio.architecture.textResponse') }}
           │                          │                         │
           ▼                          ▼                         ▼
   ┌───────────────────────────────────────────────────────────────────┐
   │                      Audio Processor (Port 8002)                  │
   │  ┌─────────────────────────────────────────────────────────────┐  │
   │  │                    FastAPI + Celery                         │  │
   │  └─────────────────────────────────────────────────────────────┘  │
   └───────────────────────────────────────────────────────────────────┘
                    │                               │
         ┌──────────┴──────────┐         ┌─────────┴─────────┐
         ▼                     ▼         ▼                   ▼
   ┌───────────┐         ┌───────────┐ ┌───────────┐   ┌───────────┐
   │    {{ $t('cases.audio.architecture.stt') }}    │         │    {{ $t('cases.audio.architecture.stt') }}    │ │    {{ $t('cases.audio.architecture.tts') }}    │   │    {{ $t('cases.audio.architecture.tts') }}    │
   │  {{ $t('cases.audio.architecture.primary') }}  │         │  {{ $t('cases.audio.architecture.fallback') }} │ │  {{ $t('cases.audio.architecture.primary') }}  │   │  {{ $t('cases.audio.architecture.fallback') }} │
   │   Groq    │         │  OpenAI   │ │ElevenLabs │   │  Edge TTS │
   │ Whisper   │         │  Whisper  │ │           │   │           │
   └───────────┘         └───────────┘ └───────────┘   └───────────┘
         │                     │             │               │
         └──────────┬──────────┘             └───────┬───────┘
                    │                                │
                    ▼                                ▼
            ┌─────────────┐                  ┌─────────────┐
            │   MinIO     │                  │    Redis    │
            │   {{ $t('cases.audio.architecture.storage') }}   │                  │   + Celery  │
            │ audio-files │                  │   {{ $t('cases.audio.architecture.workers') }}   │
            └─────────────┘                  └─────────────┘</code></pre>
        </div>

        <!-- STT Providers -->
        <div class="grid md:grid-cols-2 gap-8 mb-8">
          <div class="bg-purple-950/20 rounded-xl p-6 border border-purple-900/30">
            <h3 class="text-xl font-bold mb-4 text-purple-400">
              {{ $t('cases.audio.architecture.sttTitle') }}
            </h3>

            <div class="space-y-4">
              <div class="bg-gray-900 rounded-lg p-4">
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-white">{{
                    $t('cases.audio.architecture.groqWhisperTitle')
                  }}</span>
                  <span class="text-xs px-2 py-1 bg-purple-500/20 text-purple-400 rounded">{{
                    $t('cases.audio.architecture.primary')
                  }}</span>
                </div>
                <p class="text-gray-400 text-sm">
                  {{ $t('cases.audio.architecture.groqWhisperDesc') }}
                </p>
              </div>

              <div class="bg-gray-900 rounded-lg p-4">
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-white">{{
                    $t('cases.audio.architecture.openaiWhisperTitle')
                  }}</span>
                  <span class="text-xs px-2 py-1 bg-gray-600 text-gray-300 rounded">{{
                    $t('cases.audio.architecture.fallback')
                  }}</span>
                </div>
                <p class="text-gray-400 text-sm">
                  {{ $t('cases.audio.architecture.openaiWhisperDesc') }}
                </p>
              </div>

              <div class="bg-gray-900 rounded-lg p-4 opacity-60">
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-white">{{
                    $t('cases.audio.architecture.otherProvidersTitle')
                  }}</span>
                  <span class="text-xs px-2 py-1 bg-gray-700 text-gray-400 rounded">{{
                    $t('cases.audio.architecture.available')
                  }}</span>
                </div>
                <p class="text-gray-400 text-sm">
                  {{ $t('cases.audio.architecture.otherProvidersDesc') }}
                </p>
              </div>
            </div>
          </div>

          <!-- TTS Providers -->
          <div class="bg-pink-950/20 rounded-xl p-6 border border-pink-900/30">
            <h3 class="text-xl font-bold mb-4 text-pink-400">
              {{ $t('cases.audio.architecture.ttsTitle') }}
            </h3>

            <div class="space-y-4">
              <div class="bg-gray-900 rounded-lg p-4">
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-white">{{
                    $t('cases.audio.architecture.elevenLabsTitle')
                  }}</span>
                  <span class="text-xs px-2 py-1 bg-pink-500/20 text-pink-400 rounded">{{
                    $t('cases.audio.architecture.primary')
                  }}</span>
                </div>
                <p class="text-gray-400 text-sm">
                  {{ $t('cases.audio.architecture.elevenLabsDesc') }}
                </p>
              </div>

              <div class="bg-gray-900 rounded-lg p-4">
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-white">{{
                    $t('cases.audio.architecture.openaiTtsTitle')
                  }}</span>
                  <span class="text-xs px-2 py-1 bg-gray-600 text-gray-300 rounded">{{
                    $t('cases.audio.architecture.fallback')
                  }}</span>
                </div>
                <p class="text-gray-400 text-sm">
                  {{ $t('cases.audio.architecture.openaiTtsDesc') }}
                </p>
              </div>

              <div class="bg-gray-900 rounded-lg p-4">
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-white">{{
                    $t('cases.audio.architecture.edgeTtsTitle')
                  }}</span>
                  <span class="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded">{{
                    $t('cases.audio.architecture.freeTier')
                  }}</span>
                </div>
                <p class="text-gray-400 text-sm">
                  {{ $t('cases.audio.architecture.edgeTtsDesc') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Processamento Assíncrono -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">{{ $t('cases.audio.asyncProcessing.title') }}</h2>

        <p class="text-gray-400 mb-8 max-w-3xl">
          {{ $t('cases.audio.asyncProcessing.description') }}
          <strong class="text-purple-400">{{ $t('cases.audio.asyncProcessing.wouldBlock') }}</strong
          >{{ $t('cases.audio.asyncProcessing.solution') }}
        </p>

        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div class="text-3xl mb-4">{{ $t('cases.audio.asyncProcessing.step1Icon') }}</div>
            <h3 class="text-lg font-bold mb-3 text-purple-400">
              {{ $t('cases.audio.asyncProcessing.step1Title') }}
            </h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.audio.asyncProcessing.step1Desc') }}
            </p>
          </div>

          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div class="text-3xl mb-4">{{ $t('cases.audio.asyncProcessing.step2Icon') }}</div>
            <h3 class="text-lg font-bold mb-3 text-purple-400">
              {{ $t('cases.audio.asyncProcessing.step2Title') }}
            </h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.audio.asyncProcessing.step2Desc') }}
            </p>
          </div>

          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div class="text-3xl mb-4">{{ $t('cases.audio.asyncProcessing.step3Icon') }}</div>
            <h3 class="text-lg font-bold mb-3 text-purple-400">
              {{ $t('cases.audio.asyncProcessing.step3Title') }}
            </h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.audio.asyncProcessing.step3Desc') }}
            </p>
          </div>
        </div>

        <!-- Código exemplo -->
        <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
          <h4 class="text-purple-400 font-bold mb-4">
            {{ $t('cases.audio.asyncProcessing.flowTitle') }}
          </h4>
          <div class="bg-gray-800 rounded-lg p-4">
            <pre
              class="text-sm text-gray-300 overflow-x-auto"
            ><code>{{ $t('cases.audio.asyncProcessing.clientSends') }}
POST /api/v1/transcribe
Content-Type: multipart/form-data
file: voice_note.ogg

{{ $t('cases.audio.asyncProcessing.immediateResponse') }}
{
  "job_id": "abc123",
  "status": "queued",
  "estimated_seconds": 8
}

{{ $t('cases.audio.asyncProcessing.workerProcesses') }}
{{ $t('cases.audio.asyncProcessing.downloadingFrom') }} voice_note.ogg
{{ $t('cases.audio.asyncProcessing.converting') }}
{{ $t('cases.audio.asyncProcessing.sendingTo') }}
{{ $t('cases.audio.asyncProcessing.transcriptionComplete') }} "Hi, I want to schedule an appointment..."
{{ $t('cases.audio.asyncProcessing.savingResult') }}

{{ $t('cases.audio.asyncProcessing.clientChecks') }}
GET /api/v1/status/abc123

{
  "job_id": "abc123",
  "status": "completed",
  "transcription": "Hi, I want to schedule an appointment for tomorrow at 10am",
  "duration_seconds": 12.5,
  "provider": "groq",
  "confidence": 0.97
}</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- Formatos Suportados -->
    <section class="py-16 border-t border-gray-800 bg-gray-900/30">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">{{ $t('cases.audio.formats.title') }}</h2>

        <p class="text-gray-400 mb-8 max-w-3xl">
          {{ $t('cases.audio.formats.description') }}
        </p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div class="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700">
            <div class="text-2xl mb-2">🎵</div>
            <div class="font-bold text-white">{{ $t('cases.audio.formats.mp3') }}</div>
            <div class="text-xs text-gray-500">{{ $t('cases.audio.formats.mp3Desc') }}</div>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700">
            <div class="text-2xl mb-2">🎵</div>
            <div class="font-bold text-white">{{ $t('cases.audio.formats.wav') }}</div>
            <div class="text-xs text-gray-500">{{ $t('cases.audio.formats.wavDesc') }}</div>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700">
            <div class="text-2xl mb-2">🎵</div>
            <div class="font-bold text-white">{{ $t('cases.audio.formats.ogg') }}</div>
            <div class="text-xs text-gray-500">{{ $t('cases.audio.formats.oggDesc') }}</div>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700">
            <div class="text-2xl mb-2">🎵</div>
            <div class="font-bold text-white">{{ $t('cases.audio.formats.opus') }}</div>
            <div class="text-xs text-gray-500">{{ $t('cases.audio.formats.opusDesc') }}</div>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700">
            <div class="text-2xl mb-2">🎵</div>
            <div class="font-bold text-white">{{ $t('cases.audio.formats.m4a') }}</div>
            <div class="text-xs text-gray-500">{{ $t('cases.audio.formats.m4aDesc') }}</div>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700">
            <div class="text-2xl mb-2">🎵</div>
            <div class="font-bold text-white">{{ $t('cases.audio.formats.flac') }}</div>
            <div class="text-xs text-gray-500">{{ $t('cases.audio.formats.flacDesc') }}</div>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700">
            <div class="text-2xl mb-2">🎵</div>
            <div class="font-bold text-white">{{ $t('cases.audio.formats.aac') }}</div>
            <div class="text-xs text-gray-500">{{ $t('cases.audio.formats.aacDesc') }}</div>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700">
            <div class="text-2xl mb-2">🎵</div>
            <div class="font-bold text-white">{{ $t('cases.audio.formats.wma') }}</div>
            <div class="text-xs text-gray-500">{{ $t('cases.audio.formats.wmaDesc') }}</div>
          </div>
        </div>

        <div class="bg-purple-950/20 rounded-xl p-6 border border-purple-900/30">
          <h4 class="text-purple-400 font-bold mb-4">
            {{ $t('cases.audio.formats.autoConversion') }}
          </h4>
          <p class="text-gray-400 text-sm">
            {{ $t('cases.audio.formats.autoConversionDesc') }}
          </p>
        </div>
      </div>
    </section>

    <!-- MinIO Storage -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">{{ $t('cases.audio.minio.title') }}</h2>

        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="text-lg font-bold mb-4 text-purple-400">
              {{ $t('cases.audio.minio.whyMinio') }}
            </h3>
            <ul class="space-y-3 text-gray-400 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">✓</span>
                <span
                  ><strong class="text-white">{{ $t('cases.audio.minio.s3Compatible') }}</strong
                  >{{ $t('cases.audio.minio.s3CompatibleDesc') }}</span
                >
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">✓</span>
                <span
                  ><strong class="text-white">{{ $t('cases.audio.minio.selfHosted') }}</strong
                  >{{ $t('cases.audio.minio.selfHostedDesc') }}</span
                >
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">✓</span>
                <span
                  ><strong class="text-white">{{ $t('cases.audio.minio.highPerformance') }}</strong
                  >{{ $t('cases.audio.minio.highPerformanceDesc') }}</span
                >
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">✓</span>
                <span
                  ><strong class="text-white">{{ $t('cases.audio.minio.webConsole') }}</strong
                  >{{ $t('cases.audio.minio.webConsoleDesc') }}</span
                >
              </li>
            </ul>
          </div>

          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h4 class="text-purple-400 font-bold mb-4">
              {{ $t('cases.audio.minio.configuration') }}
            </h4>
            <div class="bg-gray-800 rounded-lg p-4">
              <pre class="text-sm text-gray-300"><code>MINIO_ENDPOINT=minio:9000
MINIO_ACCESS_KEY=minioadmin
MINIO_SECRET_KEY=*****
MINIO_BUCKET=audio-files
MINIO_USE_SSL=false

{{ $t('cases.audio.minio.managementConsole') }}
# http://localhost:9003</code></pre>
            </div>
          </div>
        </div>

        <!-- Lifecycle -->
        <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
          <h4 class="text-purple-400 font-bold mb-4">{{ $t('cases.audio.minio.lifecycle') }}</h4>
          <div class="grid md:grid-cols-4 gap-4 text-center">
            <div>
              <div class="text-3xl mb-2">{{ $t('cases.audio.minio.upload') }}</div>
              <div class="font-bold text-white text-sm">
                {{ $t('cases.audio.minio.uploadTitle') }}
              </div>
              <div class="text-xs text-gray-500">{{ $t('cases.audio.minio.uploadDesc') }}</div>
            </div>
            <div>
              <div class="text-3xl mb-2">{{ $t('cases.audio.minio.store') }}</div>
              <div class="font-bold text-white text-sm">
                {{ $t('cases.audio.minio.storeTitle') }}
              </div>
              <div class="text-xs text-gray-500">{{ $t('cases.audio.minio.storeDesc') }}</div>
            </div>
            <div>
              <div class="text-3xl mb-2">{{ $t('cases.audio.minio.process') }}</div>
              <div class="font-bold text-white text-sm">
                {{ $t('cases.audio.minio.processTitle') }}
              </div>
              <div class="text-xs text-gray-500">{{ $t('cases.audio.minio.processDesc') }}</div>
            </div>
            <div>
              <div class="text-3xl mb-2">{{ $t('cases.audio.minio.cleanup') }}</div>
              <div class="font-bold text-white text-sm">
                {{ $t('cases.audio.minio.cleanupTitle') }}
              </div>
              <div class="text-xs text-gray-500">{{ $t('cases.audio.minio.cleanupDesc') }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Fallback Inteligente -->
    <section class="py-16 border-t border-gray-800 bg-gray-900/30">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">{{ $t('cases.audio.fallback.title') }}</h2>

        <p class="text-gray-400 mb-8 max-w-3xl">
          {{ $t('cases.audio.fallback.description') }}
        </p>

        <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800 mb-8">
          <div class="bg-gray-800 rounded-lg p-4">
            <pre
              class="text-sm text-gray-300 overflow-x-auto"
            ><code>{{ $t('cases.audio.fallback.sttChain') }}
TRANSCRIPTION_SERVICE=groq  {{ $t('cases.audio.fallback.sttPrimary') }}

try:
    result = groq_whisper.transcribe(audio)
except (Timeout, RateLimitError, ServiceUnavailable):
    logger.warning("{{ $t('cases.audio.fallback.groqFailed') }}")
    result = openai_whisper.transcribe(audio)
except Exception:
    logger.error("{{ $t('cases.audio.fallback.allSttFailed') }}")
    raise AudioProcessingError("Transcription unavailable")

{{ $t('cases.audio.fallback.ttsChain') }}
TTS_SERVICE=elevenlabs  {{ $t('cases.audio.fallback.ttsPrimary') }}

try:
    audio = elevenlabs.synthesize(text)
except (Timeout, QuotaExceeded):
    logger.warning("{{ $t('cases.audio.fallback.elevenLabsFailed') }}")
    audio = openai_tts.synthesize(text)
except Exception:
    logger.warning("{{ $t('cases.audio.fallback.paidTtsFailed') }}")
    audio = edge_tts.synthesize(text)  {{ $t('cases.audio.fallback.alwaysAvailable') }}</code></pre>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div class="text-2xl mb-3">{{ $t('cases.audio.fallback.timeoutIcon') }}</div>
            <h4 class="font-bold text-white mb-2">{{ $t('cases.audio.fallback.timeoutTitle') }}</h4>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.audio.fallback.timeoutDesc') }}
            </p>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div class="text-2xl mb-3">{{ $t('cases.audio.fallback.quotaIcon') }}</div>
            <h4 class="font-bold text-white mb-2">{{ $t('cases.audio.fallback.quotaTitle') }}</h4>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.audio.fallback.quotaDesc') }}
            </p>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div class="text-2xl mb-3">{{ $t('cases.audio.fallback.freeIcon') }}</div>
            <h4 class="font-bold text-white mb-2">{{ $t('cases.audio.fallback.freeTitle') }}</h4>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.audio.fallback.freeDesc') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Configuração por Tenant -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">{{ $t('cases.audio.tenantConfig.title') }}</h2>

        <p class="text-gray-400 mb-8 max-w-3xl">
          {{ $t('cases.audio.tenantConfig.description') }}
        </p>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h4 class="text-purple-400 font-bold mb-4">
              {{ $t('cases.audio.tenantConfig.dentalClinic') }}
            </h4>
            <div class="bg-gray-800 rounded-lg p-4">
              <pre class="text-sm text-gray-300"><code>{
  "tenant_id": "clinica_sp",
  "tts_config": {
    "provider": "elevenlabs",
    "voice_id": "mPDAoQyGzxBSkE0OAOKw",
    "model": "eleven_multilingual_v2",
    "speed": 1.0,
    "stability": 0.5,
    "similarity_boost": 0.75
  }
}</code></pre>
            </div>
          </div>

          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h4 class="text-purple-400 font-bold mb-4">
              {{ $t('cases.audio.tenantConfig.ecommerce') }}
            </h4>
            <div class="bg-gray-800 rounded-lg p-4">
              <pre class="text-sm text-gray-300"><code>{
  "tenant_id": "loja_xyz",
  "tts_config": {
    "provider": "openai",
    "voice": "shimmer",
    "model": "tts-1-hd",
    "speed": 1.1,
    "response_format": "opus"
  }
}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Integração WhatsApp -->
    <section class="py-16 border-t border-gray-800 bg-gray-900/30">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">{{ $t('cases.audio.whatsappIntegration.title') }}</h2>

        <div class="bg-gray-900/50 rounded-xl p-8 border border-gray-800 mb-8">
          <pre
            class="text-sm text-purple-400 overflow-x-auto"
          ><code>┌─────────────────────────────────────────────────────────────────────────┐
│                    {{ $t('cases.audio.whatsappIntegration.diagramTitle') }}                              │
└─────────────────────────────────────────────────────────────────────────┘

  {{ $t('cases.audio.whatsappIntegration.clientSendsAudio') }}          {{ $t('cases.audio.whatsappIntegration.audioProcessor') }}           {{ $t('cases.audio.whatsappIntegration.aiEngine') }}
         │                           │                       │
         ▼                           │                       │
   {{ $t('cases.audio.whatsappIntegration.evolutionApi') }}                     │                       │
         │                           │                       │
         ▼                           │                       │
   {{ $t('cases.audio.whatsappIntegration.whatsappIntegration') }}              │                       │
         │                           │                       │
         │  POST /transcribe         │                       │
         │──────────────────────────▶│                       │
         │                           │                       │
         │  { job_id: "abc" }        │                       │
         │◀──────────────────────────│                       │
         │                           │                       │
         │       {{ $t('cases.audio.whatsappIntegration.celeryProcesses') }}   │                       │
         │                           │                       │
         │  GET /status/abc          │                       │
         │──────────────────────────▶│                       │
         │                           │                       │
         │  { text: "I want..." }    │                       │
         │◀──────────────────────────│                       │
         │                           │                       │
         │  POST /chat (text)        │                       │
         │───────────────────────────────────────────────────▶
         │                           │                       │
         │                           │  { response: "..." }  │
         │◀───────────────────────────────────────────────────
         │                           │                       │
         │  POST /synthesize         │                       │
         │──────────────────────────▶│                       │
         │                           │                       │
         │  { audio_url: "..." }     │                       │
         │◀──────────────────────────│                       │
         │                           │                       │
         ▼                           │                       │
   {{ $t('cases.audio.whatsappIntegration.evolutionApi') }}                     │                       │
         │                           │                       │
         ▼                           │                       │
   {{ $t('cases.audio.whatsappIntegration.clientReceivesAudio') }}              │                       │</code></pre>
        </div>

        <div class="bg-purple-950/20 rounded-xl p-6 border border-purple-900/30">
          <h4 class="text-purple-400 font-bold mb-4">
            {{ $t('cases.audio.whatsappIntegration.responseMode') }}
          </h4>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-gray-900 rounded-lg p-4">
              <div class="font-bold text-white mb-2">
                {{ $t('cases.audio.whatsappIntegration.modeAudio') }}
              </div>
              <p class="text-gray-400 text-xs">
                {{ $t('cases.audio.whatsappIntegration.modeAudioDesc') }}
              </p>
            </div>
            <div class="bg-gray-900 rounded-lg p-4">
              <div class="font-bold text-white mb-2">
                {{ $t('cases.audio.whatsappIntegration.modeText') }}
              </div>
              <p class="text-gray-400 text-xs">
                {{ $t('cases.audio.whatsappIntegration.modeTextDesc') }}
              </p>
            </div>
            <div class="bg-gray-900 rounded-lg p-4">
              <div class="font-bold text-white mb-2">
                {{ $t('cases.audio.whatsappIntegration.modeMatch') }}
              </div>
              <p class="text-gray-400 text-xs">
                {{ $t('cases.audio.whatsappIntegration.modeMatchDesc') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Resultados -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">{{ $t('cases.audio.results.title') }}</h2>

        <div class="grid md:grid-cols-4 gap-6 mb-12">
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-purple-400 mb-2">
              {{ $t('cases.audio.results.uptime') }}
            </div>
            <div class="text-gray-400 text-sm">{{ $t('cases.audio.results.uptimeLabel') }}</div>
            <div class="text-gray-500 text-xs mt-1">{{ $t('cases.audio.results.uptimeDesc') }}</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-purple-400 mb-2">
              {{ $t('cases.audio.results.transcriptionTime') }}
            </div>
            <div class="text-gray-400 text-sm">
              {{ $t('cases.audio.results.transcriptionTimeLabel') }}
            </div>
            <div class="text-gray-500 text-xs mt-1">
              {{ $t('cases.audio.results.transcriptionTimeDesc') }}
            </div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-purple-400 mb-2">
              {{ $t('cases.audio.results.formatsCount') }}
            </div>
            <div class="text-gray-400 text-sm">
              {{ $t('cases.audio.results.formatsCountLabel') }}
            </div>
            <div class="text-gray-500 text-xs mt-1">
              {{ $t('cases.audio.results.formatsCountDesc') }}
            </div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-purple-400 mb-2">
              {{ $t('cases.audio.results.providersCount') }}
            </div>
            <div class="text-gray-400 text-sm">
              {{ $t('cases.audio.results.providersCountLabel') }}
            </div>
            <div class="text-gray-500 text-xs mt-1">
              {{ $t('cases.audio.results.providersCountDesc') }}
            </div>
          </div>
        </div>

        <!-- Stack Técnico -->
        <div class="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
          <h3 class="text-xl font-bold mb-6 text-purple-400">
            {{ $t('cases.audio.results.techStack') }}
          </h3>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-purple-400 font-bold mb-2">
                {{ $t('cases.audio.results.framework') }}
              </div>
              <p class="text-gray-400 text-sm">FastAPI + Uvicorn</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-purple-400 font-bold mb-2">
                {{ $t('cases.audio.results.taskQueue') }}
              </div>
              <p class="text-gray-400 text-sm">Celery + Redis</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-purple-400 font-bold mb-2">
                {{ $t('cases.audio.results.storage') }}
              </div>
              <p class="text-gray-400 text-sm">MinIO (S3-compatible)</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-purple-400 font-bold mb-2">
                {{ $t('cases.audio.results.audioProcessing') }}
              </div>
              <p class="text-gray-400 text-sm">FFmpeg</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-purple-400 font-bold mb-2">
                {{ $t('cases.audio.results.sttPrimary') }}
              </div>
              <p class="text-gray-400 text-sm">Groq Whisper Large v3</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-purple-400 font-bold mb-2">
                {{ $t('cases.audio.results.ttsPrimary') }}
              </div>
              <p class="text-gray-400 text-sm">ElevenLabs Multilingual v2</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-purple-400 font-bold mb-2">
                {{ $t('cases.audio.results.ttsBackup') }}
              </div>
              <p class="text-gray-400 text-sm">OpenAI TTS-1-HD</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-purple-400 font-bold mb-2">
                {{ $t('cases.audio.results.ttsFree') }}
              </div>
              <p class="text-gray-400 text-sm">Edge TTS (Microsoft)</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <ProjectCTA title-key="cases.audio.cta.title" description-key="cases.audio.cta.description">
      <template #actions>
        <a
          :href="`mailto:${SITE.contactEmail}`"
          class="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-lg transition-colors"
        >
          {{ $t('cases.audio.cta.contact') }}
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </template>
    </ProjectCTA>
  </ProjectPage>
</template>

<script setup>
import { heroGradientBySlug } from '~/data/project-heroes'
import { SITE } from '~/data/site'

const heroConfig = heroGradientBySlug.audioProcessor

useHead({
  title: 'Audio Processor - Multi-Provider STT/TTS, Celery, MinIO | Marcelo Marleta',
  meta: [
    {
      name: 'description',
      content:
        'Audio microservice with Groq Whisper, ElevenLabs, OpenAI TTS. Asynchronous Celery processing, MinIO storage, intelligent fallback.',
    },
  ],
})
</script>
