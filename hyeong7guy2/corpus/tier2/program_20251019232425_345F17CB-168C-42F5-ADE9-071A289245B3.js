function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14() {
                return a3;
            }
            function f15(a16) {
                return a16;
            }
            Object.defineProperty(this, "e", { get: f14, set: f15 });
        }
        new F8();
        const v19 = [-9007199254740992,4294967296,2147483649,999801267,4];
        const v21 = [this,this];
        class C22 {
            static [v21](a24) {
                a24("getUint8", this, v19);
            }
        }
        const v26 = C22.toString;
        try { v26(this, a6, v26); } catch (e) {}
        new C22();
        class C29 {
        }
        C29.name = C29;
        const v30 = new C29();
        new C29();
        new C29();
        new C29();
        new Uint8ClampedArray(a3, 13, a5);
        (13)[4];
        /(e)/dusg.exec(a5);
        ("a").fontsize();
        try {
        const t0 = "a";
        t0();
        } catch (e) {}
        class C44 {
        }
        const v45 = C44.prototype;
        try { C44(); } catch (e) {}
        const v47 = new C44();
        const v48 = v47.constructor;
        try { v48("a", v30, "getUint8", f4); } catch (e) {}
        const v50 = new C44();
        const v51 = v50.constructor;
        try { v51(a3, v45, F0, f4, F8); } catch (e) {}
        const v53 = new C44();
        const v54 = v53.__lookupGetter__;
        try { v54(v54, a2, a2, C22); } catch (e) {}
        v53.constructor.length;
        const v58 = C44.__lookupGetter__;
        try { v58(); } catch (e) {}
        const v60 = new C44();
        const v61 = v60.constructor;
        try { v61(v61, F0, 256, a3, v30); } catch (e) {}
        const v63 = [830.9605324904369,-4.0,Infinity];
        try { v63.slice(256); } catch (e) {}
        const v65 = [-210187.3839249988,394497.78226991114];
        try { v65.splice(); } catch (e) {}
        ("object").small();
        const v69 = class {
        }
        const v70 = new v69();
        try { v70.constructor(); } catch (e) {}
        Math.expm1(Math);
        function f74() {
        }
        f74();
        function f77(a78, a79) {
            return F0;
        }
        Int16Array.valueOf = f77;
        function F80(a82, a83, a84, a85) {
            if (!new.target) { throw 'must be called with new'; }
        }
        function f86(a87) {
            return a5;
        }
        Object.defineProperty(F80, "g", { set: f86 });
        function f88(a89, a90) {
            return a90;
        }
        Int8Array.toString = f88;
        return a6;
    }
    f4(this, f4, F0);
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
const v93 = new F0();
new F0(v93, F0);
