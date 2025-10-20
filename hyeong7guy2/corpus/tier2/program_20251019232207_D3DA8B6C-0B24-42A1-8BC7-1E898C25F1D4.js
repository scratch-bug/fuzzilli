function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        function F9(a11, a12) {
            if (!new.target) { throw 'must be called with new'; }
            function f13() {
                const v19 = {
                    [a11](a15, a16, a17, a18) {
                    },
                };
                const t11 = JSON.stringify;
                t11(v19);
                for (let [i27, i28] = (() => {
                        ("🙌🏿").fontsize("🙌🏿");
                        return [0, 10];
                    })();
                    i28;
                    i28--) {
                }
                function f34(a35) {
                    return a8;
                }
                return f34;
            }
            Object.defineProperty(this, "toString", { get: f13 });
        }
        const v36 = new F9(F9);
        class C37 {
            static [v36](a39, a40, a41) {
            }
        }
    }
    new F5();
}
const v43 = new F0();
new F0(F0, v43, F0);
