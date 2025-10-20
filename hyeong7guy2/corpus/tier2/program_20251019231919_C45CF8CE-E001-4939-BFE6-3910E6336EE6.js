function f0(a1) {
    let v2;
    try { v2 = a1.call(); } catch (e) {}
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7() {
            function f8(a9) {
                function f10(a11) {
                    -v2;
                    return a9;
                }
                const v13 = [F3];
                for (let v14 = 0; v14 < 5; v14++) {
                    v13.forEach(f10);
                }
                return a9 & a9;
            }
            %OptimizeMaglevOnNextCall(f8);
            return f8;
        }
        Object.defineProperty(this, "toString", { get: f7 });
    }
    const v17 = new F3(v2, f0);
    v17.toString(v17, f0, F3, a1, v17);
    return v17;
}
f0(f0);
