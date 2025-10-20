function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function F6(a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                function f14() {
                    const v15 = { a: a12 };
                    const t9 = JSON.stringify;
                    t9(v15);
                    for (let i21 = 0, i22 = 10; i22; i22--) {
                    }
                    function f28(a29) {
                    }
                    return f28;
                }
                Object.defineProperty(this, "toString", { get: f14 });
            }
            const v30 = new F10(a8);
            class C31 {
                static [v30](a33, a34, a35) {
                }
            }
        }
        const v36 = new F6(a3, F6);
        const t26 = v36.constructor;
        new t26(F6);
        return Date;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v39 = new F1();
class C40 {
    static [v39](a42, a43, a44) {
    }
}
