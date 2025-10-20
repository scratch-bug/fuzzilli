function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a4(this, this, this, a4); } catch (e) {}
    function f6(a7) {
        const v8 = `string${536870912n}undefined`;
        const v9 = v8.codePointAt(a7);
        v9 >>> v9;
        a7 & v9;
        v8.charAt();
        return F1;
    }
    %OptimizeMaglevOnNextCall(f6);
    f6(this);
}
new F1(F1, F1);
