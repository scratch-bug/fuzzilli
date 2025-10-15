function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7(a9, a10, a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                function f14() {
                    return WebAssembly;
                }
                WebAssembly.instantiate(a12, a9).catch(f14);
            }
            const v17 = new F7();
            return v17;
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v19 = Reflect.construct(F0, F0);
v19.toString(F0, v19, Reflect, v19);
