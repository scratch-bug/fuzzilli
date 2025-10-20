function f0() {
    return f0;
}
function f1(a2, a3) {
    return f0;
}
f0.toString = f1;
const v5 = new Set();
const t8 = v5.entries();
t8.return = Symbol;
try { Date.parse(f0); } catch (e) {}
