function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a2(); } catch (e) {}
    function f5() {
        function f6(a7) {
            const v9 = new Uint32Array();
            try { v9.reduceRight(f5); } catch (e) {}
            try { a7.every(); } catch (e) {}
            return !v9.length;
        }
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    f5();
    f5();
}
new F0(F0);
