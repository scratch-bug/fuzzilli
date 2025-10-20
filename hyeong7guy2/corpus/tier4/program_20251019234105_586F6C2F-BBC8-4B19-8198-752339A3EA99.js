const v0 = [];
const v3 = new WeakMap();
function f4(a5) {
    return v3 in v0;
}
v3.toString = f4;
new Uint32Array(968665487);
const v9 = class {
}
v9.toString = f4;
try { v9.toString(); } catch (e) {}
const v11 = new v9();
const v13 = JSON.stringify(v11);
try { v13.link(v3); } catch (e) {}
