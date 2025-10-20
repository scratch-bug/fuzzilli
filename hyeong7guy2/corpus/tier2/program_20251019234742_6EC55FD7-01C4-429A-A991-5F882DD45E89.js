function f0(a1) {
    let v2;
    try { v2 = a1.call(); } catch (e) {}
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7() {
            function f8(a9) {
                function f10(a11) {
                    let v12 = [f7,f7];
                    for (let v13 = 0; v13 < 5; v13++) {
                        v12[8] = 2;
                        v12 = [f10,f10];
                    }
                    return v12;
                }
                const v16 = [F3];
                for (let v17 = 0; v17 < 5; v17++) {
                    v16.forEach(f10);
                }
                a9 & a9;
                return this;
            }
            %OptimizeMaglevOnNextCall(f8);
            return f8;
        }
        Object.defineProperty(this, "toString", { get: f7 });
    }
    const v20 = new F3(f0, f0);
    v20.toString(v2, f0);
}
f0(f0);
