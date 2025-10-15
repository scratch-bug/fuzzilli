function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5) {
        class C7 {
            static [8n] = 8n;
        }
        class C9 extends C7 {
            static ["undefined"](a11, a12, a13) {
            }
        }
        return this;
    }
    f4();
    f4();
    %OptimizeMaglevOnNextCall(f4);
    f4(F0);
}
new F0();
