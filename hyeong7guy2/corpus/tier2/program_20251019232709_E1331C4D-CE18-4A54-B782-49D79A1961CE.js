function f4() {
    return 750;
}
f4[Symbol.toPrimitive] = f4;
class C6 extends f4 {
}
function f7() {
    return 750;
}
f7.shared = "NFC";
f7.maximum = 2624;
Object.defineProperty(f7, "initial", { value: C6 });
const t12 = WebAssembly.Memory;
const v10 = new t12(f7);
v10.toFixedLengthBuffer(v10.grow(C6), 2624, f4);
