<template>
  <div class="min-h-screen bg-gray-950 text-gray-100">
    <!-- Hero Section -->
    <section class="relative py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-purple-950/50 via-gray-950 to-gray-950"></div>
      <div class="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <NuxtLink to="/" class="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 transition-colors">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Voltar ao Portfolio
        </NuxtLink>
        
        <div class="flex items-center gap-4 mb-6">
          <span class="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30">
            Optimus Platform
          </span>
          <span class="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm">
            Media Processing
          </span>
        </div>
        
        <h1 class="text-5xl md:text-6xl font-bold mb-6">
          <span class="bg-gradient-to-r from-purple-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
            Audio Processor
          </span>
        </h1>
        
        <p class="text-xl text-gray-400 max-w-3xl mb-8">
          Microsserviço de processamento de áudio com multi-provider STT/TTS,
          processamento assíncrono via Celery, storage MinIO e fallback inteligente entre providers.
        </p>

        <div class="flex flex-wrap gap-3">
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Multi-Provider</span>
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Groq Whisper</span>
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">ElevenLabs</span>
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Celery</span>
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">MinIO</span>
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">8 Formatos</span>
        </div>
      </div>
    </section>

    <!-- O Problema -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">O Desafio: Áudio em Chatbots Enterprise</h2>
        
        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="text-xl font-bold mb-4 text-purple-400">🎤 Voice Notes no WhatsApp</h3>
            <p class="text-gray-400 text-sm mb-4">
              Usuários de WhatsApp adoram enviar áudios. Em alguns segmentos (clínicas, 
              escritórios), <strong class="text-purple-300">mais de 40% das mensagens são áudio</strong>.
            </p>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">•</span>
                <span>Áudios longos (1-3 minutos) com múltiplas informações</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">•</span>
                <span>Sotaques regionais, ruído de fundo, gírias</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">•</span>
                <span>Expectativa de resposta em áudio também</span>
              </li>
            </ul>
          </div>

          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="text-xl font-bold mb-4 text-purple-400">⚠️ Problemas Comuns</h3>
            <ul class="space-y-3 text-gray-400 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">❌</span>
                <span><strong class="text-red-300">Single provider</strong> - se cair, sistema para</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">❌</span>
                <span><strong class="text-red-300">Processamento síncrono</strong> - bloqueia a thread</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">❌</span>
                <span><strong class="text-red-300">Sem fallback</strong> - erro = mensagem perdida</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">❌</span>
                <span><strong class="text-red-300">Custo fixo</strong> - mesmo provider pra tudo</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">❌</span>
                <span><strong class="text-red-300">Formatos limitados</strong> - só MP3/WAV</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Arquitetura Multi-Provider -->
    <section class="py-16 border-t border-gray-800 bg-gray-900/30">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">Arquitetura Multi-Provider</h2>
        
        <div class="bg-gray-900/50 rounded-xl p-8 border border-gray-800 mb-8">
          <pre class="text-sm text-purple-400 overflow-x-auto"><code>┌─────────────────────────────────────────────────────────────────────────┐
│                      Audio Processor Architecture                        │
└─────────────────────────────────────────────────────────────────────────┘

   WhatsApp Voice Note          Web/Mobile Audio           Text Response
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
   │    STT    │         │    STT    │ │    TTS    │   │    TTS    │
   │  Primary  │         │  Fallback │ │  Primary  │   │  Fallback │
   │   Groq    │         │  OpenAI   │ │ElevenLabs │   │  Edge TTS │
   │ Whisper   │         │  Whisper  │ │           │   │           │
   └───────────┘         └───────────┘ └───────────┘   └───────────┘
         │                     │             │               │
         └──────────┬──────────┘             └───────┬───────┘
                    │                                │
                    ▼                                ▼
            ┌─────────────┐                  ┌─────────────┐
            │   MinIO     │                  │    Redis    │
            │   Storage   │                  │   + Celery  │
            │ audio-files │                  │   Workers   │
            └─────────────┘                  └─────────────┘</code></pre>
        </div>

        <!-- STT Providers -->
        <div class="grid md:grid-cols-2 gap-8 mb-8">
          <div class="bg-purple-950/20 rounded-xl p-6 border border-purple-900/30">
            <h3 class="text-xl font-bold mb-4 text-purple-400">🎤 STT (Speech-to-Text)</h3>
            
            <div class="space-y-4">
              <div class="bg-gray-900 rounded-lg p-4">
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-white">Groq Whisper</span>
                  <span class="text-xs px-2 py-1 bg-purple-500/20 text-purple-400 rounded">Primary</span>
                </div>
                <p class="text-gray-400 text-sm">
                  Whisper Large v3 via Groq API. Extremamente rápido (hardware dedicado),
                  excelente para português brasileiro.
                </p>
              </div>

              <div class="bg-gray-900 rounded-lg p-4">
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-white">OpenAI Whisper</span>
                  <span class="text-xs px-2 py-1 bg-gray-600 text-gray-300 rounded">Fallback</span>
                </div>
                <p class="text-gray-400 text-sm">
                  API oficial da OpenAI. Mais lento que Groq, mas 
                  extremamente confiável como backup.
                </p>
              </div>

              <div class="bg-gray-900 rounded-lg p-4 opacity-60">
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-white">Google / Azure / AWS</span>
                  <span class="text-xs px-2 py-1 bg-gray-700 text-gray-400 rounded">Disponível</span>
                </div>
                <p class="text-gray-400 text-sm">
                  Providers adicionais configuráveis para casos específicos
                  ou requisitos de compliance.
                </p>
              </div>
            </div>
          </div>

          <!-- TTS Providers -->
          <div class="bg-pink-950/20 rounded-xl p-6 border border-pink-900/30">
            <h3 class="text-xl font-bold mb-4 text-pink-400">🔊 TTS (Text-to-Speech)</h3>
            
            <div class="space-y-4">
              <div class="bg-gray-900 rounded-lg p-4">
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-white">ElevenLabs</span>
                  <span class="text-xs px-2 py-1 bg-pink-500/20 text-pink-400 rounded">Primary</span>
                </div>
                <p class="text-gray-400 text-sm">
                  Model: eleven_multilingual_v2. Vozes ultra-realistas,
                  excelente entonação em português.
                </p>
              </div>

              <div class="bg-gray-900 rounded-lg p-4">
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-white">OpenAI TTS</span>
                  <span class="text-xs px-2 py-1 bg-gray-600 text-gray-300 rounded">Fallback</span>
                </div>
                <p class="text-gray-400 text-sm">
                  Model: tts-1-hd, Voice: shimmer. Qualidade alta,
                  bom backup quando ElevenLabs indisponível.
                </p>
              </div>

              <div class="bg-gray-900 rounded-lg p-4">
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-white">Edge TTS</span>
                  <span class="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded">Free Tier</span>
                </div>
                <p class="text-gray-400 text-sm">
                  Voice: pt-BR-FranciscaNeural. Gratuito (Microsoft Edge),
                  usado para desenvolvimento/testes ou fallback de emergência.
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
        <h2 class="text-3xl font-bold mb-8">⚡ Processamento Assíncrono com Celery</h2>
        
        <p class="text-gray-400 mb-8 max-w-3xl">
          Áudio é pesado. Um voice note de 2 minutos pode levar 5-10 segundos para transcrever.
          Processar sincronamente <strong class="text-purple-400">bloquearia o servidor</strong>.
          A solução: Celery workers dedicados.
        </p>

        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div class="text-3xl mb-4">📥</div>
            <h3 class="text-lg font-bold mb-3 text-purple-400">1. Recebe Áudio</h3>
            <p class="text-gray-400 text-sm">
              API recebe o arquivo de áudio (qualquer formato),
              valida e salva no MinIO. Retorna job_id imediatamente.
            </p>
          </div>

          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div class="text-3xl mb-4">⚙️</div>
            <h3 class="text-lg font-bold mb-3 text-purple-400">2. Celery Processa</h3>
            <p class="text-gray-400 text-sm">
              Worker pega da fila, baixa do MinIO, converte formato se necessário,
              envia pro provider STT, salva resultado.
            </p>
          </div>

          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div class="text-3xl mb-4">📤</div>
            <h3 class="text-lg font-bold mb-3 text-purple-400">3. Callback/Poll</h3>
            <p class="text-gray-400 text-sm">
              Resultado disponível via polling (GET /status/job_id) ou
              webhook callback quando configurado.
            </p>
          </div>
        </div>

        <!-- Código exemplo -->
        <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
          <h4 class="text-purple-400 font-bold mb-4">Fluxo de Transcrição</h4>
          <div class="bg-gray-800 rounded-lg p-4">
            <pre class="text-sm text-gray-300 overflow-x-auto"><code># 1. Cliente envia áudio
POST /api/v1/transcribe
Content-Type: multipart/form-data
file: voice_note.ogg

# Response imediata (~50ms)
{
  "job_id": "abc123",
  "status": "queued",
  "estimated_seconds": 8
}

# 2. Celery worker processa em background
[Worker] Downloading from MinIO: voice_note.ogg
[Worker] Converting OGG → WAV (ffmpeg)
[Worker] Sending to Groq Whisper...
[Worker] Transcription complete: "Oi, quero marcar uma consulta..."
[Worker] Saving result to Redis

# 3. Cliente verifica status
GET /api/v1/status/abc123

{
  "job_id": "abc123",
  "status": "completed",
  "transcription": "Oi, quero marcar uma consulta para amanhã às 10h",
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
        <h2 class="text-3xl font-bold mb-8">🎵 8 Formatos de Áudio Suportados</h2>
        
        <p class="text-gray-400 mb-8 max-w-3xl">
          WhatsApp usa OGG/OPUS. Navegadores usam WebM. iPhones usam M4A. 
          O Audio Processor aceita qualquer um e converte internamente via FFmpeg.
        </p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div class="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700">
            <div class="text-2xl mb-2">🎵</div>
            <div class="font-bold text-white">MP3</div>
            <div class="text-xs text-gray-500">Mais comum</div>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700">
            <div class="text-2xl mb-2">🎵</div>
            <div class="font-bold text-white">WAV</div>
            <div class="text-xs text-gray-500">Sem compressão</div>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700">
            <div class="text-2xl mb-2">🎵</div>
            <div class="font-bold text-white">OGG</div>
            <div class="text-xs text-gray-500">WhatsApp Android</div>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700">
            <div class="text-2xl mb-2">🎵</div>
            <div class="font-bold text-white">OPUS</div>
            <div class="text-xs text-gray-500">WhatsApp codec</div>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700">
            <div class="text-2xl mb-2">🎵</div>
            <div class="font-bold text-white">M4A</div>
            <div class="text-xs text-gray-500">iPhone/AAC</div>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700">
            <div class="text-2xl mb-2">🎵</div>
            <div class="font-bold text-white">FLAC</div>
            <div class="text-xs text-gray-500">Lossless</div>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700">
            <div class="text-2xl mb-2">🎵</div>
            <div class="font-bold text-white">AAC</div>
            <div class="text-xs text-gray-500">Alta qualidade</div>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700">
            <div class="text-2xl mb-2">🎵</div>
            <div class="font-bold text-white">WMA</div>
            <div class="text-xs text-gray-500">Windows legacy</div>
          </div>
        </div>

        <div class="bg-purple-950/20 rounded-xl p-6 border border-purple-900/30">
          <h4 class="text-purple-400 font-bold mb-4">Conversão Automática</h4>
          <p class="text-gray-400 text-sm">
            O sistema detecta o formato automaticamente (magic bytes, não extensão).
            Se o provider STT não suporta o formato, converte para WAV via FFmpeg
            antes de enviar. Tudo transparente para o chamador.
          </p>
        </div>
      </div>
    </section>

    <!-- MinIO Storage -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">📦 Storage com MinIO</h2>
        
        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="text-lg font-bold mb-4 text-purple-400">Por que MinIO?</h3>
            <ul class="space-y-3 text-gray-400 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">✓</span>
                <span><strong class="text-white">S3-compatible</strong> - mesma API do AWS S3, sem vendor lock</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">✓</span>
                <span><strong class="text-white">Self-hosted</strong> - dados ficam no seu controle</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">✓</span>
                <span><strong class="text-white">High performance</strong> - otimizado para arquivos médios</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">✓</span>
                <span><strong class="text-white">Web console</strong> - UI para debug e gestão</span>
              </li>
            </ul>
          </div>

          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h4 class="text-purple-400 font-bold mb-4">Configuração</h4>
            <div class="bg-gray-800 rounded-lg p-4">
              <pre class="text-sm text-gray-300"><code>MINIO_ENDPOINT=minio:9000
MINIO_ACCESS_KEY=minioadmin
MINIO_SECRET_KEY=*****
MINIO_BUCKET=audio-files
MINIO_USE_SSL=false

# Console de gestão
# http://localhost:9003</code></pre>
            </div>
          </div>
        </div>

        <!-- Lifecycle -->
        <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
          <h4 class="text-purple-400 font-bold mb-4">Lifecycle do Arquivo</h4>
          <div class="grid md:grid-cols-4 gap-4 text-center">
            <div>
              <div class="text-3xl mb-2">📥</div>
              <div class="font-bold text-white text-sm">Upload</div>
              <div class="text-xs text-gray-500">Cliente envia</div>
            </div>
            <div>
              <div class="text-3xl mb-2">💾</div>
              <div class="font-bold text-white text-sm">Store</div>
              <div class="text-xs text-gray-500">MinIO salva</div>
            </div>
            <div>
              <div class="text-3xl mb-2">⚙️</div>
              <div class="font-bold text-white text-sm">Process</div>
              <div class="text-xs text-gray-500">Worker baixa, processa</div>
            </div>
            <div>
              <div class="text-3xl mb-2">🗑️</div>
              <div class="font-bold text-white text-sm">Cleanup</div>
              <div class="text-xs text-gray-500">TTL expira, deleta</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Fallback Inteligente -->
    <section class="py-16 border-t border-gray-800 bg-gray-900/30">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">🔄 Fallback Inteligente</h2>
        
        <p class="text-gray-400 mb-8 max-w-3xl">
          Providers de IA falham. Groq pode ter pico de latência, ElevenLabs pode
          estar em manutenção. O sistema tenta automaticamente o próximo provider
          na cadeia de fallback.
        </p>

        <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800 mb-8">
          <div class="bg-gray-800 rounded-lg p-4">
            <pre class="text-sm text-gray-300 overflow-x-auto"><code># Cadeia de fallback STT
TRANSCRIPTION_SERVICE=groq  # Primary

try:
    result = groq_whisper.transcribe(audio)
except (Timeout, RateLimitError, ServiceUnavailable):
    logger.warning("Groq failed, falling back to OpenAI")
    result = openai_whisper.transcribe(audio)
except Exception:
    logger.error("All STT providers failed")
    raise AudioProcessingError("Transcription unavailable")

# Cadeia de fallback TTS  
TTS_SERVICE=elevenlabs  # Primary

try:
    audio = elevenlabs.synthesize(text)
except (Timeout, QuotaExceeded):
    logger.warning("ElevenLabs failed, falling back to OpenAI")
    audio = openai_tts.synthesize(text)
except Exception:
    logger.warning("Paid TTS failed, using free Edge TTS")
    audio = edge_tts.synthesize(text)  # Always available</code></pre>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div class="text-2xl mb-3">⏱️</div>
            <h4 class="font-bold text-white mb-2">Timeout Detection</h4>
            <p class="text-gray-400 text-sm">
              Se provider não responde em 30s, assume falha e tenta próximo.
            </p>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div class="text-2xl mb-3">💰</div>
            <h4 class="font-bold text-white mb-2">Quota Handling</h4>
            <p class="text-gray-400 text-sm">
              Rate limit ou quota excedida? Fallback automático sem perder a mensagem.
            </p>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div class="text-2xl mb-3">🆓</div>
            <h4 class="font-bold text-white mb-2">Free Tier Backup</h4>
            <p class="text-gray-400 text-sm">
              Edge TTS é gratuito e sempre disponível como último recurso.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Configuração por Tenant -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">🏢 Configuração por Tenant</h2>
        
        <p class="text-gray-400 mb-8 max-w-3xl">
          Cada tenant pode ter configurações de TTS personalizadas: voz diferente,
          provider preferido, velocidade de fala. Armazenado no Memory Engine
          e carregado em runtime.
        </p>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h4 class="text-purple-400 font-bold mb-4">Exemplo: Clínica Dental</h4>
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
            <h4 class="text-purple-400 font-bold mb-4">Exemplo: E-commerce</h4>
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
        <h2 class="text-3xl font-bold mb-8">📱 Integração com WhatsApp</h2>
        
        <div class="bg-gray-900/50 rounded-xl p-8 border border-gray-800 mb-8">
          <pre class="text-sm text-purple-400 overflow-x-auto"><code>┌─────────────────────────────────────────────────────────────────────────┐
│                    WhatsApp Voice Note Flow                              │
└─────────────────────────────────────────────────────────────────────────┘

  Cliente envia áudio          Audio Processor           AI Engine
         │                           │                       │
         ▼                           │                       │
   Evolution API                     │                       │
         │                           │                       │
         ▼                           │                       │
   WhatsApp Integration              │                       │
         │                           │                       │
         │  POST /transcribe         │                       │
         │──────────────────────────▶│                       │
         │                           │                       │
         │  { job_id: "abc" }        │                       │
         │◀──────────────────────────│                       │
         │                           │                       │
         │       [Celery processa]   │                       │
         │                           │                       │
         │  GET /status/abc          │                       │
         │──────────────────────────▶│                       │
         │                           │                       │
         │  { text: "quero..." }     │                       │
         │◀──────────────────────────│                       │
         │                           │                       │
         │  POST /chat (texto)       │                       │
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
   Evolution API                     │                       │
         │                           │                       │
         ▼                           │                       │
   Cliente recebe áudio              │                       │</code></pre>
        </div>

        <div class="bg-purple-950/20 rounded-xl p-6 border border-purple-900/30">
          <h4 class="text-purple-400 font-bold mb-4">Modo de Resposta Configurável</h4>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-gray-900 rounded-lg p-4">
              <div class="font-bold text-white mb-2">audio</div>
              <p class="text-gray-400 text-xs">
                Sempre responde em áudio. Ideal para usuários que preferem ouvir.
              </p>
            </div>
            <div class="bg-gray-900 rounded-lg p-4">
              <div class="font-bold text-white mb-2">text</div>
              <p class="text-gray-400 text-xs">
                Sempre responde em texto. Economia de custo de TTS.
              </p>
            </div>
            <div class="bg-gray-900 rounded-lg p-4">
              <div class="font-bold text-white mb-2">match</div>
              <p class="text-gray-400 text-xs">
                Responde no mesmo formato que recebeu (áudio → áudio, texto → texto).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Resultados -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">Resultados</h2>
        
        <div class="grid md:grid-cols-4 gap-6 mb-12">
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-purple-400 mb-2">99.5%</div>
            <div class="text-gray-400 text-sm">Uptime Transcrição</div>
            <div class="text-gray-500 text-xs mt-1">Com fallback multi-provider</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-purple-400 mb-2">&lt;3s</div>
            <div class="text-gray-400 text-sm">Transcrição (1min áudio)</div>
            <div class="text-gray-500 text-xs mt-1">Groq Whisper P95</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-purple-400 mb-2">8</div>
            <div class="text-gray-400 text-sm">Formatos Suportados</div>
            <div class="text-gray-500 text-xs mt-1">Conversão automática</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-purple-400 mb-2">5</div>
            <div class="text-gray-400 text-sm">Providers TTS</div>
            <div class="text-gray-500 text-xs mt-1">Incluindo free tier</div>
          </div>
        </div>

        <!-- Stack Técnico -->
        <div class="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
          <h3 class="text-xl font-bold mb-6 text-purple-400">Stack Técnico</h3>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-purple-400 font-bold mb-2">Framework</div>
              <p class="text-gray-400 text-sm">FastAPI + Uvicorn</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-purple-400 font-bold mb-2">Task Queue</div>
              <p class="text-gray-400 text-sm">Celery + Redis</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-purple-400 font-bold mb-2">Storage</div>
              <p class="text-gray-400 text-sm">MinIO (S3-compatible)</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-purple-400 font-bold mb-2">Audio Processing</div>
              <p class="text-gray-400 text-sm">FFmpeg</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-purple-400 font-bold mb-2">STT Primary</div>
              <p class="text-gray-400 text-sm">Groq Whisper Large v3</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-purple-400 font-bold mb-2">TTS Primary</div>
              <p class="text-gray-400 text-sm">ElevenLabs Multilingual v2</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-purple-400 font-bold mb-2">TTS Backup</div>
              <p class="text-gray-400 text-sm">OpenAI TTS-1-HD</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-purple-400 font-bold mb-2">TTS Free</div>
              <p class="text-gray-400 text-sm">Edge TTS (Microsoft)</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-4">Precisa de processamento de áudio?</h2>
        <p class="text-gray-400 mb-8">
          STT, TTS, conversão de formatos, integração com chatbots - 
          tenho experiência com os desafios de produção.
        </p>
        <NuxtLink 
          to="/contato" 
          class="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-lg transition-colors"
        >
          Entrar em Contato
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Audio Processor - Multi-Provider STT/TTS, Celery, MinIO | Marcelo Marleta',
  meta: [
    { 
      name: 'description', 
      content: 'Microsserviço de áudio com Groq Whisper, ElevenLabs, OpenAI TTS. Processamento assíncrono Celery, storage MinIO, fallback inteligente.' 
    }
  ]
})
</script>
