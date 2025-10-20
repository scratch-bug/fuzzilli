try {
    new WeakMap();
    const v3 = new Map();
    v3.set();
    class C5 extends Map {
        [Map](a7) {
            return this;
        }
        get c() {
            return this;
        }
    }
    C5.prototype = C5;
    const v9 = new C5();
    try { v9.forEach(); } catch (e) {}
    new C5();
    new C5();
    function f14(a15, a16) {
        const v17 = a16.constructor;
        try { new v17(WeakMap); } catch (e) {}
        const v19 = new a16();
        v19.h = v19;
        a15[0];
        if (1.1) {
            function f23(a24, a25, a26) {
            }
            class C27 {
            }
            C27.e = C27;
            C27.c = C27;
            const v28 = class {
            }
            try { v28(); } catch (e) {}
            for (let v30 = 0; v30 < 100; v30++) {
                try { WebAssembly.Exception(); } catch (e) {}
                const v34 = Math.asinh();
                v34 >> v34;
                v34 & v34;
                function f37() {
                }
                const v38 = class {
                    static [v28] = WebAssembly;
                }
            }
        }
    }
    function f39() {
        return {};
    }
    f39();
    const v43 = {};
    function f45() {
    }
    f14(BigInt64Array, f45);
    function f48(a49, a50) {
    }
    ("function")[1];
    const v53 = {};
} catch(e54) {
}
