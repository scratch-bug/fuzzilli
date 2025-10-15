const v0 = [];
async function* f2(a3, a4, a5) {
    yield* "object";
    function f6(a7) {
        return a5;
    }
    class C8 extends f6 {
    }
    function f9(a10, a11, a12) {
        return a3;
    }
    v0["filter"]();
    function f15(a16, a17, a18) {
        return a18;
    }
    f15(f9);
    return "object";
}
f2("object", "object", v0);
f2();
%OptimizeMaglevOnNextCall(f2);
f2();
