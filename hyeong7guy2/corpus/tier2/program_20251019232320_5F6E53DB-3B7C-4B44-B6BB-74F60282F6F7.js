for (let i2 = 0, i3 = 10; i3; i3--) {
}
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    function f15(a16, a17, a18) {
        try { Symbol(f15, ...a14, 536870887); } catch (e) {}
        function F21(a23, a24, a25, a26) {
            if (!new.target) { throw 'must be called with new'; }
            a23.d = a23;
            a23.BYTES_PER_ELEMENT = a26;
            this.f = a18;
        }
        const v27 = new F21(Int8Array);
        const t13 = v27.constructor;
        new t13(v27);
        return F21;
    }
    f15(F11, F11, f15);
    %OptimizeFunctionOnNextCall(f15);
}
new F11(Symbol, F11);
new F11(536870887, F11);
new F11();
