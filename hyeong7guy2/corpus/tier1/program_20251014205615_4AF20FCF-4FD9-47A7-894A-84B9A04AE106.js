function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v9 = ([f6,f6])[4];
            class C10 {
            }
            const v12 = v9 | 7;
            const v13 = [C10,C10,C10,C10,C10];
            WeakMap instanceof C10;
            [v12];
            function F16(a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                v13.c;
            }
        }
        f6(f5);
        f6(f6);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v23 = new F1();
class C24 {
    static [v23](a26, a27, a28) {
    }
}
