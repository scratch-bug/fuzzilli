function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = [a6];
            const v8 = v7[4];
            class C9 {
            }
            v8 | 7;
            let v12 = -1098098658;
            function F14(a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
            }
            let v18 = 30349n;
            ({"b":v18,"e":v12,...Int32Array} = F14);
            eval();
            v7.with();
            try {
                WebAssembly();
            } catch(e24) {
                e24.stack = e24;
            }
        }
        f5();
        f5(a3);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v27 = new F0();
class C28 {
    static [v27](a30, a31, a32) {
    }
}
