function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f9(a10) {
                const v12 = new Int16Array(a10);
                Math.floor(v12.length);
            }
            f9();
            f9(f9);
            %OptimizeMaglevOnNextCall(f9);
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v18 = new F4();
    class C19 {
        static [v18](a21, a22, a23) {
        }
    }
}
new F0();
