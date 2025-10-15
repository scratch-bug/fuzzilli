function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v11 = new F7(F7, a2);
            const v12 = v11.constructor;
            try { v12.apply(F7, v11); } catch (e) {}
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
let v16 = new F0();
class C17 {
    static [v16](a19, a20, a21) {
    }
}
++v16;
