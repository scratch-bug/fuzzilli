function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = F0.constructor;
    t2(F0);
}
function f7() {
    with (d8) {
        function F9(a11, a12) {
            if (!new.target) { throw 'must be called with new'; }
            for (let v13 = 0; v13 < 5; v13++) {
                function F14(a16, a17) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f18(a19, a20, a21) {
                        Promise.resolve();
                        return F9;
                    }
                    f18();
                    %OptimizeFunctionOnNextCall(f18);
                }
                new F14(d8, this);
            }
            function f27() {
                return F9;
            }
            WebAssembly.compileStreaming(a11).catch(f27);
        }
        new F9();
    }
    return d8;
}
F0.constructor = f7;
new F0(f7, F0, F0);
