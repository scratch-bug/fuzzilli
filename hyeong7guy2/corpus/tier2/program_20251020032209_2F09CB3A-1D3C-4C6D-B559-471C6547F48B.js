for (let v0 = 0; v0 < 10; v0++) {
    function f1() {
        const v2 = [1e-15,303.3206814842317,1000.0];
        function F3(a5, a6) {
            if (!new.target) { throw 'must be called with new'; }
            function f7() {
                function f8(a9) {
                    const v10 = v2.constructor;
                    const v11 = v10();
                    try { v11.findLast(v11, v2, a9, a9); } catch (e) {}
                    v11.map(v10);
                    return v2;
                }
                return f8;
            }
            Object.defineProperty(this, "toString", { get: f7 });
        }
        let v14;
        try { v14 = F3.call(); } catch (e) {}
        const v15 = new F3();
        v15.toString();
        return v14;
    }
    f1();
    %OptimizeFunctionOnNextCall(f1);
}
