FROM gitpod/workspace-full:latest

# Switch to root user to install dependencies
USER root

# Install required dependencies for Playwright browsers
RUN apt-get update && apt-get install -y \
    libx11-xcb-dev \
    libfontconfig1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxi6 \
    libxtst6 \
    libnss3 \
    libxrandr2 \
    libxshmfence1 \
    libasound2 \
    libpangocairo-1.0-0 \
    libatk1.0-0 \
    libcups2 \
    libdbus-1-3
# Switch back to the Gitpod user
RUN npm install -g node-ovsx-sign
USER gitpod