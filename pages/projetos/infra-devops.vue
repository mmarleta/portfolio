<template>
  <ProjectPage class="text-gray-100">
    <ProjectHeader
      back-label-key="cases.infraDevops.back"
      subtitle-key="cases.infraDevops.platformName"
    />

    <ProjectHeroBlock :config="heroConfig" />

    <!-- Navigation -->
    <nav class="sticky top-16 z-40 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800">
      <div class="max-w-4xl mx-auto px-4">
        <div class="flex gap-6 overflow-x-auto py-4 text-sm">
          <a
            href="#problema"
            class="text-gray-400 hover:text-cyan-400 whitespace-nowrap transition-colors"
            >{{ $t('cases.infraDevops.nav.problem') }}</a
          >
          <a
            href="#containers"
            class="text-gray-400 hover:text-cyan-400 whitespace-nowrap transition-colors"
            >{{ $t('cases.infraDevops.nav.containers') }}</a
          >
          <a
            href="#scaling"
            class="text-gray-400 hover:text-cyan-400 whitespace-nowrap transition-colors"
            >{{ $t('cases.infraDevops.nav.scaling') }}</a
          >
          <a
            href="#ha"
            class="text-gray-400 hover:text-cyan-400 whitespace-nowrap transition-colors"
            >{{ $t('cases.infraDevops.nav.ha') }}</a
          >
          <a
            href="#cicd"
            class="text-gray-400 hover:text-cyan-400 whitespace-nowrap transition-colors"
            >{{ $t('cases.infraDevops.nav.cicd') }}</a
          >
          <a
            href="#seguranca"
            class="text-gray-400 hover:text-cyan-400 whitespace-nowrap transition-colors"
            >{{ $t('cases.infraDevops.nav.security') }}</a
          >
          <a
            href="#operacoes"
            class="text-gray-400 hover:text-cyan-400 whitespace-nowrap transition-colors"
            >{{ $t('cases.infraDevops.nav.operations') }}</a
          >
          <a
            href="#resultados"
            class="text-gray-400 hover:text-cyan-400 whitespace-nowrap transition-colors"
            >{{ $t('cases.infraDevops.nav.results') }}</a
          >
        </div>
      </div>
    </nav>

    <!-- Content -->
    <main class="max-w-4xl mx-auto px-4 py-12">
      <!-- Problema -->
      <section id="problema" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span
            class="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400"
            >!</span
          >
          {{ $t('cases.infraDevops.problem.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-4">
            {{ $t('cases.infraDevops.problem.description') }}
          </p>

          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <h4 class="text-lg font-semibold text-gray-200 mb-4">
              {{ $t('cases.infraDevops.problem.challengesTitle') }}
            </h4>
            <ul class="space-y-3 text-gray-400">
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">•</span>
                <span
                  ><strong class="text-gray-200">Spiky traffic:</strong>
                  {{ $t('cases.infraDevops.problem.challenges.spikyTraffic') }}</span
                >
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">•</span>
                <span
                  ><strong class="text-gray-200">Stateful services:</strong>
                  {{ $t('cases.infraDevops.problem.challenges.statefulServices') }}</span
                >
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">•</span>
                <span
                  ><strong class="text-gray-200">Redis as SPOF:</strong>
                  {{ $t('cases.infraDevops.problem.challenges.redisSPOF') }}</span
                >
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">•</span>
                <span
                  ><strong class="text-gray-200">12+ microservices:</strong>
                  {{ $t('cases.infraDevops.problem.challenges.microservices') }}</span
                >
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">•</span>
                <span
                  ><strong class="text-gray-200">Secrets sprawl:</strong>
                  {{ $t('cases.infraDevops.problem.challenges.secretsSprawl') }}</span
                >
              </li>
            </ul>
          </div>

          <p class="text-gray-300 leading-relaxed">
            {{ $t('cases.infraDevops.problem.solution') }}
          </p>
        </div>
      </section>

      <!-- Container Architecture -->
      <section id="containers" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span
            class="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400"
            >📦</span
          >
          {{ $t('cases.infraDevops.containers.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            {{ $t('cases.infraDevops.containers.description') }}
          </p>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div
              class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono flex items-center justify-between"
            >
              <span>memory-engine/Dockerfile</span>
              <span class="text-cyan-400">{{
                $t('cases.infraDevops.containers.dockerfileTitle')
              }}</span>
            </div>
            <pre
              class="p-4 overflow-x-auto text-sm"
            ><code class="text-gray-300"># Multi-stage build with Python 3.12-slim
FROM python:3.12-slim as base

# Non-root user for security (CVE mitigation)
RUN useradd --create-home --shell /bin/bash memory
USER memory

# BuildKit cache mount - doesn't re-download wheels on each build
RUN --mount=type=cache,target=/root/.cache/pip \
    pip install --no-cache-dir -r requirements.txt

# Health check that tests real endpoint, not just process
HEALTHCHECK --interval=30s --timeout=15s --start-period=60s --retries=5 \
    CMD curl -f http://localhost:8050/health || exit 1

# Startup script (not direct CMD) for init logic
CMD ["/app/scripts/start-memory-engine.sh"]</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">
            {{ $t('cases.infraDevops.containers.overlaysTitle') }}
          </h3>

          <p class="text-gray-300 leading-relaxed mb-4">
            {{ $t('cases.infraDevops.containers.overlaysDescription') }}
          </p>

          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-cyan-400 mb-2">docker-compose.yml</h4>
              <p class="text-sm text-gray-400">
                {{ $t('cases.infraDevops.containers.overlays.base') }}
              </p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-cyan-400 mb-2">docker-compose.scale.yml</h4>
              <p class="text-sm text-gray-400">
                {{ $t('cases.infraDevops.containers.overlays.scale') }}
              </p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-cyan-400 mb-2">docker-compose.sentinel.yml</h4>
              <p class="text-sm text-gray-400">
                {{ $t('cases.infraDevops.containers.overlays.sentinel') }}
              </p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-cyan-400 mb-2">docker-compose.dev.yml</h4>
              <p class="text-sm text-gray-400">
                {{ $t('cases.infraDevops.containers.overlays.dev') }}
              </p>
            </div>
          </div>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">
              {{ $t('cases.infraDevops.containers.compositionTitle') }}
            </div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300"># Local development
docker compose -f docker-compose.yml -f docker-compose.dev.yml up

# Production with scaling
docker compose -f docker-compose.yml -f docker-compose.scale.yml up \
  --scale ai-engine=3 \
  --scale backend-orchestrator=2

# Production with full HA
docker compose \
  -f docker-compose.yml \
  -f docker-compose.scale.yml \
  -f docker-compose.sentinel.yml \
  up -d</code></pre>
          </div>

          <!-- Resource Limits -->
          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">
            {{ $t('cases.infraDevops.containers.resourceLimitsTitle') }}
          </h3>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">
              docker-compose.yml - Redis with limits
            </div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300">redis:
  image: redis:8.0-alpine
  command:
    - redis-server
    - --maxmemory 2gb
    - --maxmemory-policy allkeys-lru  # Automatic eviction
    - --activedefrag yes              # Background defrag
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
          <span
            class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400"
            >📈</span
          >
          {{ $t('cases.infraDevops.scaling.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            {{ $t('cases.infraDevops.scaling.description') }}
          </p>

          <!-- Architecture Diagram -->
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <h4 class="text-lg font-semibold text-gray-200 mb-4 text-center">
              {{ $t('cases.infraDevops.scaling.architectureTitle') }}
            </h4>
            <div class="font-mono text-sm text-center">
              <div class="text-gray-500 mb-4">
                {{ $t('cases.infraDevops.scaling.externalTraffic') }}
              </div>
              <div class="text-cyan-400 mb-2">↓</div>
              <div
                class="inline-block bg-cyan-500/20 border border-cyan-500/40 rounded-lg px-4 py-2 mb-4"
              >
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
              <div class="text-gray-500 text-xs">
                {{ $t('cases.infraDevops.scaling.dynamicDns') }}
              </div>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">
            {{ $t('cases.infraDevops.scaling.nginxLbTitle') }}
          </h3>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">
              nginx/nginx-lb.conf
            </div>
            <pre
              class="p-4 overflow-x-auto text-sm"
            ><code class="text-gray-300"># Docker internal DNS resolver - CRITICAL for --scale
resolver 127.0.0.11 ipv6=off;

upstream ai_engine {
    zone ai_engine 64k;
    least_conn;  # Request goes to instance with fewest connections
    
    # 'resolve' enables dynamic DNS - new replicas are discovered
    server ai-engine:8010 resolve;
    
    keepalive 32;  # Connection pooling for backends
}

upstream backend_orchestrator {
    zone backend_orchestrator 64k;
    least_conn;
    server backend-orchestrator:8020 resolve;
    keepalive 32;
}

# Backend Orchestrator needs WebSocket for real-time dashboard
server {
    listen 8020;
    
    location / {
        proxy_pass http://backend_orchestrator;
        
        # WebSocket upgrade headers
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        
        # Longer timeouts for WebSocket
        proxy_read_timeout 300s;
    }
}

# Mapping for connection upgrade
map $http_upgrade $connection_upgrade {
    default upgrade;
    '' close;
}</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">
            {{ $t('cases.infraDevops.scaling.migrationJobTitle') }}
          </h3>

          <p class="text-gray-300 leading-relaxed mb-4">
            {{ $t('cases.infraDevops.scaling.migrationJobDescription') }}
          </p>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">
              docker-compose.scale.yml
            </div>
            <pre
              class="p-4 overflow-x-auto text-sm"
            ><code class="text-gray-300"># Single migrations job (runs once, exits)
migrations:
  extends:
    file: docker-compose.yml
    service: memory-engine
  restart: "no"
  ports: []  # No exposure
  environment:
    - RUN_MIGRATIONS_ONLY=true
  command: >
    bash -c "
      python /app/scripts/wait-for-postgres.py &&
      python -m alembic upgrade head &&
      echo '✅ Migrations completed'
    "

# Replicas only come up after migrations finish
memory-engine:
  extends:
    file: docker-compose.yml
    service: memory-engine
  environment:
    - SKIP_STARTUP_BOOTSTRAP=true  # Don't attempt migrations
    - RUN_MIGRATIONS=false
  depends_on:
    migrations:
      condition: service_completed_successfully</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">
            {{ $t('cases.infraDevops.scaling.scaleUpScriptTitle') }}
          </h3>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">
              scripts/scale-up.sh (options)
            </div>
            <pre
              class="p-4 overflow-x-auto text-sm"
            ><code class="text-gray-300">./scripts/scale-up.sh \
  --scale ai-engine=3 \
  --scale backend-orchestrator=2 \
  --scale memory-engine=2 \
  --build ai-engine \      # Rebuild only what changed
  --run-migrations \       # Force migrations
  --observability \        # Enable Tempo/Loki/Alloy
  --logs on               # Tail instance logs

# Scale down (keeps volumes)
./scripts/scale-up.sh --down

# Scale down + cleanup network
./scripts/scale-up.sh --down --prune-network</code></pre>
          </div>

          <!-- Stateful Considerations -->
          <div class="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 my-6">
            <h4 class="font-semibold text-yellow-400 mb-2">
              ⚠️ {{ $t('cases.infraDevops.scaling.statefulConsiderations.title') }}
            </h4>
            <p class="text-sm text-gray-300">
              {{ $t('cases.infraDevops.scaling.statefulConsiderations.description') }}
              <code class="text-yellow-400">DB_POOL_SIZE=5 DB_MAX_OVERFLOW=10</code> = max 15
              connections/replica.
            </p>
          </div>
        </div>
      </section>

      <!-- High Availability -->
      <section id="ha" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span
            class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400"
            >🛡️</span
          >
          {{ $t('cases.infraDevops.ha.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            {{ $t('cases.infraDevops.ha.description') }}
          </p>

          <!-- Sentinel Topology -->
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <h4 class="text-lg font-semibold text-gray-200 mb-4 text-center">
              {{ $t('cases.infraDevops.ha.topologyTitle') }}
            </h4>
            <div class="font-mono text-sm">
              <div class="flex justify-center gap-8 mb-6">
                <div class="text-center">
                  <div
                    class="bg-purple-500/20 border border-purple-500/40 rounded-lg px-4 py-3 mb-2"
                  >
                    <span class="text-purple-400">sentinel-1</span>
                    <span class="text-gray-500 text-xs block">:26379</span>
                  </div>
                </div>
                <div class="text-center">
                  <div
                    class="bg-purple-500/20 border border-purple-500/40 rounded-lg px-4 py-3 mb-2"
                  >
                    <span class="text-purple-400">sentinel-2</span>
                    <span class="text-gray-500 text-xs block">:26379</span>
                  </div>
                </div>
                <div class="text-center">
                  <div
                    class="bg-purple-500/20 border border-purple-500/40 rounded-lg px-4 py-3 mb-2"
                  >
                    <span class="text-purple-400">sentinel-3</span>
                    <span class="text-gray-500 text-xs block">:26379</span>
                  </div>
                </div>
              </div>
              <div class="text-center text-gray-500 mb-4">
                {{ $t('cases.infraDevops.ha.quorum') }}
              </div>
              <div class="text-center text-purple-400 mb-4">
                ↓ {{ $t('cases.infraDevops.ha.monitors') }} ↓
              </div>
              <div class="flex justify-center gap-6">
                <div class="text-center">
                  <div class="bg-green-500/20 border border-green-500/40 rounded-lg px-4 py-3">
                    <span class="text-green-400 font-bold">redis-master</span>
                    <span class="text-gray-500 text-xs block"
                      >:6379 {{ $t('cases.infraDevops.ha.writes') }}</span
                    >
                  </div>
                </div>
                <div class="text-gray-500 self-center">→ replica →</div>
                <div class="text-center">
                  <div class="bg-blue-500/20 border border-blue-500/40 rounded-lg px-4 py-3">
                    <span class="text-blue-400">redis-replica-1</span>
                    <span class="text-gray-500 text-xs block"
                      >:6379 {{ $t('cases.infraDevops.ha.reads') }}</span
                    >
                  </div>
                </div>
                <div class="text-center">
                  <div class="bg-blue-500/20 border border-blue-500/40 rounded-lg px-4 py-3">
                    <span class="text-blue-400">redis-replica-2</span>
                    <span class="text-gray-500 text-xs block"
                      >:6379 {{ $t('cases.infraDevops.ha.reads') }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">
              docker-compose.sentinel.yml (excerpt)
            </div>
            <pre
              class="p-4 overflow-x-auto text-sm"
            ><code class="text-gray-300"># Redis Master with replication enabled
redis:
  image: redis:8.0-alpine
  hostname: redis-master
  command:
    - redis-server
    - --appendonly yes          # Durability (AOF)
    - --lazyfree-lazy-eviction yes
    - --replica-announce-ip redis-master

# Replicas point to master
redis-replica-1:
  command:
    - redis-server
    - --replicaof redis-master 6379
    - --replica-announce-ip redis-replica-1

# Sentinels monitor and perform failover
redis-sentinel-1:
  command:
    - redis-sentinel
    - /etc/redis/sentinel.conf
    - --port 26379

# Services use Sentinel mode
ai-engine:
  environment:
    - REDIS_SENTINEL_ENABLED=true
    - REDIS_SENTINEL_MASTER=mymaster
    - REDIS_SENTINEL_HOSTS=sentinel-1:26379,sentinel-2:26379,sentinel-3:26379</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">
            {{ $t('cases.infraDevops.ha.failoverTitle') }}
          </h3>

          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <ol class="space-y-3 text-gray-400">
              <li class="flex items-start gap-3">
                <span
                  class="bg-purple-500/20 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0"
                  >1</span
                >
                <span>{{ $t('cases.infraDevops.ha.failoverSteps.step1') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span
                  class="bg-purple-500/20 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0"
                  >2</span
                >
                <span>{{ $t('cases.infraDevops.ha.failoverSteps.step2') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span
                  class="bg-purple-500/20 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0"
                  >3</span
                >
                <span>{{ $t('cases.infraDevops.ha.failoverSteps.step3') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span
                  class="bg-purple-500/20 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0"
                  >4</span
                >
                <span>{{ $t('cases.infraDevops.ha.failoverSteps.step4') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span
                  class="bg-purple-500/20 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0"
                  >5</span
                >
                <span>{{ $t('cases.infraDevops.ha.failoverSteps.step5') }}</span>
              </li>
            </ol>
          </div>

          <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-4 my-6">
            <h4 class="font-semibold text-green-400 mb-2">
              ✓ {{ $t('cases.infraDevops.ha.whyThreeSentinels.title') }}
            </h4>
            <p class="text-sm text-gray-300">
              {{ $t('cases.infraDevops.ha.whyThreeSentinels.description') }}
            </p>
          </div>
        </div>
      </section>

      <!-- CI/CD -->
      <section id="cicd" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span
            class="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400"
            >⚙️</span
          >
          {{ $t('cases.infraDevops.cicd.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            {{ $t('cases.infraDevops.cicd.description') }}
          </p>

          <!-- Workflow Grid -->
          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                <h4 class="font-semibold text-gray-200">
                  {{ $t('cases.infraDevops.cicd.workflows.ci.title') }}
                </h4>
              </div>
              <p class="text-sm text-gray-400">
                {{ $t('cases.infraDevops.cicd.workflows.ci.description') }}
              </p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <h4 class="font-semibold text-gray-200">
                  {{ $t('cases.infraDevops.cicd.workflows.guardrails.title') }}
                </h4>
              </div>
              <p class="text-sm text-gray-400">
                {{ $t('cases.infraDevops.cicd.workflows.guardrails.description') }}
              </p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                <h4 class="font-semibold text-gray-200">
                  {{ $t('cases.infraDevops.cicd.workflows.e2e.title') }}
                </h4>
              </div>
              <p class="text-sm text-gray-400">
                {{ $t('cases.infraDevops.cicd.workflows.e2e.description') }}
              </p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-2 h-2 bg-purple-400 rounded-full"></span>
                <h4 class="font-semibold text-gray-200">
                  {{ $t('cases.infraDevops.cicd.workflows.llmEval.title') }}
                </h4>
              </div>
              <p class="text-sm text-gray-400">
                {{ $t('cases.infraDevops.cicd.workflows.llmEval.description') }}
              </p>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">
            {{ $t('cases.infraDevops.cicd.guardrailsTitle') }}
          </h3>

          <p class="text-gray-300 leading-relaxed mb-4">
            {{ $t('cases.infraDevops.cicd.guardrailsDescription') }}
          </p>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">
              .github/workflows/guardrails.yml (excerpt)
            </div>
            <pre
              v-pre
              class="p-4 overflow-x-auto text-sm"
            ><code class="text-gray-300"># Runs only on PRs that touch Python code
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
          
      # If fails, post comment on PR with violations
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

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">
            {{ $t('cases.infraDevops.cicd.e2eTestsTitle') }}
          </h3>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">
              .github/workflows/e2e-tests.yml
            </div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300">jobs:
  e2e-tests:
    runs-on: ubuntu-latest
    timeout-minutes: 15
    
    # Real containers as GitHub Actions services
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
          <span
            class="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400"
            >🔐</span
          >
          {{ $t('cases.infraDevops.security.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            {{ $t('cases.infraDevops.security.description') }}
          </p>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">
              scripts/secrets-manager.sh
            </div>
            <pre
              class="p-4 overflow-x-auto text-sm"
            ><code class="text-gray-300">./secrets-manager.sh init        # Create .env.secrets from example
./secrets-manager.sh validate    # Verify all are filled
./secrets-manager.sh backup      # Encrypted backup (GPG)
./secrets-manager.sh restore     # Restore from backup
./secrets-manager.sh rotate      # Interactive key rotation
./secrets-manager.sh check-security  # Audit for issues</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">
            {{ $t('cases.infraDevops.security.secretsSeparationTitle') }}
          </h3>

          <div class="grid md:grid-cols-3 gap-4 my-6">
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-red-400 mb-2">.env.secrets</h4>
              <p class="text-sm text-gray-400">
                {{ $t('cases.infraDevops.security.secretsFiles.secrets') }}
              </p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-yellow-400 mb-2">.env.models</h4>
              <p class="text-sm text-gray-400">
                {{ $t('cases.infraDevops.security.secretsFiles.models') }}
              </p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-green-400 mb-2">.env.example</h4>
              <p class="text-sm text-gray-400">
                {{ $t('cases.infraDevops.security.secretsFiles.example') }}
              </p>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">
            {{ $t('cases.infraDevops.security.containerSecurityTitle') }}
          </h3>

          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <ul class="space-y-3 text-gray-400">
              <li class="flex items-start gap-3">
                <span class="text-green-400 mt-1">✓</span>
                <span
                  ><strong class="text-gray-200">Non-root users:</strong>
                  {{ $t('cases.infraDevops.security.containerSecurity.nonRoot') }}</span
                >
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-400 mt-1">✓</span>
                <span
                  ><strong class="text-gray-200">Slim base images:</strong>
                  {{ $t('cases.infraDevops.security.containerSecurity.slimImages') }}</span
                >
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-400 mt-1">✓</span>
                <span
                  ><strong class="text-gray-200">Read-only configs:</strong>
                  {{ $t('cases.infraDevops.security.containerSecurity.readOnlyConfigs') }}</span
                >
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-400 mt-1">✓</span>
                <span
                  ><strong class="text-gray-200">Network isolation:</strong>
                  {{ $t('cases.infraDevops.security.containerSecurity.networkIsolation') }}</span
                >
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-400 mt-1">✓</span>
                <span
                  ><strong class="text-gray-200">Internal Memory Engine:</strong>
                  {{ $t('cases.infraDevops.security.containerSecurity.internalEngine') }}</span
                >
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Operations -->
      <section id="operacoes" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span
            class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400"
            >🔧</span
          >
          {{ $t('cases.infraDevops.operations.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            {{ $t('cases.infraDevops.operations.description') }}
          </p>

          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-blue-400 mb-2">
                {{ $t('cases.infraDevops.operations.scripts.scaleUp.title') }}
              </h4>
              <p class="text-sm text-gray-400 mb-2">
                {{ $t('cases.infraDevops.operations.scripts.scaleUp.description') }}
              </p>
              <code class="text-xs text-gray-500">--scale, --build, --observability, --attach</code>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-blue-400 mb-2">
                {{ $t('cases.infraDevops.operations.scripts.validateRedis.title') }}
              </h4>
              <p class="text-sm text-gray-400 mb-2">
                {{ $t('cases.infraDevops.operations.scripts.validateRedis.description') }}
              </p>
              <code class="text-xs text-gray-500">redis-cli info, dbsize, latency</code>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-blue-400 mb-2">
                {{ $t('cases.infraDevops.operations.scripts.loadTests.title') }}
              </h4>
              <p class="text-sm text-gray-400 mb-2">
                {{ $t('cases.infraDevops.operations.scripts.loadTests.description') }}
              </p>
              <code class="text-xs text-gray-500">--users, --duration, --endpoint</code>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-blue-400 mb-2">
                {{ $t('cases.infraDevops.operations.scripts.traceSmokeTest.title') }}
              </h4>
              <p class="text-sm text-gray-400 mb-2">
                {{ $t('cases.infraDevops.operations.scripts.traceSmokeTest.description') }}
              </p>
              <code class="text-xs text-gray-500">opentelemetry, tempo, span verification</code>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">
            {{ $t('cases.infraDevops.operations.healthChecksTitle') }}
          </h3>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">
              Quick Health Commands
            </div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300"># Via load balancer
curl http://localhost:8010/health  # AI Engine
curl http://localhost:8020/health  # Backend Orchestrator

# Container status
docker compose -f docker-compose.yml -f docker-compose.scale.yml ps

# Check LB routing (DNS resolution)
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
          <span
            class="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400"
            >📊</span
          >
          {{ $t('cases.infraDevops.results.title') }}
        </h2>

        <div class="grid md:grid-cols-2 gap-6">
          <div
            class="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-lg p-6"
          >
            <div class="text-3xl font-bold text-emerald-400 mb-2">&lt;5 min</div>
            <div class="text-gray-400">
              {{ $t('cases.infraDevops.results.metrics.deployTime') }}
            </div>
          </div>
          <div
            class="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-lg p-6"
          >
            <div class="text-3xl font-bold text-emerald-400 mb-2">99.9%</div>
            <div class="text-gray-400">{{ $t('cases.infraDevops.results.metrics.uptime') }}</div>
          </div>
          <div
            class="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-lg p-6"
          >
            <div class="text-3xl font-bold text-emerald-400 mb-2">0</div>
            <div class="text-gray-400">
              {{ $t('cases.infraDevops.results.metrics.secretsExposed') }}
            </div>
          </div>
          <div
            class="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-lg p-6"
          >
            <div class="text-3xl font-bold text-emerald-400 mb-2">~30s</div>
            <div class="text-gray-400">{{ $t('cases.infraDevops.results.metrics.failover') }}</div>
          </div>
        </div>

        <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mt-8">
          <h3 class="text-xl font-semibold text-gray-200 mb-4">
            {{ $t('cases.infraDevops.results.lessonsLearned.title') }}
          </h3>
          <ul class="space-y-3 text-gray-400">
            <li class="flex items-start gap-3">
              <span class="text-cyan-400 mt-1">→</span>
              <span
                ><strong class="text-gray-200">{{
                  $t('cases.infraDevops.results.lessonsLearned.overlays')
                }}</strong></span
              >
            </li>
            <li class="flex items-start gap-3">
              <span class="text-cyan-400 mt-1">→</span>
              <span
                ><strong class="text-gray-200">{{
                  $t('cases.infraDevops.results.lessonsLearned.migrations')
                }}</strong></span
              >
            </li>
            <li class="flex items-start gap-3">
              <span class="text-cyan-400 mt-1">→</span>
              <span
                ><strong class="text-gray-200">{{
                  $t('cases.infraDevops.results.lessonsLearned.healthChecks')
                }}</strong></span
              >
            </li>
            <li class="flex items-start gap-3">
              <span class="text-cyan-400 mt-1">→</span>
              <span
                ><strong class="text-gray-200">{{
                  $t('cases.infraDevops.results.lessonsLearned.dynamicDns')
                }}</strong></span
              >
            </li>
            <li class="flex items-start gap-3">
              <span class="text-cyan-400 mt-1">→</span>
              <span
                ><strong class="text-gray-200">{{
                  $t('cases.infraDevops.results.lessonsLearned.sentinelQuorum')
                }}</strong></span
              >
            </li>
          </ul>
        </div>
      </section>

      <!-- Tech Stack -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6">{{ $t('cases.infraDevops.techStack') }}</h2>
        <div class="flex flex-wrap gap-2">
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
            >Docker Compose</span
          >
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">Nginx</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
            >Redis Sentinel</span
          >
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
            >GitHub Actions</span
          >
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">pgvector</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">BuildKit</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">Ruff</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">mypy</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">pytest</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
            >OpenTelemetry</span
          >
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">Tempo</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">Loki</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">Bash</span>
        </div>
      </section>

      <!-- CTA -->
      <ProjectCTA
        title-key="cases.infraDevops.cta.title"
        description-key="cases.infraDevops.cta.description"
        section-class="border-t border-gray-800 pt-12"
        container-class="text-center"
        title-class="text-2xl font-bold mb-4"
      >
        <template #actions>
          <LocaleLink
            to="/projetos/observability"
            class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition-colors"
          >
            Observability Stack →
          </LocaleLink>
          <LocaleLink
            to="/projetos/backend-orchestrator"
            class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition-colors"
          >
            Backend Orchestrator →
          </LocaleLink>
          <LocaleLink
            to="/projetos/memory-engine"
            class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition-colors"
          >
            Memory Engine →
          </LocaleLink>
        </template>
      </ProjectCTA>
    </main>

    <!-- Closing Note -->
    <section class="border-t border-gray-800 py-8 mt-12">
      <div class="max-w-4xl mx-auto px-4 text-center text-gray-500 text-sm">
        <p>{{ $t('cases.infraDevops.footer') }}</p>
      </div>
    </section>
  </ProjectPage>
</template>

<script setup>
import { heroBlocksBySlug } from '~/data/project-heroes'

const heroConfig = heroBlocksBySlug.infraDevops
const { t } = useI18n()

useHead({
  title: t('cases.infraDevops.meta.title'),
  meta: [{ name: 'description', content: t('cases.infraDevops.meta.description') }],
})
</script>
