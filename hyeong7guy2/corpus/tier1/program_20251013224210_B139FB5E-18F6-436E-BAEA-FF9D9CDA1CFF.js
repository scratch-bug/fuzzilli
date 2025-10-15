const v3 = class {
}
const v4 = class {
}
function f5(a6) {
    class C7 {
        m() {
        }
    }
    for (let i10 = 0; i10 < 100000; i10++) {
        C7.prototype.m.call();
    }
}
Object.defineProperty(v4, "constructor", { enumerable: true, value: f5 });
v4.constructor();
