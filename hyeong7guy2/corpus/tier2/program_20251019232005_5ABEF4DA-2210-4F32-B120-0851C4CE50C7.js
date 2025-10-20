const v0 = class {
}
const v2 = new Uint8ClampedArray(v0, Uint8ClampedArray, v0);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9, a10) {
        function f11() {
            return v2;
        }
        function f12(a13, a14) {
            let v15 = -1098098658;
            v15--;
            v2[v15 + v15] = v0;
            return this;
        }
        f11.constructor = f12;
        class C18 extends f11 {
        }
        const t18 = C18.constructor;
        t18();
        return this;
    }
    f7(a5, v0, v2);
    %OptimizeFunctionOnNextCall(f7);
}
new F3(v2, F3);
new F3();
new F3();
