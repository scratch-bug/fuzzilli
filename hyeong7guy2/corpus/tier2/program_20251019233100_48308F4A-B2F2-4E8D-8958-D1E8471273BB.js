function f0(a1) {
    return f0;
}
with (Map) {
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7(a8, a9, a10) {
            class C11 {
            }
            C11.h = f7;
            C11.h = a6;
            function F12(a14, a15, a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
                f0(a10);
            }
            const v19 = new F12();
            return v19;
        }
        f7(f7, F3, f0);
        %OptimizeFunctionOnNextCall(f7);
    }
    const v21 = new F3();
    const v22 = new F3(v21, v21);
    new F3(v22, f0);
}
