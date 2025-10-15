function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -536870912;
}
new F1();
const v4 = new F1();
new F1();
function f7(a8) {
    function f10(a11) {
        const v12 = this.f;
        const v13 = %WasmArray();
        v12 instanceof F1;
        [,,];
    }
    this.onmessage = f10;
    gc();
}
const v21 = [v4];
new Worker(f7, { arguments: v21, type: "function" });
function f24() {
    return 1000000.0;
}
class C25 extends f24 {
    static set c(a27) {
    }
}
new C25();
class C29 {
    constructor() {
        this.p = {};
    }
}
class C32 {
}
function f34() {
}
function f35() {
    const v36 = new C29();
    return v36;
}
const v37 = { construct: f35 };
const v38 = new Proxy(f34, v37);
for (let i40 = 0; i40 < 20000; i40++) {
    const v49 = {
        valueOf() {
            v37[Symbol.species] = this;
            return i40;
        },
    };
    Reflect.construct(v38, []);
}
C29 = C32;
