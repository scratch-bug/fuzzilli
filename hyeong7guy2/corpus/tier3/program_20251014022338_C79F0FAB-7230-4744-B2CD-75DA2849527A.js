async function* f0(a1, a2) {
    return a2;
}
const v3 = f0(f0, f0);
const v6 = SharedArrayBuffer.prototype.grow;
try { v6.apply(v3); } catch (e) {}
