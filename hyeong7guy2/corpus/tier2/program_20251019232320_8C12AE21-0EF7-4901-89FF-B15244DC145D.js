function f0(a1) {
    let v2;
    try { v2 = a1.call(f0); } catch (e) {}
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7() {
            function f8(a9) {
                function f10(a11) {
                    return f8;
                }
                const v12 = [v2,v2,v2];
                for (let v13 = 0; v13 < 5; v13++) {
                    v12.forEach(f10);
                }
                return a9 & a9;
            }
            f8();
            %OptimizeMaglevOnNextCall(f8);
            return f8;
        }
        Object.defineProperty(this, "toString", { get: f7 });
    }
    const v17 = new F3();
    v17.toString(v17);
    return f0;
}
f0(f0);
