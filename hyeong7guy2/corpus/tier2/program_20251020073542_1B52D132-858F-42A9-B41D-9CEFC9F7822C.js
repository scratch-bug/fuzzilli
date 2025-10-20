function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        const v6 = `string${536870912n}undefined`;
        -65537n - -65537n;
        const v9 = v6.normalize();
        function F10() {
            if (!new.target) { throw 'must be called with new'; }
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
            }
            for (let i17 = 1;
                (() => {
                    new F12(20000, f5);
                    return i17 < 20000;
                })();
                ++i17) {
            }
        }
        new F10();
        v9.f = v9;
        return -65537n;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v25 = new F1(F1, 536870912n);
try { v25.toString(F1); } catch (e) {}
