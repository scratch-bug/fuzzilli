const v1 = new Date();
const v2 = v1.setFullYear(v1, v1, Date);
function f3(a4) {
    let v5;
    try { v5 = a4.call(); } catch (e) {}
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function f10() {
            function f11(a12) {
                function f13(a14) {
                    let v15;
                    try { v15 = a14.apply(f3, v2); } catch (e) {}
                    return v15;
                }
                const v16 = [F6];
                for (let v17 = 0; v17 < 5; v17++) {
                    v16.forEach(f13);
                }
                a12 & a12;
                return v16;
            }
            %OptimizeMaglevOnNextCall(f11);
            return f11;
        }
        Object.defineProperty(this, "toString", { get: f10 });
    }
    const v20 = new F6(v5, v2);
    v20.toString();
    return v2;
}
f3(f3);
