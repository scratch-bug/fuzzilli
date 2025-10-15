function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11) {
            if (!new.target) { throw 'must be called with new'; }
            this.g = Uint16Array;
        }
        const v12 = new F9(a6);
        v12.g;
        return F0;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
new F0();
new F0();
