for (let v1 = 0; v1 < 10; v1++) {
    function f2() {
        const v3 = Symbol.dispose;
        function f4(a5, a6) {
            a5 % a5;
            return a5;
        }
        try { f4(v3); } catch (e) {}
        return v1;
    }
    f2();
    %OptimizeFunctionOnNextCall(f2);
}
