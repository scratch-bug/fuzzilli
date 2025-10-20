function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f7(a8) {
                function F9() {
                    if (!new.target) { throw 'must be called with new'; }
                }
                class C11 {
                }
                let v12;
                try { v12 = new C11(F9, ...F9); } catch (e) {}
                return v12;
            }
            const v13 = [f4];
            for (let v14 = 0; v14 < 5; v14++) {
                v14 >> v14;
                v13.forEach(f7);
            }
            return F0;
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v17 = new F0();
v17.toString(v17, v17);
v17.toString();
