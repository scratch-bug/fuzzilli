function f0() {
    return f0;
}
const v1 = class extends f0 {
}
const v2 = [13726,4096,-9007199254740992,-27359,1861306693,268435456,65536];
let v3 = -2147483649n;
v3--;
([v1,v2,v1,v3]).toLocaleString();
const v11 = new SharedArrayBuffer(129, { maxByteLength: 129 });
try { v11.grow(v3); } catch (e) {}
