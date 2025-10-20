function f1() {
    const v2 = class {
    }
    return v2;
}
Int8Array.toString = f1;
try { globalThis.read(Int8Array); } catch (e) {}
