#!/usr/bin/env bash

set -e

# Check Node.js version
if command -v node >/dev/null 2>&1; then
    NODE_VERSION=$(node -v | sed 's/v//')
    NODE_MAJOR=$(echo "$NODE_VERSION" | cut -d. -f1)
    if [ "$NODE_MAJOR" -lt 22 ]; then
        echo "Node.js >=22 is required. Found: $NODE_VERSION"
        INSTALL_NODE=true
    fi
else
    echo "Node.js is not installed."
    INSTALL_NODE=true
fi

# Install Node.js if needed
if [ "$INSTALL_NODE" = true ]; then
    echo "Attempting to install Node.js 22 via nvm..."
    if ! command -v nvm >/dev/null 2>&1; then
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
        export NVM_DIR="$HOME/.nvm"
        # shellcheck disable=SC1090
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    fi
    nvm install 22
    nvm use 22
fi

# Check pnpm version
if command -v pnpm >/dev/null 2>&1; then
    PNPM_VERSION=$(pnpm -v)
    PNPM_MAJOR=$(echo "$PNPM_VERSION" | cut -d. -f1)
    if [ "$PNPM_MAJOR" -lt 10 ]; then
        echo "pnpm >=10 is required. Found: $PNPM_VERSION"
        INSTALL_PNPM=true
    fi
else
    echo "pnpm is not installed."
    INSTALL_PNPM=true
fi

# Install pnpm if needed
if [ "$INSTALL_PNPM" = true ]; then
    echo "Installing pnpm..."
    npm install -g pnpm
fi

# Install dependencies
echo "Running pnpm install..."
pnpm install

# Copy example.env to .env if .env does not exist
TARGET_REST_DIR="rest-api"
if [ ! -f "$TARGET_REST_DIR/.env" ] && [ -f "$TARGET_REST_DIR/example.env" ]; then
    cp "$TARGET_REST_DIR/example.env" "$TARGET_REST_DIR/.env"
    echo "Copied example.env to .env inside the $TARGET_REST_DIR/ folder"
fi

TARGET_ROUTER_DIR="router"
if [ ! -f "$TARGET_ROUTER_DIR/.env" ] && [ -f "$TARGET_ROUTER_DIR/example.env" ]; then
    cp "$TARGET_ROUTER_DIR/example.env" "$TARGET_ROUTER_DIR/.env"
    echo "Copied example.env to .env inside the $TARGET_ROUTER_DIR/ folder"
fi

