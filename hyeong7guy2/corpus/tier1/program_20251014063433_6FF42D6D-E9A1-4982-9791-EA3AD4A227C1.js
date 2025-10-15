class C0 {
}
const v1 = new C0();
const v2 = [];
const v3 = class {
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8(a9, a10, a11) {
        const v13 = {};
        function F14(a16, a17, a18, a19) {
            if (!new.target) { throw 'must be called with new'; }
            a16 ?? a16;
            try { a17.forEach(); } catch (e) {}
            try { a18.apply(v1, v1); } catch (e) {}
            function f23() {
            }
            function f24(a25) {
                function F26(a28, a29) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                const v31 = {
                    done: F26,
                    next() {
                        return v13;
                    },
                };
            }
            f24.prototype = f24;
            Object.defineProperty(this, "e", { get: f23, set: f24 });
            this.e = -1;
        }
        new F14(a11, v2, v3);
    }
    f8();
    %OptimizeFunctionOnNextCall(f8);
}
new F4(v1);
new F4();
new F4();
