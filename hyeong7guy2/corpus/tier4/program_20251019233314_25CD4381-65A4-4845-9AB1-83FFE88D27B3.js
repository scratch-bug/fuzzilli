const v1 = {};
v1.set = Symbol;
function f3() {
    return Symbol;
}
const v4 = new Proxy(f3, v1);
v4.prototype = v4;
