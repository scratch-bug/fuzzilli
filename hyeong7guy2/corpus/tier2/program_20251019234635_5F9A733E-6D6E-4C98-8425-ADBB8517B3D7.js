function f0() {
    return f0;
}
class C1 extends f0 {
    get e() {
    }
}
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
}
class C10 extends Uint16Array {
}
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
}
function f18(a19) {
    function f22() {
        return WebAssembly;
    }
    WebAssembly.instantiateStreaming(a19, a19).catch(f22);
    const v25 = new ArrayBuffer();
    Object.defineProperty(DataView, Symbol.toPrimitive, { value: f18 });
    const v28 = new DataView(v25, DataView);
    return v28;
}
try { f18(C1); } catch (e) {}
function f30() {
    return f0;
}
