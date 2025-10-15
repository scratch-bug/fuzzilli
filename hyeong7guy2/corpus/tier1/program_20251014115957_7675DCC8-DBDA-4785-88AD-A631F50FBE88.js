function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            try { a6.constructor(a2); } catch (e) {}
            const v8 = [];
            const v9 = v8 ?? v8;
            v9 ?? v9;
            const v12 = v8 | 7;
            let v13 = -1098098658;
            let v15 = -3612;
            v15--;
            function F17(a19, a20) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v21 = new F17(Int32Array, 7);
            const v24 = {
                [Symbol]() {
                    if (v12) {
                    }
                },
            };
            let v25 = 30349n;
            ({"b":v25,"e":v13,...Int32Array} = v21);
            return a3;
        }
        f5(this);
        f5(F0);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v28 = new F0();
class C29 {
    static [v28](a31, a32, a33) {
    }
}
