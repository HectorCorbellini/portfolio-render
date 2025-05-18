// Using ES modules syntax
import https from 'https';

// Determine the service URL based on environment variables
// Render sets PORT and RENDER_EXTERNAL_URL
// Glitch sets PROJECT_DOMAIN
let serviceUrl = '';

if (process.env.RENDER_EXTERNAL_URL) {
  // Running on Render
  serviceUrl = process.env.RENDER_EXTERNAL_URL;
  console.log(`Detected Render deployment at ${serviceUrl}`);
} else if (process.env.PROJECT_DOMAIN) {
  // Running on Glitch
  serviceUrl = `https://${process.env.PROJECT_DOMAIN}.glitch.me`;
  console.log(`Detected Glitch deployment at ${serviceUrl}`);
} else {
  // Local development or other platform
  serviceUrl = `http://localhost:${process.env.PORT || 3001}`;
  console.log(`No deployment platform detected, using ${serviceUrl}`);
}

// Ping every 4.5 minutes (270000 ms) to stay within the 5-minute sleep window
// This is primarily needed for Glitch's free tier
const pingInterval = 270000; // 4.5 minutes

setInterval(() => {
  const protocol = serviceUrl.startsWith('https') ? https : https;
  protocol.get(serviceUrl, (res) => {
    console.log(`Pinged ${serviceUrl}, status: ${res.statusCode}`);
  }).on('error', (err) => {
    console.error(`Error pinging ${serviceUrl}: ${err.message}`);
  });
}, pingInterval);

console.log('Keep-alive service started');
