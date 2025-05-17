# Evolution API - Render Ready

Este repositório está pronto para ser implantado no Render.com usando Docker.

## Como usar:

1. Faça upload deste repositório no seu GitHub.
2. Acesse https://render.com, clique em **New Web Service**.
3. Conecte o repositório do GitHub.
4. Render detectará o Dockerfile automaticamente.
5. Adicione as seguintes variáveis de ambiente:

### Variáveis obrigatórias:

```
DATABASE_URL=postgresql://postgres:SUA_SENHA@SEU_HOST.supabase.co:5432/postgres
UPSTASH_REDIS_REST_URL=https://SEU_REDIS.upstash.io
UPSTASH_REDIS_REST_TOKEN=SUA_TOKEN_REDIS
PORT=3000
```

6. Clique em Deploy.

Pronto! O Evolution estará online.