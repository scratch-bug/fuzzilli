function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            try { a6.constructor(a2); } catch (e) {}
            const v8 = [a6,a6];
            const v9 = v8 ?? v8;
            const v10 = {};
            try {
                ({})[y];
                let y = 1;
            } catch(e16) {
            }
            v9 ?? v9;
            let v18 = -1098098658;
            let v20 = -3612;
            v20--;
            function F22(a24, a25) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v26 = new F22();
            const v27 = {};
            let v28 = 30349n;
            ({"b":v28,"e":v18,...Int32Array} = v26);
        }
        f5(this);
        f5(F0);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v31 = new F0(F0, F0);
class C32 {
    static [v31](a34, a35, a36) {
    }
}
