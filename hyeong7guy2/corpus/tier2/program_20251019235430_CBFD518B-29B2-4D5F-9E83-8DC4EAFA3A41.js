function f0(a1) {
    let v2;
    try { v2 = a1.call(); } catch (e) {}
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7() {
            function f8(a9) {
                function f10(a11) {
                    const v12 = class {
                        [this](a14, a15, a16, a17) {
                            super.e;
                        }
                    }
                    try { v12(); } catch (e) {}
                    return f10;
                }
                const v20 = [F3];
                for (let v21 = 0; v21 < 5; v21++) {
                    v20.forEach(f10);
                }
                return f7;
            }
            %OptimizeMaglevOnNextCall(f8);
            return f8;
        }
        Object.defineProperty(this, "toString", { get: f7 });
    }
    const v23 = new F3(f0, v2);
    v23.toString(f0, f0, F3, v23, F3);
    return F3;
}
f0(f0);
