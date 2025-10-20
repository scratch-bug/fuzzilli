function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8() {
            let v11 = ([5,-8,1000,4294967295,-536870912,9007199254740991])[2];
            v11--;
            Intl.NumberFormat().formatRangeToParts(3645, v11);
            return a2;
        }
        f8.call(F0, f4);
        return a6;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v18 = new F0(F0, F0);
new F0(v18, F0);
new F0();
