const ngrok = require('ngrok');

(async function() {
  try {
    const url = await ngrok.connect(3000);  // Juice Shop running on port 3000
    console.log(`ngrok tunnel established at: ${url}`);
  } catch (error) {
    console.error('Error establishing ngrok tunnel:', error);
  }
})();
