const util = require('util');
const { DateTime } = require("luxon");

module.exports = function (config) {
    config.addFilter('console', function (value) {
        return util.inspect(value);
    });

    config.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj, {
            zone: "Europe/Amsterdam",
        }).setLocale('en').toISODate();
    });

    // You can return your Config object (optional).
    return {
        dir: {
            input: 'src',
            output: 'public',
            includes: 'includes',
            layouts: 'layouts',
        },
        dataTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        passthroughFileCopy: true,
        templateFormats: ['md', 'njk', '11ty.js'],
    };
};
