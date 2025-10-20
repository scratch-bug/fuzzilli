function f1() {
    return f1;
}
function f3() {
    return 750;
}
f3[Symbol.toPrimitive] = f1;
f3.valueOf = f3;
class C5 extends f3 {
}
function f6() {
}
function f7(a8) {
    return a8;
}
Object.defineProperty(C5, Symbol.toPrimitive, { configurable: true, enumerable: true, get: f6, set: f7 });
function f10() {
    return f6;
}
Object.defineProperty(f10, "initial", { value: C5 });
const t20 = WebAssembly.Memory;
const v13 = new t20(f10);
const v14 = v13.toFixedLengthBuffer();
try { v14.transferToFixedLength(f3); } catch (e) {}
