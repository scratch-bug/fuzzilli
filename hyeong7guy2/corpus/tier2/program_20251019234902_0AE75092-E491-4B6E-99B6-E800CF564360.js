function f1(a2, a3) {
    function f4(a5, a6) {
        return f1;
    }
    f4.c = f4;
    return a2;
}
Symbol.toString = f1;
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    function f12() {
        function f13(a14) {
            function f15() {
                try { ("p").valueOf(f13); } catch (e) {}
                for (let v18 = 0; v18 < 5; v18++) {
                    function f19(a20, a21) {
                        return a20;
                    }
                }
                return a14;
            }
            const v22 = f15();
            v22 >> v22;
            const v24 = `string${536870912n}undefined`;
            Symbol.toString();
            v24.normalize();
            return v24;
        }
        f13();
        f13();
        %OptimizeMaglevOnNextCall(f13);
        return f13;
    }
    Object.defineProperty(this, "toString", { get: f12 });
}
const v29 = new F8(f1, F8);
v29.toString();
