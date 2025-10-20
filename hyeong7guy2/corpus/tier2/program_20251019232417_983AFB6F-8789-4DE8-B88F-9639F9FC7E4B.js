function f2() {
    return 4294967297;
}
function f4() {
    return 750;
}
const v5 = Symbol.toPrimitive;
f4[v5] = f2;
f4.valueOf = f4;
class C6 extends f4 {
}
function f7() {
}
function f8(a9) {
    return v5;
}
Object.defineProperty(C6, Symbol.toPrimitive, { configurable: true, enumerable: true, get: f7, set: f8 });
function f11() {
    return C6;
}
Object.defineProperty(f11, "initial", { value: C6 });
const t21 = WebAssembly.Memory;
const v14 = new t21(f11);
const v15 = v14.toFixedLengthBuffer();
try { v15.transferToFixedLength(f4); } catch (e) {}
