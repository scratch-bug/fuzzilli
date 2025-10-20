for (let i4 = 0, i5 = 10; i5; i5--) {
}
const v11 = new Uint32Array(536870912);
function f12(a13) {
    function F14(a16, a17) {
        if (!new.target) { throw 'must be called with new'; }
        function f18() {
            function f19(a20) {
                function f22(a23) {
                    const v24 = [];
                    v24[11] = Infinity;
                    const v25 = v24[4];
                    v25 | v25;
                    Math.asinh(v25);
                }
                return f22();
            }
            f19();
            f19();
            %OptimizeMaglevOnNextCall(f19);
            return f19;
        }
        Object.defineProperty(this, "toString", { get: f18 });
    }
    const v32 = new F14(a13, Uint32Array);
    v32.toString();
    v11[2];
    return Uint32Array;
}
f12();
f12();
%OptimizeMaglevOnNextCall(f12);
f12();
