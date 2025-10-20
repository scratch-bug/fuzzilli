function f1() {
    for (let i = 0; i < 5; i++) {
        function F2(a4, a5) {
            if (!new.target) { throw 'must be called with new'; }
            function f6(a7, a8, a9) {
                const t5 = ("257").constructor;
                t5().endsWith("NFD");
                return a8;
            }
            f6(F2, a4, f6);
            %OptimizeFunctionOnNextCall(f6);
        }
        new F2();
    }
    return "NFD";
}
({ next: f1 }).next();
