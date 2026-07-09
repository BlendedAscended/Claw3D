#!/bin/bash
cd ~/Projects/Project26/Agents/Claw3D
set -a
source .env
set +a
exec node server/hermes-gateway-adapter.js
