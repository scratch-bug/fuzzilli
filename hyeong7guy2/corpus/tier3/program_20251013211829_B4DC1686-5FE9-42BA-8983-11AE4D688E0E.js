const v1 = [4096];
const v2 = {};
v2.defineProperty = Symbol;
function f4() {
    return v2;
}
const v5 = new Proxy(f4, v2);
v5.prototype = v5;
try { Reflect.construct(f4, v2, v1); } catch (e) {}
