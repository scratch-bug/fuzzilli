const v0 = [];
async function* f2(a3, a4, a5) {
    yield* "objecG";
    function f6(a7) {
        return a5;
    }
    class C8 extends f6 {
    }
    function F9(a11, a12) {
        if (!new.target) { throw 'must be called with new'; }
    }
    class C13 extends F9 {
    }
    function f14(a15, a16, a17) {
        return a16;
    }
    v0["filter"]();
    function f20(a21, a22, a23) {
    }
    f20(f14);
    return v0;
}
const v25 = f2();
f2();
%OptimizeMaglevOnNextCall(f2);
f2(v25, "objecG", v0);
