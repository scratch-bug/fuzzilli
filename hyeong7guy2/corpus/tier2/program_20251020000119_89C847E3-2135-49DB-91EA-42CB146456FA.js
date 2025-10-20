function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function f8() {
                const v12 = {
                    o(a10, a11) {
                        return a10;
                    },
                };
                for (let v13 = 0; v13 < 5; v13++) {
                    function f14(a15, a16, a17, a18) {
                        return v12;
                    }
                    function f19(a20, a21) {
                        return 536870912n;
                    }
                }
                return a4;
            }
            const v22 = f8();
            v22 >> v22;
            const v24 = `string${536870912n}undefined`;
            a4 === f8;
            v24.normalize();
            return v22;
        }
        f6(f6(a4));
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v29 = new F1();
v29.toString();
