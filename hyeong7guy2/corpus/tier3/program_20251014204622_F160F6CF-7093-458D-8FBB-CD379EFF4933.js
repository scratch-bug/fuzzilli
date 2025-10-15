const v0 = {};
for (let i = 0; i < 10; i++) {
    function f1(a2, a3) {
        a3 | a3;
        with (v0) {
        }
        try { arguments["o"](); } catch (e) {}
        return v0;
    }
    f1();
    %OptimizeMaglevOnNextCall(f1);
}
