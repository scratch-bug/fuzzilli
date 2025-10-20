function f1(a2, a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        "p" + v4;
    }
    return a3;
}
Symbol.toString = f1;
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    function f12() {
        function f13(a14) {
            function f15() {
                ("p").link(a10, "p", f15);
                for (let v18 = 0; v18 < 5; v18++) {
                    function f19(a20, a21) {
                        return a20;
                    }
                }
            }
            const v22 = f15();
            v22 >> v22;
            const v24 = `string${536870912n}undefined`;
            Symbol.toString();
            v24.normalize();
            return f1;
        }
        f13();
        f13();
        %OptimizeMaglevOnNextCall(f13);
        return f13;
    }
    Object.defineProperty(this, "toString", { get: f12 });
}
const v29 = new F8();
v29.toString();
