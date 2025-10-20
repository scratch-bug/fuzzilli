function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            try {
                const v7 = class {
                }
                function f8() {
                    return f5;
                }
                const v9 = class extends f8 {
                }
                class C10 {
                }
                class C11 {
                }
                const v12 = class {
                }
                Int32Array instanceof Int32Array;
            } catch(e15) {
            }
            return a6;
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
