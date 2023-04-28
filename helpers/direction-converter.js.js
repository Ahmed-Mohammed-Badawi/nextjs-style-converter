const cssjanus = require("cssjanus");
const sass = require("sass");

function compileCode(code, isCss) {
    let result = "";
    if (isCss) {
        result = cssjanus.transform(code);
    } else {
        const css = sass.renderSync({ data: code }).css.toString();
        result = cssjanus.transform(css);
    }
    return result;
}

module.exports = compileCode;
