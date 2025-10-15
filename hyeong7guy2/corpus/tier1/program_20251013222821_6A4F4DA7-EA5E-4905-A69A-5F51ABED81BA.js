const v0 = class {
}
function f1(a2) {
    class C3 {
        m() {
        }
    }
    function f5(a6) {
        C3.prototype.m.call();
        return a2;
    }
    for (let i11 = 0; i11 < 100000; i11++) {
        new C3();
        f5(f5);
    }
    return C3;
}
Object.defineProperty(v0, "constructor", { enumerable: true, value: f1 });
v0.constructor();
