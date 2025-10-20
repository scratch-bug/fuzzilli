function f1() {
    return -536870912;
}
function f3() {
    return 750;
}
f3[Symbol.toPrimitive] = f1;
f3.valueOf = f3;
class C6 extends f3 {
}
function f7() {
}
function f8(a9) {
    return 750;
}
Object.defineProperty(C6, Symbol.toPrimitive, { configurable: true, enumerable: true, get: f7, set: f8 });
function f11() {
    return f3;
}
Object.defineProperty(f11, "initial", { value: C6 });
const t20 = WebAssembly.Memory;
const v14 = new t20(f11);
const v15 = v14.toFixedLengthBuffer();
try { v15.transferToFixedLength(f3); } catch (e) {}
