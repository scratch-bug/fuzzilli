function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7;
            try { v7 = a6.constructor(a2); } catch (e) {}
            const v8 = v7 ?? v7;
            const v9 = [a6,a6,a6,a6];
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                this(F0, f5);
            }
            const v17 = {
                [Symbol]() {
                    if (v9) {
                    }
                },
            };
            return v8;
        }
        f5(this);
        f5(F0);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v20 = new F0();
class C21 {
    static [v20](a23, a24, a25) {
    }
}
