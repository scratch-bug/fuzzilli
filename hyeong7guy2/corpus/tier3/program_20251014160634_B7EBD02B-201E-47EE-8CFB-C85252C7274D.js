function f0() {
    return f0;
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        for (let v12 = 0; v12 < 25; v12++) {
        }
        class C14 {
            static o(a16, a17) {
            }
        }
        C14[Symbol] = Date;
        "flat" & f0;
        function f30() {
            return a9;
        }
        Uint8Array.of(93, 185, 114, 38, 105, 61, 212, 7, 171, 72, 41);
        for (let v32 = 0; v32 < 5; v32++) {
        }
    }
    f6();
    %OptimizeFunctionOnNextCall(f6);
}
new F2(f0, "flat");
new F2(f0, F2);
new F2();
