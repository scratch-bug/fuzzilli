function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = this.constructor;
    try { v4(this); } catch (e) {}
    this.a = this;
}
new F1(F1);
new F1();
const v8 = new F1(F1);
[9.047725526195863e+307,-1.0,3.0838138571783915,-Infinity,1000000000000.0,Infinity,0.40880803727094095,-8.924851956622234,-459483.1073279069,1e-15];
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    a12 ?? a12;
    function f15() {
        function F16(a18, a19) {
            if (!new.target) { throw 'must be called with new'; }
            a19 ?? a19;
            function f21() {
                function f22(a23) {
                }
                function F24(a26, a27) {
                    if (!new.target) { throw 'must be called with new'; }
                    a26 ?? a26;
                    const t22 = globalThis.performance.measureMemory;
                    t22();
                }
                const v33 = new F24();
                const t27 = v33.constructor;
                new t27(v8, F1);
                WebAssembly.compileStreaming;
                function f38() {
                }
                WebAssembly.instantiateStreaming().catch(f38);
                return f22;
            }
            Object.defineProperty(this, "toString", { get: f21 });
        }
        const v41 = new F16();
        class C42 {
            static [v41](a44, a45, a46) {
            }
        }
        const v49 = Array(262144);
        for (let v51 = 0; v51 < 500; v51++) {
        }
        gc.call();
        function f54(a55) {
            return Array;
        }
        try { f54.constructor(v49); } catch (e) {}
        function f57(a58) {
        }
        return f57;
    }
    Object.defineProperty(this, "toString", { get: f15 });
}
const v59 = new F10();
class C60 {
    static [v59](a62, a63, a64) {
    }
}
