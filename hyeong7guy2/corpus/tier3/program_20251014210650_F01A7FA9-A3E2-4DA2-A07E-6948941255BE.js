function f1() {
    return Symbol;
}
function f2(a3) {
    ArrayBuffer();
    return f1;
}
f1[Symbol.species] = f2;
const v8 = new ArrayBuffer();
v8.constructor = f1;
try { v8.slice(v8, Symbol); } catch (e) {}
