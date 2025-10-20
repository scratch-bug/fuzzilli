function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f9(a10) {
                if ([-1.7976931348623157e+308,8.038336482744185,-9.976642743805384,147.29949351140294,-2.2250738585072014e-308,7.530123123878611e+307,968240.2257603935,-572694.2347267723] === undefined) {
                    for (let [v14,,v15] of a2) {
                    }
                }
            }
            f9(f8);
            f9();
            %OptimizeMaglevOnNextCall(f9);
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v18 = new F4(F0, F0);
    class C19 {
        static [v18](a21, a22, a23) {
        }
    }
}
new F0(F0, F0);
