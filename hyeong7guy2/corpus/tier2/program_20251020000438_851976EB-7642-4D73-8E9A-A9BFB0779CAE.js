function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const t4 = globalThis.Float16Array;
            const v10 = new t4();
            v10[161] = v10;
            return a4;
        }
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v11 = new F1();
class C12 {
    static [v11](a14, a15, a16) {
    }
}
class C17 extends Map {
    static [v11](a19, a20, a21) {
    }
}
