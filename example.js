var a = require("./a.js");
var b = require("./b.js");
require.ensure(["./c.js"], function(require) {
    require("./b.js").xyz();
    var d = require("./d.js");
});