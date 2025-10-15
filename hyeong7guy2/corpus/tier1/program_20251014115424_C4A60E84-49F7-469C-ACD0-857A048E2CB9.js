const v0 = [-9007199254740990,3,0,7,3,0,-1,7,12541,-2];
const v1 = class {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            function f17() {
            }
            function f18(a19) {
                function f20(a21, a22, a23, a24) {
                    [DataView,v0,v1,f20];
                    return v1;
                }
                class C27 {
                }
            }
            Object.defineProperty(this, "e", { get: f17, set: f18 });
            this.e = -1;
        }
        new F11();
    }
    const v29 = f6(a5, f6, v0);
    f6(F2, v29, v29);
    %OptimizeFunctionOnNextCall(f6);
}
const v31 = new F2();
const v32 = v31.constructor;
new v32(v1, v32, v31, v1, v32);
new F2();
