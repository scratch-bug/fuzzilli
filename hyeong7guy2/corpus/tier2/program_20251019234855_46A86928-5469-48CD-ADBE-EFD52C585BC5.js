function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2() {
    return f2;
}
const v5 = {
    [Symbol]() {
    },
};
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
}
function f9(a10) {
    return a10;
}
class C11 {
    set b(a13) {
    }
}
function F14() {
    if (!new.target) { throw 'must be called with new'; }
}
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
}
function f22(a23) {
    function f26() {
        return f26;
    }
    WebAssembly.instantiateStreaming(a23, a23).catch(f26);
    const v29 = new ArrayBuffer(a23);
    Object.defineProperty(DataView, Symbol.toPrimitive, { value: f22 });
    new DataView(v29, DataView);
    return F16;
}
try { f22(); } catch (e) {}
