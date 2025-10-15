function f2() {
    return f2;
}
f2.toISOString = Uint32Array;
const v4 = new Proxy(f2, {});
const v7 = Date.prototype.toJSON;
try { v7.call(v4); } catch (e) {}
