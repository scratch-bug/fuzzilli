function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    class C3 {
    }
    const v4 = {};
    for (let i6 = 0;
        (() => {
            function f8() {
                eval();
            }
            return i6 < 20000;
        })();
        ++i6) {
        v4.p1 = C3;
    }
    const v17 = {};
}
const v18 = new F0();
const t18 = v18.constructor;
new t18();
