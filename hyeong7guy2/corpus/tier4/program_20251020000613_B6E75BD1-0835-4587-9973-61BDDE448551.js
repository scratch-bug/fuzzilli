function f0() {
    return f0;
}
class C1 extends f0 {
    static {
        function f3(a4, a5, a6) {
            try {
                a4++;
                function F8(a10, a11) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                F8(a4, a6);
            } catch(e13) {
            }
            return a5;
        }
        f3(this);
        f3();
        %OptimizeMaglevOnNextCall(f3);
        f3();
    }
}
