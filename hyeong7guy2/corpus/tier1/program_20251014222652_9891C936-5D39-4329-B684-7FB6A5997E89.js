const v2 = new BigInt64Array();
function f4() {
    return 750;
}
f4.valueOf = f4;
class C5 extends f4 {
}
function f6() {
    return C5;
}
f6.maximum = 2624;
Object.defineProperty(f6, "initial", { value: C5 });
const t12 = WebAssembly.Memory;
const v9 = new t12(f6);
v9.grow(v2);
