#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Define the environment file and template file names

ENV_FILE=".env"
TEMPLATE_FILE="supergraph.yaml.template"
OUTPUT_FILE="supergraph.yaml"
SUPERGRAPH_FILE="supergraph.graphql"

# Check if the .env file exists
if [ ! -f "$ENV_FILE" ]; then
    echo "Error: Environment file '$ENV_FILE' not found."
    exit 1
fi

# Export the variables from the .env file so envsubst can use them
export $(grep -v '^#' $ENV_FILE | xargs)

echo "--- Generating $OUTPUT_FILE from template ---"

# Use envsubst to replace variables in the template and create the final config
# This command takes the template, finds variables like ${GQ_ROUTE_AUTHOR},
# replaces them with their values from the environment, and writes to supergraph.yaml
envsubst < "$TEMPLATE_FILE" > "$OUTPUT_FILE"

echo "Configuration generated:"
cat $OUTPUT_FILE
echo "-------------------------------------------"

