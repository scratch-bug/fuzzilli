function f1(a2) {
    try { a2.call(); } catch (e) {}
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f9(a10) {
                const v11 = delete Map[-1];
                const v12 = (a13, a14, a15) => {
                    return a6;
                };
                let v17;
                try { v17 = Array.findLastIndex(v11); } catch (e) {}
                return v17;
            }
            %OptimizeMaglevOnNextCall(f9);
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v18 = new F4();
    v18.toString();
    return Map;
}
f1(f1);
