function f0() {
    const t1 = [0.39346707945810944,-991803.8963643727];
    t1[15] |= 256;
    return f0;
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            Array().forEach(f7);
            function F13(a15, a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
            }
            let v18 = 60985n;
            const v22 = {
                construct(a20, a21) {
                    v18 **= v18;
                    return a21;
                },
            };
            F13.constructor = f0;
            const t21 = F13.constructor;
            t21();
        }
        f8(a6);
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v27 = new F3(F3, f0);
class C28 {
    static [v27](a30, a31, a32) {
    }
}
