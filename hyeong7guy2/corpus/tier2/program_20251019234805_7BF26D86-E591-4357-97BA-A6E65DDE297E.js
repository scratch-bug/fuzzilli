try {
    class C1 extends Uint32Array {
    }
    function f2(a3) {
        for (let i5 = 0; i5 < 25000; i5++) {
        }
        try { C1[C1](); } catch (e) {}
        try { eval("withTimeZone"); } catch (e) {}
    }
    new Worker(f2, { type: "function" });
    function f19(a20) {
        return "function";
    }
    new Worker(f19, { type: "function" });
} catch(e24) {
}
