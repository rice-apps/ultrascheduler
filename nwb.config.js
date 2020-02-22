var GlobalizePlugin = require("globalize-webpack-plugin");

module.exports = {
    type: 'react-app',
    webpack: {
        aliases: {
            'cldr$': 'cldrjs',
            'cldr': 'cldrjs/dist/cldr',
        },
    }
}