function f1() {
    return Symbol;
}
function f2(a3) {
    return f2;
}
f1[Symbol.species] = f2;
const v6 = new ArrayBuffer();
v6.constructor = f1;
try { v6.slice(); } catch (e) {}
