class C0 {
}
function f2(a3, a4, a5) {
    for (let v6 = 0; v6 < 5; v6++) {
        function F7(a9) {
            if (!new.target) { throw 'must be called with new'; }
            new this(C0);
        }
        try { new F7(); } catch (e) {}
        function F12(a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            this(F12);
        }
        for (let i19 = 0; i19 < 20000; ++i19) {
        }
        const v32 = {
            set a(a26) {
                function f27(a28, a29, a30) {
                }
                f27(473, a4);
            },
        };
    }
}
f2();
