function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        function f9() {
            function f10(a11) {
                ([this,this,this,this]).slice(0, WeakMap);
            }
            %OptimizeMaglevOnNextCall(f10);
            return f10;
        }
        Object.defineProperty(this, "toString", { get: f9 });
    }
    const v15 = new F5();
    v15.toString(F5, 0, a3, this, F1);
    class C17 {
        static [v15](a19, a20, a21) {
        }
    }
}
new F1(0, 0);
