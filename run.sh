#!/usr/bin/env bash

# Don't exit on error from read timeout
set -e

# Interactive runner for development and testing
echo "Select an option:"
echo "1) Start development servers"
echo "2) Run tests"
echo "3) Run coverage report"
echo "4) Exit"

read -t 5 -p "Enter choice [1-4] (default: 1): " choice || true
if [ -z "$choice" ]; then
  echo "Automatically choosing option 1..."
  choice=1
fi

case "$choice" in
  1)
    echo "Starting development servers..."
    # Function to open browser after a short delay
    open_browser() {
      echo "Waiting for frontend to be ready at http://localhost:5173..."
      if command -v curl &> /dev/null; then
        until curl --output /dev/null --silent --head --fail http://localhost:5173; do
          sleep 1
        done
      else
        sleep 3
      fi
      echo "Opening browser..."
      if command -v xdg-open &> /dev/null; then
        xdg-open http://localhost:5173 &
      elif command -v open &> /dev/null; then
        open http://localhost:5173 &
      elif command -v start &> /dev/null; then
        start http://localhost:5173 &
      else
        echo "Could not detect browser opener. Please open http://localhost:5173 manually."
      fi
    }
    
    # Start browser opener in background
    open_browser &
    
    # Start development servers using node modules from the specified location
    PATH="/root/EMPREND/Bolt-Portfolio/node_modules/.bin:$PATH" npm run dev:all
    ;;
  2)
    echo "Launching test menu..."
    ./run_tests.sh
    ;;
  3)
    echo "Running coverage report..."
    npx vitest run --coverage
    ;;
  4)
    echo "Exiting."
    exit 0
    ;;
  *)
    echo "Invalid choice: $choice"
    exit 1
    ;;
esac
