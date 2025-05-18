#!/bin/bash

# Exit on error
set -e

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the frontend
echo "Building frontend..."
npm run build

# Make sure the script is executable
chmod +x build.sh

echo "Build completed successfully!"
