function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = a4?.constructor;
    const v8 = [0.5018696678165512,1000000.0,-1e-15,-4.0,8.525871126444223];
    function F9(a11, a12) {
        if (!new.target) { throw 'must be called with new'; }
        function f13(a14, a15, a16) {
            function F18(a20, a21, a22, a23) {
                if (!new.target) { throw 'must be called with new'; }
                function f24() {
                    return a11;
                }
                function f25(a26) {
                    for (const v27 of v8) {
                        v27[1] = v27;
                    }
                    return -1;
                }
                Object.defineProperty(this, "e", { get: f24, set: f25 });
                this.e = -1;
            }
            new F18();
            return a14;
        }
        f13();
        %OptimizeFunctionOnNextCall(f13);
    }
    new F9();
    try { new v7(); } catch (e) {}
}
const v32 = new F1();
const v33 = new F1(v32, v32, v32, -9007199254740990);
new F1(-9007199254740990, v33);
