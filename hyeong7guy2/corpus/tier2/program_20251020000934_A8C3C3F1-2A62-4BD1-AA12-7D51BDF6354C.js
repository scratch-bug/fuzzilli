function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            function f11() {
                ("p").link(a6, "p", f11);
                for (let v14 = 0; v14 < 5; v14++) {
                    function f15(a16, a17) {
                        return f8;
                    }
                }
            }
            const v18 = f11();
            v18 >> v18;
            const v20 = `string${536870912n}undefined`;
            const v22 = [-1.3627030661649108e+307,680473.7032090442,257.625992409535,-0.895760134841046,0.19987537436654312];
            class C23 {
                static [v22](a25) {
                }
                static d = Date;
            }
            ("S")["concat"](Float64Array, f9, v20);
            return "concat";
        }
        f9(a7);
        f9(536870912n);
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v29 = new F4();
v29.toString();
