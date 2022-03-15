const { join } = require('path');
module.exports = {
    setupFilesAfterEnv: [join(__dirname, 'setUpTest.js')],
};