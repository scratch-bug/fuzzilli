function f0(a1) {
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        function f6() {
            function f7(a8) {
                function f9(a10) {
                    const v11 = class {
                    }
                    for (const v12 in v11) {
                    }
                    return f7;
                }
                const v13 = [f7];
                for (let v14 = 0; v14 < 5; v14++) {
                    v13.forEach(f9);
                }
                a8 & a8;
                return a5;
            }
            %OptimizeMaglevOnNextCall(f7);
            return f7;
        }
        Object.defineProperty(this, "toString", { get: f6 });
    }
    const v17 = new F2();
    const t25 = v17.toString;
    t25();
    return f0;
}
f0(f0);
f0();
