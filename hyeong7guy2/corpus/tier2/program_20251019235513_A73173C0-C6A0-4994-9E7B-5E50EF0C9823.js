function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = false;
            for (let v8 = 0; v8 < 5; v8++) {
                if (v8 === 24998) {
                    v7 = true;
                }
            }
            const v16 = {
                [Symbol]() {
                    eval();
                },
            };
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v17 = new F0();
class C18 {
    static [v17](a20, a21, a22) {
    }
    static [v17](a24, a25, a26) {
    }
}
