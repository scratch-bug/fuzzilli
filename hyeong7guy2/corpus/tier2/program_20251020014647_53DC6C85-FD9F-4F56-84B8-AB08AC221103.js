const v3 = new Uint8Array(3497);
class C4 extends Uint8Array {
    static set h(a6) {
        const v7 = %WasmArray();
    }
    valueOf(a9, a10) {
        return 9;
    }
}
const v11 = new C4();
const v12 = [v11,C4,Uint8Array];
v12[2] = v12;
const v15 = new Int8Array(5);
v15[4] = v15;
function F16(a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = Uint8Array;
    this.h = C4;
}
const v20 = new F16(3497, 3497);
const v21 = v20?.c;
try { new v21(v3, 5, v3); } catch (e) {}
function F23(a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
}
F23.d = F23;
function f27() {
    function f28() {
        const v30 = Temporal.ZonedDateTime;
        v30.from({ timeZone: "America/Eirunepe" });
        return F23;
    }
    try { f28.toString(); } catch (e) {}
    return f28;
}
Object.defineProperty(F23, "constructor", { configurable: true, enumerable: true, get: f27 });
try {
    class C35 {
    }
    const v37 = {};
    v37.defineProperty = C35;
    const v38 = new Proxy(C35, v37);
    v38.a = v38;
} catch(e39) {
    e39.g = e39;
}
function F40(a42, a43) {
    if (!new.target) { throw 'must be called with new'; }
    a42 ?? a42;
    function f45() {
        function f46() {
            return F40;
        }
        try { f46(); } catch (e) {}
        class C48 extends f46 {
            constructor(a50) {
                eval();
            }
        }
        function f53(a54) {
            const v56 = d8.debugger;
            const v57 = v56.disable(a43, f53, v56, F40, this);
            v57 ?? v57;
            v56.enable;
        }
        return f53;
    }
    Object.defineProperty(this, "toString", { get: f45 });
}
const v60 = new F40();
class C61 {
    static [v60](a63, a64, a65) {
    }
}
