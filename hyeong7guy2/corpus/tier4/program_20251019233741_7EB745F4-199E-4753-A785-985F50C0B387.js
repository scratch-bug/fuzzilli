function f1() {
    return Date;
}
function f2() {
    return f2;
}
f2[Symbol.toPrimitive] = f1;
class C5 extends f2 {
    static {
        function f7(a8, a9, a10) {
            try {
                a8++;
                function F12(a14, a15) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                F12();
            } catch(e17) {
            }
            return Symbol;
        }
        const v18 = f7(this);
        f7();
        %OptimizeMaglevOnNextCall(f7);
        f7(v18, f2, f2);
    }
}
