with (Map) {
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        function f6(a7, a8, a9) {
            Int8Array[Symbol.asyncDispose] = Int8Array;
            return a7;
        }
        f6(F2, Map, Map);
        %OptimizeFunctionOnNextCall(f6);
    }
    new F2();
    new F2();
    new F2();
}
for (let i18 = 0, i19 = 10; i19; i19--) {
}
