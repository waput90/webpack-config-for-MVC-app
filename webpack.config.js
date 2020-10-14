const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        auth: path.resolve(__dirname, 'wwwroot/assets/js/auth/controller'),
        admin: path.resolve(__dirname, 'wwwroot/assets/js/admin/controller'),
        owner: path.resolve(__dirname, 'wwwroot/assets/js/owner/controller'),
        employee: path.resolve(__dirname, 'wwwroot/assets/js/employee/controller'),
        owner: path.resolve(__dirname, 'wwwroot/assets/js/owner/controller'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'wwwroot/assets/js/bundle/')
    }
};