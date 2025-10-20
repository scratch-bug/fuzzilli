const v1 = new BigInt64Array();
function f3() {
    return 750;
}
f3.valueOf = f3;
class C4 extends f3 {
}
function f5() {
    return f3;
}
Object.defineProperty(f5, "initial", { value: C4 });
const t11 = WebAssembly.Memory;
const v8 = new t11(f5);
v8.grow(v1);
gc({});
