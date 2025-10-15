const v0 = class {
}
const v1 = [1000,834705387,2147483649,14];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function F10(a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v14 = new F10(a9, f6);
        const t10 = v14?.constructor;
        new t10(v0);
        class C17 {
            static [v14](a19, a20, a21) {
            }
        }
        try { C17(v1); } catch (e) {}
        function F24(a26, a27, a28, a29) {
            if (!new.target) { throw 'must be called with new'; }
            function f30() {
                return -1;
            }
            f30.name;
            function f32(a33) {
                function f35(a36) {
                }
                const v37 = ("0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b").match(a7);
                v37.map(f35);
                return v37;
            }
            Object.defineProperty(this, "e", { get: f30, set: f32 });
            this.e = -1;
        }
        new F24();
        return F24;
    }
    f6();
    %OptimizeFunctionOnNextCall(f6);
}
new F2(v0, v0);
new F2(v0, F2);
new F2();
