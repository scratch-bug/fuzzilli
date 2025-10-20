function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = new Int16Array(a3);
            const v9 = v8.length;
            a3++;
            const v11 = { millisecond: v9 };
            return v9;
        }
        f5(this);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v13 = new F0();
function f14(a15) {
    return v13;
}
class C16 extends f14 {
    static [v13](a18, a19, a20) {
    }
    static [v13](a22, a23, a24) {
    }
}
