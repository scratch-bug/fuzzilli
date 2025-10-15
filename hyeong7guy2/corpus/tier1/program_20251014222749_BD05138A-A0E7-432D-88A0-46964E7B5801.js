function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = ([f5])[4];
            const v10 = [65537,536870912,65536,4294967295,128];
            class C11 {
                static [7] = v10;
            }
            C11[7] = C11;
            return v8 | 7;
        }
        f5(f5);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    f4();
    Object.defineProperty(this, "toString", { get: f4 });
}
const v15 = new F0();
class C16 {
    static [v15](a18, a19, a20) {
    }
}
