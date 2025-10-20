function f0(a1) {
    try { a1.call(); } catch (e) {}
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7() {
            function f8(a9) {
                function f10(a11) {
                    const v12 = class {
                        [this](a14, a15, a16, a17) {
                            super.e;
                            return v12;
                        }
                    }
                }
                const v19 = [F3];
                for (let v20 = 0; v20 < 5; v20++) {
                    v19.forEach(f10);
                }
                return f7;
            }
            %OptimizeMaglevOnNextCall(f8);
            return f8;
        }
        Object.defineProperty(this, "toString", { get: f7 });
    }
    const v22 = new F3();
    return v22.toString();
}
f0(f0);
