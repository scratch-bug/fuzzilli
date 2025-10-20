const v2 = new Float32Array(1480);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function F7(a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        function f11() {
            function f12(a13) {
                f = a13;
                try { f["valueOf"](a6); } catch (e) {}
            }
            let v17 = this;
            [F7,F7,...v17] = v2;
            f12(a10);
            f12(F7);
            %OptimizeMaglevOnNextCall(f12);
            return f12;
        }
        Object.defineProperty(this, "toString", { get: f11 });
    }
    const v20 = new F7();
    class C21 {
        static [v20](a23, a24, a25) {
        }
    }
}
new F3();
