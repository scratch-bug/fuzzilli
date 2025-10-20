function f1() {
    return 0.07665956478136793;
}
function f3() {
    return f1;
}
const v5 = Symbol.toPrimitive;
Object.defineProperty(f3, v5, { writable: true, value: f1 });
class C6 extends f3 {
}
function f7() {
    return v5;
}
f7.maximum = 2624;
Object.defineProperty(f7, "initial", { value: C6 });
const t15 = WebAssembly.Memory;
const v10 = new t15(f7);
v10.toResizableBuffer().resize();
