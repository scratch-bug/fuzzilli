const v3 = new BigInt64Array();
function f5() {
    return 750;
}
f5.valueOf = f5;
class C6 extends f5 {
}
function f7() {
    return BigInt64Array;
}
f7.shared = Uint16Array;
f7.maximum = 2624;
Object.defineProperty(f7, "initial", { value: C6 });
const t13 = WebAssembly.Memory;
const v10 = new t13(f7);
v10.toResizableBuffer();
v10.grow(v3);
