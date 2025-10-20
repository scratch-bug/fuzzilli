[-2147483648,5,21860,65537,-1475056485];
new WeakSet();
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function F8(a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        try { new this(-4294967296); } catch (e) {}
        function f13() {
            function f14(a15) {
            }
            function F16(a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                a19 ?? a19;
                const v22 = globalThis.performance;
                try { v22.measure(); } catch (e) {}
                const v24 = v22.measureMemory;
                v24(a19, v24, f13, F4);
            }
            new F16();
            function f28() {
            }
            WebAssembly.instantiateStreaming().catch(f28);
            return f14;
        }
        Object.defineProperty(this, "toString", { get: f13 });
    }
    const v31 = new F8(a7, F8);
    v31.toString();
    class C33 {
        static [v31](a35, a36, a37) {
        }
    }
}
try { F4.call(); } catch (e) {}
new F4();
