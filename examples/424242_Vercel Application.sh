#!/bin/bash

PROJECT_DIR="/path-to-your-project"
DEPLOY_URL="your-deploy-url"

cd "${PROJECT_DIR}"

sed -i .bak 's/^FT_CLIENT_SECRET="\(.*\)"/FT_CLIENT_SECRET="'"${FT_API_SECRET}"'"/' .env.local
vercel env rm FT_CLIENT_SECRET
vercel env add FT_CLIENT_SECRET
curl -X POST "${DEPLOY_URL}"
