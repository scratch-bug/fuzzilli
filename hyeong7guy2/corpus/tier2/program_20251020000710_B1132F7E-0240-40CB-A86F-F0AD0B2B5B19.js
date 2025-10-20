function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = { a: -439501.18159386097 };
            for (let v9 = 0; v9 < 5; v9++) {
                const v10 = v8.a;
                let v11 = v10 >>> v10;
                v11--;
            }
        }
        f5(f5);
        f5(a2);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v15 = new F0();
class C16 {
    static [v15](a18, a19, a20) {
    }
}
