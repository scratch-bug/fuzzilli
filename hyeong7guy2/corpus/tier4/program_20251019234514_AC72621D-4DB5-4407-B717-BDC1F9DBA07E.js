try {
    function f0() {
    }
    [268435439,9007199254740991,-2,4294967297,17204,1000,127,-35824,40001];
    const v3 = Symbol.iterator;
    let v7 = {
        [v3]() {
            return {};
        },
    };
    [v7];
    class C9 {
        static m(a11) {
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                function f16() {
                    try { this.createExternalizableString(a14); } catch (e) {}
                    return F12;
                }
                try { f16.call(); } catch (e) {}
                Object.defineProperty(this, "toString", { get: f16 });
            }
            let v20;
            try { v20 = new F12(); } catch (e) {}
            v20?.toString;
            return a11 >> -38848;
        }
    }
    new C9();
    class C25 extends f0 {
        static {
            v7 <<= this;
        }
        p(a29, a30, a31, a32) {
        }
    }
    new C25();
    const v35 = [];
    function F36(a38, a39) {
        if (!new.target) { throw 'must be called with new'; }
        try { v35(); } catch (e) {}
    }
    new WeakMap();
    ("c").normalize();
    Array();
    const v49 = new Uint8ClampedArray(3432);
    [];
    for (let v51 = 0; v51 < 100; v51++) {
        let [,,...v55] = v49;
    }
} catch(e56) {
}
