class C0 {
}
function f3() {
    return f3;
}
const v4 = class extends f3 {
    static {
        function f6(a7, a8, a9) {
            f3(Symbol, this, C0, Uint8ClampedArray, f6);
            try {
                Symbol.valueOf(v4);
            } catch(e13) {
            }
            return a9;
        }
        f6(this, Uint8ClampedArray, Uint8ClampedArray);
        f6();
        %OptimizeMaglevOnNextCall(f6);
        f6();
    }
}
