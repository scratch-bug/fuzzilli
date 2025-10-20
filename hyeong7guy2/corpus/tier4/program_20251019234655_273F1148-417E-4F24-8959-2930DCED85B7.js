class C1 extends WeakMap {
}
const v2 = new C1();
function f4(a5, a6, a7) {
    this.postMessage(a6);
    function f10(a11) {
    }
    Object.defineProperty(Float32Array, this, { set: f10 });
}
const v15 = {
    get f() {
        return v2;
    },
    type: "function",
};
const v16 = new Worker(f4, v15);
function f17(a18) {
    return a18;
}
class C19 extends f17 {
}
v16.constructor = f4;
try { v16.constructor(f4, v15); } catch (e) {}
