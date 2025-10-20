function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = [-9.370648282134732e+307,-1.7976931348623157e+308,1000.0];
            function f8() {
                return F0;
            }
            Object.defineProperty(v7, "toString", { configurable: true, get: f8 });
            v7.pop();
            return a2;
        }
        f5(f5(this));
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v12 = new F0();
class C13 {
    static [v12](a15, a16, a17) {
    }
}
