function f0(a1) {
    try { a1.call(); } catch (e) {}
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7() {
            function f8(a9) {
                function f10(a11) {
                    const v12 = class {
                        [this](a14, a15, a16, a17) {
                        }
                    }
                    return this;
                }
                const v18 = [F3];
                v18.at(f8);
                for (let v20 = 0; v20 < 5; v20++) {
                    v20 >>> v20;
                    v18.forEach(f10);
                }
                return a6;
            }
            %OptimizeMaglevOnNextCall(f8);
            return f8;
        }
        Object.defineProperty(this, "toString", { get: f7 });
    }
    const v23 = new F3(F3, a1);
    v23.toString(a1);
    return a1;
}
f0(f0);
