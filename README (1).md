# API Project Setup

A minimal backend API built with Node.js and Express. Includes a health-check
endpoint and environment-based configuration.

## Requirements

- Node.js 18+ (LTS recommended)
- npm

## Setup

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd api-project-setup
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create your local environment file from the example:
   ```bash
   cp .env.example .env
   ```
   Adjust values in `.env` as needed (port, environment name, service name).

4. Start the server:
   ```bash
   npm start
   ```
   For auto-restart on file changes during development:
   ```bash
   npm run dev
   ```

5. The server runs on `http://localhost:3000` by default (or whatever
   `PORT` is set to in `.env`).

## Endpoints

| Method | Path            | Description                          |
|--------|-----------------|---------------------------------------|
| GET    | `/`             | Basic service info                    |
| GET    | `/health`       | Health-check: status, uptime, env     |
| GET    | `/api/v1/ping`  | Example placeholder API route         |

### Example: health-check response

```json
{
  "status": "ok",
  "service": "api-project-setup",
  "environment": "development",
  "uptime_seconds": 42,
  "timestamp": "2026-09-26T00:35:00.000Z"
}
```

## Environment variables

| Variable       | Description                          | Default              |
|----------------|---------------------------------------|-----------------------|
| `PORT`         | Port the server listens on            | `3000`                |
| `NODE_ENV`     | Runtime environment                   | `development`         |
| `SERVICE_NAME` | Name reported by `/health`            | `api-project-setup`   |

## Project structure

```
.
├── server.js        # App entry point and routes
├── package.json      # Dependencies and scripts
├── .env.example       # Example environment configuration
├── .gitignore
└── README.md
```
