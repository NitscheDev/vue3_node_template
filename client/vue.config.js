const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, '../server/public'),
    devServer: {
        proxy: {
            '/root': {
                target: 'http://localhost:5000'
                //when fetching backend just use /root to access root of backend server
            }
        }
    }
}