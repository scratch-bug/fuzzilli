function f1() {
    return 750;
}
function f2() {
    const v5 = new Float64Array(3);
    v5.set([-1024,18996]);
    return 750;
}
Object.defineProperty(f1, Symbol.toPrimitive, { writable: true, configurable: true, value: f2 });
class C10 extends f1 {
}
function f11() {
    return f1;
}
Object.defineProperty(f11, "initial", { value: C10 });
const t15 = WebAssembly.Memory;
new t15(f11);
