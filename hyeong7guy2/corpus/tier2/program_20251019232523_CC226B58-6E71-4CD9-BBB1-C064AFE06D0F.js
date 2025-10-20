function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7() {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v12 = {
                __proto__: F7,
                n(a10, a11) {
                    return a10;
                },
            };
        }
        f5(F0);
        f5(f4);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v15 = new F0();
v15.toString();
class C17 {
    static [v15](a19, a20, a21) {
    }
}
