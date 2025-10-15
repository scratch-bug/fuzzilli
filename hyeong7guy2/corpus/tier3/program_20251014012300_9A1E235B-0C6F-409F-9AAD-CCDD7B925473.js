function f1() {
    return Proxy;
}
const v3 = new Proxy(f1, {});
const v4 = { __proto__: v3 };
const v7 = Date.prototype.toJSON;
try { v7.call(v3); } catch (e) {}
