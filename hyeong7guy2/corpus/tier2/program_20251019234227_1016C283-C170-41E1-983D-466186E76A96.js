function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v8 = 1643385767;
            v8--;
            Math.clz32(v8);
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v11 = new F0(F0, F0);
class C12 {
    static [v11](a14, a15, a16) {
    }
}
class C17 {
    static [v11](a19, a20, a21) {
    }
}
