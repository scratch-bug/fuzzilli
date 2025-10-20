const v0 = {};
v0.ownKeys = v0;
function f2() {
    return v0;
}
const v3 = new Proxy(f2, v0);
try { Reflect.ownKeys(v3); } catch (e) {}
