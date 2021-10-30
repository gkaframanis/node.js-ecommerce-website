const path = require('path');

// It refers to the path to the file that is responsible for our application running.
module.exports = path.dirname(require.main.filename);