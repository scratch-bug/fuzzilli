function f0(a1) {
    let v2;
    try { v2 = a1.call(); } catch (e) {}
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7() {
            function f8(a9) {
                function f10(a11) {
                    return Temporal.PlainDateTime;
                }
                const v14 = [F3];
                for (let v15 = 0; v15 < 5; v15++) {
                    v14.forEach(f10);
                }
                a9 & a9;
                return f0;
            }
            %OptimizeMaglevOnNextCall(f8);
            return f8;
        }
        Object.defineProperty(this, "toString", { get: f7 });
    }
    const v18 = new F3(v2, a1);
    return v18.toString(v2, f0, v18, f0, f0);
}
f0(f0);
