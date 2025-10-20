const v1 = [-2.0,1000000000.0,-1000.0,NaN,-1000000000.0,-3.0,-1000000000.0];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a4;
    this.b = v1;
    this.f = a5;
}
new F2(v1, v1);
new F2(v1, F2);
[-43938,268435441,276094451,-9223372036854775808,1000,-536870912];
new Int32Array(16);
/\P{scx=Greek}/sy;
function f14() {
    return f14;
}
function F16(a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    function f20(a21, a22, a23) {
        function F25(a27, a28, a29, a30) {
            if (!new.target) { throw 'must be called with new'; }
            function f31() {
                function f32() {
                    function f33(a34) {
                        Math.min(f33);
                    }
                    f33();
                    f33();
                    %OptimizeMaglevOnNextCall(f33);
                    return f33;
                }
                Object.defineProperty(this, "toString", { get: f32 });
                return this;
            }
            function f39(a40) {
                function f42(a43) {
                    return a43;
                }
                const v44 = ("0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b").match();
                v44.reduceRight(F16);
                v44.map(f42);
            }
            Object.defineProperty(this, "e", { get: f31, set: f39 });
            this.e = -1;
        }
        new F25(a22, -1, f14, "HjvI");
        return a21;
    }
    try { f20(this, "HjvI", f14); } catch (e) {}
    f20(f20, F16, f20);
    %OptimizeFunctionOnNextCall(f20);
}
new F16();
new F16();
new F16();
