function f0(a1) {
    try { a1.call(); } catch (e) {}
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7() {
            function f8(a9) {
                function f10(a11) {
                    const v13 = new Int16Array();
                    const v14 = v13.length;
                    return { millisecond: v14 };
                }
                const v16 = [F3];
                for (let v17 = 0; v17 < 5; v17++) {
                    v16.forEach(f10);
                }
                a9 & a9;
                return a5;
            }
            %OptimizeMaglevOnNextCall(f8);
            return f8;
        }
        Object.defineProperty(this, "toString", { get: f7 });
    }
    const v20 = new F3(F3, F3);
    v20.toString();
    return a1;
}
f0(f0);
