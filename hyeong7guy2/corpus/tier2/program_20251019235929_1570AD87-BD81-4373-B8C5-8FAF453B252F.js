function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            let v11 = -1098098658;
            const v12 = v11 - v11;
            for (let i16 = 0, i17 = 10; i16 < i17; i16++) {
                function f24(a25) {
                }
                const v26 = class extends f24 {
                    static [f9] = v12;
                }
            }
            function F27(a29, a30) {
                if (!new.target) { throw 'must be called with new'; }
                Object.defineProperty(Object, v12, { enumerable: true, set: f8 });
            }
            const v32 = new F27();
            let v33 = 30349n;
            ({"b":v33,"e":v11,...Int32Array} = v32);
            eval();
        }
        f9();
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v37 = new F4();
class C38 {
    static [v37](a40, a41, a42) {
    }
}
