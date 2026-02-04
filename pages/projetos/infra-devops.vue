<template>
  <div class="min-h-screen bg-gray-950 text-gray-100">
    <!-- Header -->
    <header class="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <NuxtLink to="/" class="text-emerald-400 hover:text-emerald-300 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
          Voltar
        </NuxtLink>
        <span class="text-gray-500 text-sm">Optimus AI Platform</span>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="py-16 px-4 border-b border-gray-800">
      <div class="max-w-4xl mx-auto">
        <div class="flex items-center gap-3 mb-6">
          <span class="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
            Infrastructure & DevOps
          </span>
          <span class="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-sm">
            Platform Engineering
          </span>
        </div>
        
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          Infrastructure &
          <span class="text-cyan-400"> DevOps Pipeline</span>
        </h1>
        
        <p class="text-xl text-gray-400 mb-8 leading-relaxed">
          Arquitetura containerizada production-grade com scaling horizontal automático, 
          alta disponibilidade via Redis Sentinel, e CI/CD com validação de arquitetura 
          integrada. Da prototipação ao scaling de múltiplas instâncias sem downtime.
        </p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-cyan-400">15+</div>
            <div class="text-sm text-gray-500">Microserviços</div>
          </div>
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-cyan-400">6</div>
            <div class="text-sm text-gray-500">Compose Overlays</div>
          </div>
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-cyan-400">3</div>
            <div class="text-sm text-gray-500">Sentinels HA</div>
          </div>
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-cyan-400">12</div>
            <div class="text-sm text-gray-500">Workflows CI/CD</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigation -->
    <nav class="sticky top-16 z-40 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800">
      <div class="max-w-4xl mx-auto px-4">
        <div class="flex gap-6 overflow-x-auto py-4 text-sm">
          <a href="#problema" class="text-gray-400 hover:text-cyan-400 whitespace-nowrap transition-colors">Problema</a>
          <a href="#containers" class="text-gray-400 hover:text-cyan-400 whitespace-nowrap transition-colors">Containers</a>
          <a href="#scaling" class="text-gray-400 hover:text-cyan-400 whitespace-nowrap transition-colors">Scaling</a>
          <a href="#ha" class="text-gray-400 hover:text-cyan-400 whitespace-nowrap transition-colors">Alta Disponibilidade</a>
          <a href="#cicd" class="text-gray-400 hover:text-cyan-400 whitespace-nowrap transition-colors">CI/CD</a>
          <a href="#seguranca" class="text-gray-400 hover:text-cyan-400 whitespace-nowrap transition-colors">Segurança</a>
          <a href="#operacoes" class="text-gray-400 hover:text-cyan-400 whitespace-nowrap transition-colors">Operações</a>
          <a href="#resultados" class="text-gray-400 hover:text-cyan-400 whitespace-nowrap transition-colors">Resultados</a>
        </div>
      </div>
    </nav>

    <!-- Content -->
    <main class="max-w-4xl mx-auto px-4 py-12">
      
      <!-- Problema -->
      <section id="problema" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400">!</span>
          O Problema
        </h2>
        
        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-4">
            Plataformas AI multi-tenant têm características únicas que complicam infraestrutura tradicional:
            workloads altamente variáveis (um prompt pode levar 100ms ou 30s), dependência crítica de serviços 
            externos (LLMs, WhatsApp), e a necessidade de isolar tenants enquanto compartilha recursos 
            eficientemente.
          </p>
          
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <h4 class="text-lg font-semibold text-gray-200 mb-4">Desafios Específicos</h4>
            <ul class="space-y-3 text-gray-400">
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">•</span>
                <span><strong class="text-gray-200">Spiky traffic:</strong> Campanhas de marketing podem 10x o tráfego em minutos — precisa escalar rápido e voltar sem desperdiçar recursos</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">•</span>
                <span><strong class="text-gray-200">Stateful services:</strong> Memory Engine e pgvector precisam de connection pools controlados — não é "spawn mais containers" e pronto</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">•</span>
                <span><strong class="text-gray-200">Redis como SPOF:</strong> Cache, sessões, filas, rate limiting — tudo passa pelo Redis. Precisa de HA real</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">•</span>
                <span><strong class="text-gray-200">12+ microserviços:</strong> Orquestrar deploys coordenados sem breaking changes entre serviços versionados diferente</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">•</span>
                <span><strong class="text-gray-200">Secrets sprawl:</strong> 40+ API keys de LLMs, webhooks, databases — precisam de rotação sem downtime</span>
              </li>
            </ul>
          </div>

          <p class="text-gray-300 leading-relaxed">
            A solução foi construída iterativamente: começou com um docker-compose monolítico, 
            evoluiu para overlays por ambiente, depois scaling horizontal com nginx LB, e finalmente 
            Redis Sentinel para HA. Cada passo foi motivado por necessidade real de produção.
          </p>
        </div>
      </section>

      <!-- Container Architecture -->
      <section id="containers" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400">📦</span>
          Container Architecture
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            Os Dockerfiles seguem padrões production-grade: multi-stage builds para imagens menores, 
            non-root users por segurança, BuildKit cache mounts para builds rápidos, e health checks 
            que realmente testam a aplicação (não só se o processo existe).
          </p>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono flex items-center justify-between">
              <span>memory-engine/Dockerfile</span>
              <span class="text-cyan-400">Production Patterns</span>
            </div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300"># Multi-stage build com Python 3.12-slim
FROM python:3.12-slim as base

# Non-root user por segurança (CVE mitigation)
RUN useradd --create-home --shell /bin/bash memory
USER memory

# BuildKit cache mount - não re-baixa wheels em cada build
RUN --mount=type=cache,target=/root/.cache/pip \
    pip install --no-cache-dir -r requirements.txt

# Health check que testa endpoint real, não só processo
HEALTHCHECK --interval=30s --timeout=15s --start-period=60s --retries=5 \
    CMD curl -f http://localhost:8050/health || exit 1

# Startup script (não CMD direto) para init logic
CMD ["/app/scripts/start-memory-engine.sh"]</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">Docker Compose Overlays</h3>
          
          <p class="text-gray-300 leading-relaxed mb-4">
            Em vez de um docker-compose.yml monolítico, usamos overlays que compõem configurações. 
            Isso permite que desenvolvimento, staging e produção compartilhem a base mas customizem 
            o que precisam — sem duplicação e sem drift acidental.
          </p>

          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-cyan-400 mb-2">docker-compose.yml</h4>
              <p class="text-sm text-gray-400">Base: todos os serviços, volumes, networks. Configuração comum que funciona em qualquer ambiente.</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-cyan-400 mb-2">docker-compose.scale.yml</h4>
              <p class="text-sm text-gray-400">Overlay: nginx-lb, migrations job separado, ports removidos (tudo via LB), WEB_CONCURRENCY configurável.</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-cyan-400 mb-2">docker-compose.sentinel.yml</h4>
              <p class="text-sm text-gray-400">Overlay: Redis master/replica/sentinel topology para HA. Serviços recebem REDIS_SENTINEL_* vars.</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-cyan-400 mb-2">docker-compose.dev.yml</h4>
              <p class="text-sm text-gray-400">Overlay: volumes de código montados, debug enabled, hot reload, ports expostos diretamente.</p>
            </div>
          </div>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">Composição de Overlays</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300"># Desenvolvimento local
docker compose -f docker-compose.yml -f docker-compose.dev.yml up

# Produção com scaling
docker compose -f docker-compose.yml -f docker-compose.scale.yml up \
  --scale ai-engine=3 \
  --scale backend-orchestrator=2

# Produção com HA completo
docker compose \
  -f docker-compose.yml \
  -f docker-compose.scale.yml \
  -f docker-compose.sentinel.yml \
  up -d</code></pre>
          </div>

          <!-- Resource Limits -->
          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">Resource Limits & Reservations</h3>
          
          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">docker-compose.yml - Redis com limits</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300">redis:
  image: redis:8.0-alpine
  command:
    - redis-server
    - --maxmemory 2gb
    - --maxmemory-policy allkeys-lru  # Eviction automático
    - --activedefrag yes              # Defrag em background
    - --latency-monitor-threshold 100
  deploy:
    resources:
      limits:
        cpus: '2.0'
        memory: 2G
      reservations:
        cpus: '0.5'
        memory: 512M
  labels:
    - "com.optimus.service=redis"
    - "com.optimus.environment=production"</code></pre>
          </div>
        </div>
      </section>

      <!-- Horizontal Scaling -->
      <section id="scaling" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400">📈</span>
          Horizontal Scaling
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            Scaling horizontal em Docker Compose parece simples (<code>--scale ai-engine=3</code>), 
            mas tem armadilhas. Portas conflitam, migrations rodam múltiplas vezes, e load balancing 
            precisa de DNS resolution dinâmico. A solução foi um nginx-lb dedicado com configuração 
            específica para containers escalados.
          </p>

          <!-- Architecture Diagram -->
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <h4 class="text-lg font-semibold text-gray-200 mb-4 text-center">Arquitetura de Scaling</h4>
            <div class="font-mono text-sm text-center">
              <div class="text-gray-500 mb-4">External Traffic</div>
              <div class="text-cyan-400 mb-2">↓</div>
              <div class="inline-block bg-cyan-500/20 border border-cyan-500/40 rounded-lg px-4 py-2 mb-4">
                <span class="text-cyan-400">nginx-lb</span>
                <span class="text-gray-500 text-xs block">:8010, :8020</span>
              </div>
              <div class="flex justify-center gap-2 text-cyan-400 mb-2">
                <span>↙</span>
                <span>↓</span>
                <span>↘</span>
              </div>
              <div class="flex justify-center gap-4 mb-4">
                <div class="bg-gray-800 rounded px-3 py-2">
                  <span class="text-green-400">ai-engine</span>
                  <span class="text-gray-500 text-xs block">replica 1</span>
                </div>
                <div class="bg-gray-800 rounded px-3 py-2">
                  <span class="text-green-400">ai-engine</span>
                  <span class="text-gray-500 text-xs block">replica 2</span>
                </div>
                <div class="bg-gray-800 rounded px-3 py-2">
                  <span class="text-green-400">ai-engine</span>
                  <span class="text-gray-500 text-xs block">replica 3</span>
                </div>
              </div>
              <div class="text-gray-500 text-xs">least_conn + dynamic DNS</div>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">Nginx Load Balancer</h3>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">nginx/nginx-lb.conf</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300"># DNS resolver do Docker interno - CRÍTICO para --scale
resolver 127.0.0.11 ipv6=off;

upstream ai_engine {
    zone ai_engine 64k;
    least_conn;  # Request vai para instância com menos conexões
    
    # 'resolve' habilita DNS dinâmico - novas replicas são descobertas
    server ai-engine:8010 resolve;
    
    keepalive 32;  # Connection pooling para backends
}

upstream backend_orchestrator {
    zone backend_orchestrator 64k;
    least_conn;
    server backend-orchestrator:8020 resolve;
    keepalive 32;
}

# Backend Orchestrator precisa de WebSocket para dashboard real-time
server {
    listen 8020;
    
    location / {
        proxy_pass http://backend_orchestrator;
        
        # WebSocket upgrade headers
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        
        # Timeouts maiores para WebSocket
        proxy_read_timeout 300s;
    }
}

# Mapping para upgrade de conexão
map $http_upgrade $connection_upgrade {
    default upgrade;
    '' close;
}</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">Migration Job Isolado</h3>
          
          <p class="text-gray-300 leading-relaxed mb-4">
            Quando você escala serviços, todos tentam rodar migrations ao iniciar — race condition 
            garantida. A solução foi um job dedicado que roda ANTES das replicas subirem, usando 
            <code>depends_on: condition: service_completed_successfully</code>.
          </p>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">docker-compose.scale.yml</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300"># Job único de migrations (roda uma vez, termina)
migrations:
  extends:
    file: docker-compose.yml
    service: memory-engine
  restart: "no"
  ports: []  # Sem exposição
  environment:
    - RUN_MIGRATIONS_ONLY=true
  command: >
    bash -c "
      python /app/scripts/wait-for-postgres.py &&
      python -m alembic upgrade head &&
      echo '✅ Migrations completed'
    "

# Replicas só sobem depois que migrations termina
memory-engine:
  extends:
    file: docker-compose.yml
    service: memory-engine
  environment:
    - SKIP_STARTUP_BOOTSTRAP=true  # Não tenta migrations
    - RUN_MIGRATIONS=false
  depends_on:
    migrations:
      condition: service_completed_successfully</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">Scale-Up Script</h3>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">scripts/scale-up.sh (opções)</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300">./scripts/scale-up.sh \
  --scale ai-engine=3 \
  --scale backend-orchestrator=2 \
  --scale memory-engine=2 \
  --build ai-engine \      # Rebuild só o que mudou
  --run-migrations \       # Força migrations
  --observability \        # Habilita Tempo/Loki/Alloy
  --logs on               # Tail logs das instâncias

# Scale down (mantém volumes)
./scripts/scale-up.sh --down

# Scale down + cleanup network
./scripts/scale-up.sh --down --prune-network</code></pre>
          </div>

          <!-- Stateful Considerations -->
          <div class="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 my-6">
            <h4 class="font-semibold text-yellow-400 mb-2">⚠️ Considerações Stateful</h4>
            <p class="text-sm text-gray-300">
              Memory Engine é stateful — mantém connection pools com PostgreSQL. Escalar de 2 para 6 
              replicas cria 6x mais conexões ao banco. Por isso configuramos <code>DB_POOL_SIZE</code> 
              e <code>DB_MAX_OVERFLOW</code> via env vars, permitindo ajuste dinâmico:
              <code class="text-yellow-400">DB_POOL_SIZE=5 DB_MAX_OVERFLOW=10</code> = máx 15 conexões/replica.
            </p>
          </div>
        </div>
      </section>

      <!-- High Availability -->
      <section id="ha" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400">🛡️</span>
          Alta Disponibilidade
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            Redis é crítico demais para ser single point of failure: cache, sessões, rate limiting, 
            filas Celery, WebSocket state. A solução foi Redis Sentinel — replicação automática com 
            failover gerenciado por consensus de 3 sentinels.
          </p>

          <!-- Sentinel Topology -->
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <h4 class="text-lg font-semibold text-gray-200 mb-4 text-center">Redis Sentinel Topology</h4>
            <div class="font-mono text-sm">
              <div class="flex justify-center gap-8 mb-6">
                <div class="text-center">
                  <div class="bg-purple-500/20 border border-purple-500/40 rounded-lg px-4 py-3 mb-2">
                    <span class="text-purple-400">sentinel-1</span>
                    <span class="text-gray-500 text-xs block">:26379</span>
                  </div>
                </div>
                <div class="text-center">
                  <div class="bg-purple-500/20 border border-purple-500/40 rounded-lg px-4 py-3 mb-2">
                    <span class="text-purple-400">sentinel-2</span>
                    <span class="text-gray-500 text-xs block">:26379</span>
                  </div>
                </div>
                <div class="text-center">
                  <div class="bg-purple-500/20 border border-purple-500/40 rounded-lg px-4 py-3 mb-2">
                    <span class="text-purple-400">sentinel-3</span>
                    <span class="text-gray-500 text-xs block">:26379</span>
                  </div>
                </div>
              </div>
              <div class="text-center text-gray-500 mb-4">quorum: 2 (2 de 3 precisam concordar)</div>
              <div class="text-center text-purple-400 mb-4">↓ monitora ↓</div>
              <div class="flex justify-center gap-6">
                <div class="text-center">
                  <div class="bg-green-500/20 border border-green-500/40 rounded-lg px-4 py-3">
                    <span class="text-green-400 font-bold">redis-master</span>
                    <span class="text-gray-500 text-xs block">:6379 (writes)</span>
                  </div>
                </div>
                <div class="text-gray-500 self-center">→ replica →</div>
                <div class="text-center">
                  <div class="bg-blue-500/20 border border-blue-500/40 rounded-lg px-4 py-3">
                    <span class="text-blue-400">redis-replica-1</span>
                    <span class="text-gray-500 text-xs block">:6379 (reads)</span>
                  </div>
                </div>
                <div class="text-center">
                  <div class="bg-blue-500/20 border border-blue-500/40 rounded-lg px-4 py-3">
                    <span class="text-blue-400">redis-replica-2</span>
                    <span class="text-gray-500 text-xs block">:6379 (reads)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">docker-compose.sentinel.yml (excerpt)</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300"># Redis Master com replicação habilitada
redis:
  image: redis:8.0-alpine
  hostname: redis-master
  command:
    - redis-server
    - --appendonly yes          # Durabilidade (AOF)
    - --lazyfree-lazy-eviction yes
    - --replica-announce-ip redis-master

# Replicas apontam para master
redis-replica-1:
  command:
    - redis-server
    - --replicaof redis-master 6379
    - --replica-announce-ip redis-replica-1

# Sentinels monitoram e fazem failover
redis-sentinel-1:
  command:
    - redis-sentinel
    - /etc/redis/sentinel.conf
    - --port 26379

# Serviços usam Sentinel mode
ai-engine:
  environment:
    - REDIS_SENTINEL_ENABLED=true
    - REDIS_SENTINEL_MASTER=mymaster
    - REDIS_SENTINEL_HOSTS=sentinel-1:26379,sentinel-2:26379,sentinel-3:26379</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">Failover Automático</h3>
          
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <ol class="space-y-3 text-gray-400">
              <li class="flex items-start gap-3">
                <span class="bg-purple-500/20 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">1</span>
                <span>Master fica inacessível (crash, network partition, ou qualquer falha)</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-purple-500/20 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">2</span>
                <span>Sentinels detectam (configurable timeout, default 30s)</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-purple-500/20 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">3</span>
                <span>Quorum de 2 sentinels concorda que master está down</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-purple-500/20 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">4</span>
                <span>Eleição de novo master entre replicas (baseia-se em replication offset)</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-purple-500/20 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">5</span>
                <span>Sentinels atualizam configuração; clientes reconectam automaticamente</span>
              </li>
            </ol>
          </div>

          <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-4 my-6">
            <h4 class="font-semibold text-green-400 mb-2">✓ Por que 3 Sentinels?</h4>
            <p class="text-sm text-gray-300">
              Com quorum de 2, você precisa de no mínimo 3 sentinels para tolerar 1 falha. 
              Se tiver só 2 sentinels e 1 falhar, não atinge quorum e failover não acontece. 
              Número ímpar evita split-brain (empate de votos).
            </p>
          </div>
        </div>
      </section>

      <!-- CI/CD -->
      <section id="cicd" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400">⚙️</span>
          CI/CD Pipeline
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            O pipeline não é só lint + test + deploy. Inclui validação de arquitetura que bloqueia 
            PRs que violam guardrails do projeto, LLM evaluation para mudanças no AI Engine, e 
            sync automático de OpenAPI specs.
          </p>

          <!-- Workflow Grid -->
          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                <h4 class="font-semibold text-gray-200">ci.yml</h4>
              </div>
              <p class="text-sm text-gray-400">Ruff lint, mypy type-check, pytest, Docker build. Roda em todo push/PR.</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <h4 class="font-semibold text-gray-200">guardrails.yml</h4>
              </div>
              <p class="text-sm text-gray-400">Validação de arquitetura. Bloqueia PRs que violam patterns definidos em policy.yaml.</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                <h4 class="font-semibold text-gray-200">e2e-tests.yml</h4>
              </div>
              <p class="text-sm text-gray-400">Testes end-to-end com pgvector + Redis reais. Valida fluxos multi-ERP.</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-2 h-2 bg-purple-400 rounded-full"></span>
                <h4 class="font-semibold text-gray-200">llm-eval.yml</h4>
              </div>
              <p class="text-sm text-gray-400">Avaliação de qualidade de outputs do AI Engine. Detecta regressões em prompts.</p>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">Architecture Guardrails</h3>
          
          <p class="text-gray-300 leading-relaxed mb-4">
            O sistema de guardrails usa um MCP server que analisa diffs e valida contra regras. 
            Se um PR viola um pattern (ex: import direto entre camadas, SQL raw em controllers), 
            o workflow falha e posta um comentário detalhado no PR.
          </p>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">.github/workflows/guardrails.yml (excerpt)</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300"># Roda só em PRs que tocam código Python
on:
  pull_request:
    paths:
      - 'ai-engine/**/*.py'
      - 'backend-orchestrator/**/*.py'
      - 'memory-engine/**/*.py'

jobs:
  validate:
    steps:
      - name: Generate diff
        run: |
          git diff origin/${{ github.base_ref }}...HEAD > pr.diff
          
      - name: Validate guardrails
        run: |
          python mcp_servers/optimus_project_mcp/cli_validate_diff.py < pr.diff
          
      # Se falhar, posta comentário no PR com as violações
      - name: Comment on PR (if violations)
        if: failure()
        uses: actions/github-script@v7
        with:
          script: |
            const violations = JSON.parse(fs.readFileSync('guardrails-result.json'));
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              body: formatViolations(violations)
            });</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">E2E Tests com Services</h3>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">.github/workflows/e2e-tests.yml</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300">jobs:
  e2e-tests:
    runs-on: ubuntu-latest
    timeout-minutes: 15
    
    # Containers reais como GitHub Actions services
    services:
      postgres:
        image: pgvector/pgvector:0.8.1-pg16
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-retries 5
      redis:
        image: redis/redis-stack:latest
        options: >-
          --health-cmd "redis-cli ping"
    
    steps:
      - name: Run migrations
        run: python -m alembic upgrade head
        
      - name: Run E2E tests
        run: |
          pytest tests/e2e/ -v --tb=short \
            --cov=ai_engine --cov-report=xml</code></pre>
          </div>
        </div>
      </section>

      <!-- Security -->
      <section id="seguranca" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400">🔐</span>
          Segurança
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            Com 40+ API keys (LLMs, WhatsApp, databases, observability), secrets management 
            não pode ser improvisado. O script secrets-manager.sh centraliza criação, validação, 
            backup criptografado e rotação de secrets.
          </p>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">scripts/secrets-manager.sh</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300">./secrets-manager.sh init        # Cria .env.secrets do exemplo
./secrets-manager.sh validate    # Verifica se todos estão preenchidos
./secrets-manager.sh backup      # Backup criptografado (GPG)
./secrets-manager.sh restore     # Restaura do backup
./secrets-manager.sh rotate      # Rotação interativa de keys
./secrets-manager.sh check-security  # Audit de issues</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">Separação de Secrets</h3>
          
          <div class="grid md:grid-cols-3 gap-4 my-6">
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-red-400 mb-2">.env.secrets</h4>
              <p class="text-sm text-gray-400">API keys, passwords, tokens. Nunca commitado. Gitignore'd.</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-yellow-400 mb-2">.env.models</h4>
              <p class="text-sm text-gray-400">Configurações de modelos LLM. Pode ser commitado (sem keys).</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-green-400 mb-2">.env.example</h4>
              <p class="text-sm text-gray-400">Template com placeholders. Commitado para documentação.</p>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">Container Security</h3>

          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <ul class="space-y-3 text-gray-400">
              <li class="flex items-start gap-3">
                <span class="text-green-400 mt-1">✓</span>
                <span><strong class="text-gray-200">Non-root users:</strong> Todos os containers rodam como usuário não-root (appuser:1001 ou similar). Mitiga privilege escalation.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-400 mt-1">✓</span>
                <span><strong class="text-gray-200">Slim base images:</strong> python:3.12-slim em vez de full. Menos pacotes = menos superfície de ataque.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-400 mt-1">✓</span>
                <span><strong class="text-gray-200">Read-only configs:</strong> Arquivos de config montados como :ro (read-only). Containers não podem modificar.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-400 mt-1">✓</span>
                <span><strong class="text-gray-200">Network isolation:</strong> Rede bridge dedicada (optimus). Services só acessíveis via LB.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-400 mt-1">✓</span>
                <span><strong class="text-gray-200">Memory Engine interno:</strong> Porta 8050 não exposta ao host — só acessível via nginx-lb internamente.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Operations -->
      <section id="operacoes" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">🔧</span>
          Scripts Operacionais
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            Operações do dia-a-dia são automatizadas em scripts bem documentados. Isso reduz 
            erro humano e permite que qualquer dev faça operações de produção com segurança.
          </p>

          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-blue-400 mb-2">scale-up.sh</h4>
              <p class="text-sm text-gray-400 mb-2">Scaling completo com build, migrations, e tail de logs.</p>
              <code class="text-xs text-gray-500">--scale, --build, --observability, --attach</code>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-blue-400 mb-2">validate_redis.sh</h4>
              <p class="text-sm text-gray-400 mb-2">Health check de Redis: ping, memory, connected clients.</p>
              <code class="text-xs text-gray-500">redis-cli info, dbsize, latency</code>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-blue-400 mb-2">run_load_tests.sh</h4>
              <p class="text-sm text-gray-400 mb-2">Load testing com k6 ou locust. Gera relatório.</p>
              <code class="text-xs text-gray-500">--users, --duration, --endpoint</code>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-blue-400 mb-2">trace_smoke_test.sh</h4>
              <p class="text-sm text-gray-400 mb-2">Valida tracing E2E: gera trace, verifica no Tempo.</p>
              <code class="text-xs text-gray-500">opentelemetry, tempo, span verification</code>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">Health Checks Úteis</h3>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">Quick Health Commands</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300"># Via load balancer
curl http://localhost:8010/health  # AI Engine
curl http://localhost:8020/health  # Backend Orchestrator

# Status dos containers
docker compose -f docker-compose.yml -f docker-compose.scale.yml ps

# Verificar LB routing (DNS resolution)
docker exec nginx-lb nslookup ai-engine
docker exec nginx-lb nslookup backend-orchestrator

# Redis health
docker exec optimus_redis_8_production redis-cli ping
docker exec optimus_redis_8_production redis-cli info memory</code></pre>
          </div>
        </div>
      </section>

      <!-- Results -->
      <section id="resultados" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400">📊</span>
          Resultados
        </h2>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-emerald-400 mb-2">&lt;5 min</div>
            <div class="text-gray-400">Deploy completo (build + migrations + scale)</div>
          </div>
          <div class="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-emerald-400 mb-2">99.9%</div>
            <div class="text-gray-400">Uptime com Redis Sentinel HA</div>
          </div>
          <div class="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-emerald-400 mb-2">0</div>
            <div class="text-gray-400">Secrets expostos (validação automática)</div>
          </div>
          <div class="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-emerald-400 mb-2">~30s</div>
            <div class="text-gray-400">Failover automático Redis</div>
          </div>
        </div>

        <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mt-8">
          <h3 class="text-xl font-semibold text-gray-200 mb-4">Lições Aprendidas</h3>
          <ul class="space-y-3 text-gray-400">
            <li class="flex items-start gap-3">
              <span class="text-cyan-400 mt-1">→</span>
              <span><strong class="text-gray-200">Compose overlays > monolítico:</strong> Manutenção muito mais fácil quando cada concern está isolado</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-cyan-400 mt-1">→</span>
              <span><strong class="text-gray-200">Migrations job separado:</strong> Evita race conditions e permite escalar replicas livremente</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-cyan-400 mt-1">→</span>
              <span><strong class="text-gray-200">Health checks reais:</strong> Testar o endpoint /health, não só se o processo existe</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-cyan-400 mt-1">→</span>
              <span><strong class="text-gray-200">DNS dinâmico no LB:</strong> Sem isso, nginx não descobre novas replicas</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-cyan-400 mt-1">→</span>
              <span><strong class="text-gray-200">Sentinel quorum ímpar:</strong> 3 sentinels com quorum 2 é o mínimo para HA real</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Tech Stack -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6">Stack Técnico</h2>
        <div class="flex flex-wrap gap-2">
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">Docker Compose</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">Nginx</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">Redis Sentinel</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">GitHub Actions</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">pgvector</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">BuildKit</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">Ruff</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">mypy</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">pytest</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">OpenTelemetry</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">Tempo</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">Loki</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">Bash</span>
        </div>
      </section>

      <!-- CTA -->
      <section class="border-t border-gray-800 pt-12">
        <div class="text-center">
          <h2 class="text-2xl font-bold mb-4">Explore Outros Case Studies</h2>
          <p class="text-gray-400 mb-8">Veja como outros componentes do Optimus foram construídos</p>
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink to="/projetos/observability" class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition-colors">
              Observability Stack →
            </NuxtLink>
            <NuxtLink to="/projetos/backend-orchestrator" class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition-colors">
              Backend Orchestrator →
            </NuxtLink>
            <NuxtLink to="/projetos/memory-engine" class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition-colors">
              Memory Engine →
            </NuxtLink>
          </div>
        </div>
      </section>

    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-800 py-8 mt-12">
      <div class="max-w-4xl mx-auto px-4 text-center text-gray-500 text-sm">
        <p>Case Study: Infrastructure & DevOps — Optimus AI Platform</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
useHead({
  title: 'Infrastructure & DevOps - Optimus AI | Marcelo Marleta',
  meta: [
    { name: 'description', content: 'Case study: Arquitetura containerizada production-grade com Docker Compose, scaling horizontal via Nginx LB, Redis Sentinel para HA, e CI/CD com validação de arquitetura.' }
  ]
})
</script>
