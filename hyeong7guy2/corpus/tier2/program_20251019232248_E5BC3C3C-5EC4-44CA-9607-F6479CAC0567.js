function f0(a1) {
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        function f6() {
            function f7(a8) {
                function f9(a10) {
                    const v12 = class {
                        ["7"];
                    }
                    const v13 = new v12();
                    for (const v14 in v13) {
                    }
                    return f7;
                }
                const v15 = [F2];
                for (let v16 = 0; v16 < 5; v16++) {
                    v15.forEach(f9);
                }
                return a8 & a8;
            }
            %OptimizeMaglevOnNextCall(f7);
            return f7;
        }
        Object.defineProperty(this, "toString", { get: f6 });
    }
    const v19 = new F2();
    const t26 = v19.toString;
    t26();
    return f0;
}
f0(f0);
f0();
