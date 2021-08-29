const Client = require('cgminer-api').client;
const cgminer = new Client({
    host: '192.168.10.51',
    port: 4028
});
/**
 * command 包括：summary, pools, stats, version
 * { name: 'stats' }
 */
cgminer.connect()
    .then(function () {
        return cgminer.request({ name: 'version' });
    })
    .then(function (version) {
        // console.log(version);
    })
    .catch(function (error) {
        console.log(error);
    });