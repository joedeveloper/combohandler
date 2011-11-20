var config = require('./config.js'),
    comboServer = require('./lib/server'),
    app;

app = comboServer({ roots: config.roots, minify: config.minify });

app.listen(config.port);

