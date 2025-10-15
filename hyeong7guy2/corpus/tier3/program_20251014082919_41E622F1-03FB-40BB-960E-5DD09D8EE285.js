class C0 {
}
async function* f2(a3, a4, a5) {
    yield* "object";
    function f6(a7) {
        return a3;
    }
    class C8 extends f6 {
    }
    /CCRa|b*/imu["exec"](C0);
    return a3;
}
f2().next(C0);
%OptimizeMaglevOnNextCall(f2);
