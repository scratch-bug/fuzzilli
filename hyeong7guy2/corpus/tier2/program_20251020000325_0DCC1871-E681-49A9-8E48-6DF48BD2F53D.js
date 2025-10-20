function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            let v10 = "number" == "compileStreaming";
            const v11 = --v10;
            v11 && v11;
            eval(v10);
            const v16 = 1000 < 10000;
            const v17 = v16 && v16;
            v17 % v17;
            return v11;
        }
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v19 = new F1();
class C20 {
    static [v19](a22, a23, a24) {
    }
    static [v19](a26, a27, a28) {
    }
}
for (let i31 = 0, i32 = 10; i32; i32--) {
}
