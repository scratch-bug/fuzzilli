const v0 = {};
function f2() {
}
const v3 = new Proxy(f2, v0);
v3.prototype = v3;
const v6 = Reflect.construct(v3, [v0]);
try { v6.call(); } catch (e) {}
