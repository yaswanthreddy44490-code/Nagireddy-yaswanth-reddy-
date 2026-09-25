require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const SERVICE_NAME = process.env.SERVICE_NAME || 'api-project-setup';

// Track when the process started, for uptime reporting
const startedAt = Date.now();

/**
 * Health-check endpoint.
 * Returns service status, uptime, environment, and timestamp.
 * Used by load balancers, container orchestrators, or uptime monitors
 * to verify the service is alive and responding.
 */
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: SERVICE_NAME,
    environment: NODE_ENV,
    uptime_seconds: Math.floor((Date.now() - startedAt) / 1000),
    timestamp: new Date().toISOString(),
  });
});

// Simple root route so hitting the base URL doesn't 404
app.get('/', (req, res) => {
  res.status(200).json({
    message: `${SERVICE_NAME} is running`,
    docs: 'See /health for service status',
  });
});

// Basic example resource route (placeholder for real API logic)
app.get('/api/v1/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Central error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`${SERVICE_NAME} listening on port ${PORT} [${NODE_ENV}]`);
});

module.exports = app;
