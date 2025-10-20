let v0 = 5n;
const v1 = v0--;
const v5 = Array();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10() {
        function f11(a12) {
            function f13() {
                for (let v14 = 0; v14 < 5; v14++) {
                    v14 && v14;
                    function f16(a17, a18) {
                        return v14;
                    }
                }
            }
            const v19 = f13();
            const v20 = v19 >> v19;
            `string`;
            Array(6, v20, v19);
            return Array;
        }
        f11(Array);
        f11();
        %OptimizeMaglevOnNextCall(f11);
        return f11;
    }
    Object.defineProperty(this, "toString", { get: f10 });
}
const v25 = new F6();
v25.toString(6, v1, v5);
