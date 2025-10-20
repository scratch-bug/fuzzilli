function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
}
const v4 = new Int32Array(C2);
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    let v6 = this;
    function f9(a10, a11, a12) {
        function f13() {
            return v6;
        }
        function f14(a15, a16) {
            ({"byteOffset":C2,"d":F0,"length":v6,} = v4);
            eval();
            return C2;
        }
        f13.constructor = f14;
        class C19 extends f13 {
        }
        const t21 = C19.constructor;
        t21();
        return F0;
    }
    f9();
    %OptimizeFunctionOnNextCall(f9);
}
new F5();
new F5(C2, F5);
new F5();
