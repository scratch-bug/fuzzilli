function f3() {
    return 750;
}
f3[Symbol.toPrimitive] = f3;
class C5 extends f3 {
}
function f6() {
    return f6;
}
f6.maximum = 2624;
Object.defineProperty(f6, "initial", { value: C5 });
const v8 = WebAssembly.Memory;
const v9 = new v8(f6);
v9.toResizableBuffer(750, f3);
v9.toFixedLengthBuffer(f3, Symbol, v9, f3, v8);
