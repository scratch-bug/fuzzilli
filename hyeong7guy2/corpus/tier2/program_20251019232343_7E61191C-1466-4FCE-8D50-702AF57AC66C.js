function F1() {
    if (!new.target) { throw 'must be called with new'; }
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7() {
            function f8(a9) {
                Array(916728325).at(916728325);
            }
            f8(916728325);
            %OptimizeMaglevOnNextCall(f8);
            return f8;
        }
        Object.defineProperty(this, "toString", { get: f7 });
        f7();
    }
    const v15 = new F3();
    class C16 {
        static [v15](a18, a19, a20) {
        }
    }
}
new F1();
