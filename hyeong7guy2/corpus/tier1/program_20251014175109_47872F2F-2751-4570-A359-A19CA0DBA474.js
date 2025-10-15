const v3 = Array(4);
v3[0] = 128;
const v5 = new Uint8ClampedArray(v3);
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10(a11, a12, a13) {
        function F14(a16, a17, a18, a19) {
            if (!new.target) { throw 'must be called with new'; }
            const v23 = {
                construct(a21, a22) {
                    return a22;
                },
            };
            function f25() {
                return v3;
            }
            const v26 = new Proxy(f25, v23);
            const v27 = new v26();
            function f28(a29) {
                return a29;
            }
            Object.defineProperty(v27, 5, { configurable: true, set: f28 });
            v27.push(a13, v5, f10, a17);
        }
        const v31 = new F14();
        return v31;
    }
    f10(this, a9, Array);
    %OptimizeFunctionOnNextCall(f10);
}
new F6(v3, Array);
new F6();
new F6();
