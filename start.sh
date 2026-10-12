#!/usr/bin/env bash
set -euo pipefail
cd -- "$(dirname -- "${BASH_SOURCE[0]}")"
# Локальная среда используется только если Node.js ещё нет в PATH.
travel_runtime="$HOME/.local/share/travel-planner-runtime/bin"
if ! command -v node >/dev/null 2>&1 && [[ -x "$travel_runtime/node" ]]; then
  export PATH="$travel_runtime:$PATH"
fi
if ! command -v node >/dev/null 2>&1 || ! command -v npm >/dev/null 2>&1; then
  echo 'Установите Node.js 22.12+ и npm, затем запустите ./start.sh ещё раз.' >&2
  exit 1
fi
if [[ ! -d frontend/front/node_modules ]]; then
  npm run setup
fi
npm run dev -- "$@"
