const util = require('util');

module.exports = function (config) {
    config.addFilter('console', function (value) {
        return util.inspect(value);
    });

    config.addPassthroughCopy({ "src/assets": "./" });

    config.addFilter('sortByOrder', function (values) {
        let newValues = [...values];
        newValues.sort((a, b) => {
            let aa = a.data.order == undefined ? 0 : a.data.order;
            let bb = b.data.order == undefined ? 0 : b.data.order;
            return aa - bb;
        });
        return newValues;
    });

    // You can return your Config object (optional).
    return {
        dir: {
            input: 'src',
            output: 'public',
            includes: 'includes',
            layouts: 'layouts'
        },
        dataTemplateEngine: 'liquid',
        markdownTemplateEngine: 'liquid',
        htmlTemplateEngine: 'liquid',
        passthroughFileCopy: true,
        templateFormats: ['md', 'liquid', '11ty.js']
    };
};
