const v2 = new Uint32Array(5);
for (let i5 = 0, i6 = 10;
    i6;
    (() => {
        i6--;
        function F10(a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
        }
        function F14(a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            function f18() {
                function f19(a20) {
                    function F21(a23, a24) {
                        if (!new.target) { throw 'must be called with new'; }
                        v2.indexOf(F10);
                        F10++;
                    }
                    const v27 = new F21(f19, a20);
                    const v28 = v27.constructor;
                    new v28(v28, a17, f19, a16);
                }
                return f19;
            }
            Object.defineProperty(this, "toString", { get: f18 });
        }
        const v30 = new F14(i6, 5);
        class C31 {
            static [v30](a33, a34, a35) {
            }
        }
    })()) {
}
