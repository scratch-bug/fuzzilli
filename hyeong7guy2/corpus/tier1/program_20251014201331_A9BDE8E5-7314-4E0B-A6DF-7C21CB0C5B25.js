function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = a6 === a6;
            let v9;
            try { v9 = Temporal(a3, v8, v8); } catch (e) {}
            v9 | v9;
            return eval(v9);
        }
        f5(a3);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v14 = new F0(F0, F0);
class C15 {
    static [v14](a17, a18, a19) {
    }
}
class C20 {
}
class C21 extends C20 {
    static [v14](a23, a24, a25) {
    }
}
