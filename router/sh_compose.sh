#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

OUTPUT_FILE="supergraph.yaml"
SUPERGRAPH_FILE="supergraph.graphql"


echo "--- Composing supergraph ---"
rover supergraph compose --config ./${OUTPUT_FILE} > ${SUPERGRAPH_FILE}

echo "✅ Supergraph composed successfully to ${SUPERGRAPH_FILE}!"
