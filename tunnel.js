const localtunnel = require('localtunnel');

(async () => {
  const tunnel = await localtunnel({ 
    port: 2000, 
    subdomain: 'sask-tok-yoshida' // ここを好きな名前に
  });

  console.log('====================================');
  console.log('URL: ' + tunnel.url);
  console.log('====================================');

  tunnel.on('close', () => {
    console.log('Tunnel closed');
  });
})();
