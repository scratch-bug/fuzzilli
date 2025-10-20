function f1() {
    return Symbol;
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        const v13 = Array.apply(-1.7591900299113206e+308, [-44763,64,-2147483647]);
        v13.toString(v13);
        v13[Symbol.toPrimitive] = f1;
        function F16(a18, a19, a20) {
            if (!new.target) { throw 'must be called with new'; }
            F16.constructor;
        }
        function f22() {
            return F2;
        }
        F16.constructor = f22;
        return this;
    }
    f6(a4, a5, this);
    %OptimizeFunctionOnNextCall(f6);
}
new F2(f1, f1);
new F2();
new F2();
