class C1 {
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            function f10() {
                let v12;
                try {
                const t0 = "p";
                v12 = t0();
                } catch (e) {}
                for (let v13 = 0; v13 < 5; v13++) {
                    function f14(a15, a16) {
                        return a9;
                    }
                }
                return v12;
            }
            const v17 = f10();
            v17 >> v17;
            const v19 = `string${536870912n}undefined`;
            const v20 = /../g;
            try {
                const v21 = class extends v20 {
                }
                `-63824`;
            } catch(e23) {
            }
            try { C1(Symbol, f7, C1, v19); } catch (e) {}
            return a6;
        }
        f8();
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v27 = new F3();
v27.toString();
