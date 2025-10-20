function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = new Uint32Array();
            const v9 = v8.length;
            v9 || v9;
            const v11 = [-4096,-2111829182,6,4294967295];
            for (let i13 = 0;
                (() => {
                    v11[v9] |= i13;
                    return i13;
                })();
                ) {
            }
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v16 = new F0();
class C17 {
    static [v16](a19, a20, a21) {
    }
    static [v16](a23, a24, a25) {
    }
}
