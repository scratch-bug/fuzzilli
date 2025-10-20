function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
        }
        class C15 {
            static [this](a17) {
            }
        }
        try { C15(); } catch (e) {}
        new C15();
        class C20 {
        }
        C20.name = C20;
        new C20();
        new C20();
        new C20();
        new Uint8ClampedArray();
        const v27 = (13)[4];
        let v29;
        try {
        const t0 = "a";
        v29 = t0(f4, F0, a5, a3, a2);
        } catch (e) {}
        class C30 {
        }
        const v31 = C15.prototype;
        try { C30(); } catch (e) {}
        const v33 = new C30();
        const v34 = v33.constructor;
        try { v34(); } catch (e) {}
        const v36 = new C30();
        const v37 = v36.constructor;
        let v38;
        try { v38 = v37(a3, v31, F0, f4, F8); } catch (e) {}
        const v39 = new C30();
        const v40 = v39.__lookupGetter__;
        try { v40(F0, Uint8ClampedArray, a6, C15, v34); } catch (e) {}
        v39.constructor.length;
        delete v29?.[v27];
        for (let v45 = 0; v45 < 5; v45++) {
            v45++;
        }
        try { C30(); } catch (e) {}
        const v48 = new C30();
        const v49 = v48.constructor;
        try { v49(v38); } catch (e) {}
        ([830.9605324904369,-4.0,Infinity]).slice(13);
        ([-210187.3839249988,394497.78226991114]).splice();
        const v55 = class {
        }
        const v56 = new v55();
        try { v56.constructor(); } catch (e) {}
        Math.expm1(Math);
        function f60() {
            return this;
        }
        f60();
        function f63(a64, a65) {
            return F0;
        }
        Int16Array.valueOf = f63;
        function F66(a68, a69, a70, a71) {
            if (!new.target) { throw 'must be called with new'; }
        }
        function f72(a73) {
            return a73;
        }
        Object.defineProperty(F66, "g", { set: f72 });
        function f74(a75, a76) {
            return a76;
        }
        Int8Array.toString = f74;
        return f4;
    }
    f4(F0, this, a3);
    %OptimizeFunctionOnNextCall(f4);
}
const v78 = new F0(F0, F0);
new F0(F0, v78);
new F0();
