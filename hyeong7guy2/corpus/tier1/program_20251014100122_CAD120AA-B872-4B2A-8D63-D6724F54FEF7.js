const v0 = class {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    class C5 extends ({}).constructor {
        constructor(a7, a8) {
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
            }
            for (let i14 = 1;
                (() => {
                    new F9();
                    return i14 < 20000;
                })();
                ++i14) {
            }
            super(v0);
        }
    }
    new C5();
}
const v22 = new F1();
const t22 = v22.constructor;
new t22();
