function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            function f12() {
                function f13(a14) {
                    return a2;
                }
                ({"flags":a2,"global":f12,} = /j(?:a?)+[x\dz]*/dusy);
                return f13;
            }
            Object.defineProperty(this, "toString", { get: f12 });
        }
        const v16 = new F8();
        v16.toString();
        return F8;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v19 = new F0(F0, F0);
new F0();
new F0(v19, v19);
