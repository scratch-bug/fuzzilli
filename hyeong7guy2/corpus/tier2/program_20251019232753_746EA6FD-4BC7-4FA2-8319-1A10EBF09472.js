const v0 = [-9007199254740992,9007199254740990,9,-4,31836,-12,-65017,4096,7];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            function f9() {
                for (let i11 = 0;
                    (() => {
                        for (let v12 = 0; v12 < 5; v12++) {
                        }
                        return i11;
                    })();
                    i11++) {
                }
                for (let v16 = 0; v16 < 5; v16++) {
                }
            }
            const v17 = f9();
            v17 >> v17;
            const v19 = `string${536870912n}undefined`;
            for (const v20 of v0) {
            }
            v19.normalize();
            return a4;
        }
        f7(f7.call(f7));
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v24 = new F2(F2, F2);
v24.toString(536870912n, 536870912n);
