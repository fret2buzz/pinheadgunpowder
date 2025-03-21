const util = require('util');
const { DateTime } = require("luxon");

module.exports = function (config) {
    config.addFilter('console', function (value) {
        return util.inspect(value);
    });

    // You can return your Config object (optional).
    return {
        dir: {
            input: 'src',
            output: 'public',
            includes: 'includes',
            layouts: 'layouts',
        },
        dataTemplateEngine: 'liquid',
        markdownTemplateEngine: 'liquid',
        htmlTemplateEngine: 'liquid',
        passthroughFileCopy: true,
        templateFormats: ['md', 'liquid', '11ty.js']
    };
};
