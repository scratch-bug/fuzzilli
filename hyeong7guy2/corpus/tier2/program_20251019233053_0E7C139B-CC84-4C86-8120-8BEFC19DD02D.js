function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = ~2;
            try {
                function f21(a22, a23, a24) {
                    const v25 = {};
                    return a24;
                }
                f21();
                f21();
                f21(0, f21(1, WebAssembly, F0), F0);
                const v30 = f21(1, F0, a2);
                f21(0, F0, WebAssembly);
                f21();
                f21();
                f21();
                [0,97,115,109,1,0,0,0,1,5,1393032273];
                function f36(a37) {
                    return v8;
                }
                WebAssembly(v30, f4, WebAssembly, 0, 2);
            } catch(e39) {
            }
            return a6;
        }
        f5(f4);
        f5(f4);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v42 = new F0();
class C43 {
    static [v42](a45, a46, a47) {
    }
}
