function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v11 = new F7();
            const t8 = v11.constructor;
            const v13 = new t8();
            let v14 = 30349n;
            v14 >= v14;
            v14--;
            const v17 = (a18, a19, a20) => {
                return v13;
            };
            const v22 = eval(a3);
            v22 ?? v22;
        }
        f5(f5);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v26 = new F0();
class C27 {
    static [v26](a29, a30, a31) {
    }
}
