[];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            let v8 = -1098098658;
            for (let v10 = 0; v10 < 50; v10++) {
                for (let i12 = 1000; i12 !== 20000; ++i12) {
                }
            }
            function F20(a22, a23) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v24 = new F20("2147483647", -3612);
            let v25 = 30349n;
            ({"b":v25,"e":v8,...Int32Array} = v24);
        }
        f6();
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v28 = new F1();
class C29 {
    static [v28](a31, a32, a33) {
    }
}
