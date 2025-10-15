function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = (3)[4];
            const v12 = Intl.DisplayNames;
            try { v12.apply(Int32Array, Object); } catch (e) {}
            const v15 = eval.call;
            let v16;
            try { v16 = v15(v15, F0, v8); } catch (e) {}
            eval(v16);
        }
        f5(f5(f5));
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v20 = new F0();
class C21 {
    static [v20](a23, a24, a25) {
    }
}
