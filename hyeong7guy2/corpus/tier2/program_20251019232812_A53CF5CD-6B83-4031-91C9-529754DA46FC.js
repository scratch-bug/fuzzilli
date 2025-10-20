const v0 = class {
}
const v2 = new Uint8ClampedArray(v0, Uint8ClampedArray, Uint8ClampedArray);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9, a10) {
        function f11() {
            return F3;
        }
        function f12(a13, a14) {
            v2[-1098098658 + a10] = v0;
            return a8;
        }
        f11.constructor = f12;
        class C17 extends f11 {
        }
        const t16 = C17.constructor;
        t16();
        return f12;
    }
    f7(a5, v0, v2);
    %OptimizeFunctionOnNextCall(f7);
}
const v21 = new F3(Uint8ClampedArray, Uint8ClampedArray);
new F3(v21, v0);
new F3(Uint8ClampedArray, v21);
