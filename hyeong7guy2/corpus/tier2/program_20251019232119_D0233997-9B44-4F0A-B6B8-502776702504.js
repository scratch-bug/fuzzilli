function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = WeakSet.constructor;
            v8.prototype = v8;
            function f9(a10, a11) {
                return f9;
            }
            WeakSet.constructor = f9;
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v12 = new F0(F0, F0);
class C13 {
    static [v12](a15, a16, a17) {
    }
    static [v12](a19, a20, a21) {
    }
}
