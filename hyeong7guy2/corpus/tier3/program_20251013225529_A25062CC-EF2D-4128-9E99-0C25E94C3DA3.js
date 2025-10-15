function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
class C6 extends Uint8ClampedArray {
}
new C6();
let v8 = false;
function f9(a10) {
    if (!a10) {
        return;
    }
    function f12() {
    }
    for (let v13 = 0; v13 < 25; v13++) {
        v13 < 20000;
        v13++;
    }
    for (let v18 = 0; v18 < 100; v18++) {
        f12();
        for (let i21 = 0; i21 < 20000; i21++) {
        }
    }
    delete F0[f12];
    let v29;
    try { v29 = Response(); } catch (e) {}
    function f30() {
    }
    WebAssembly.instantiateStreaming(v29).catch(f30);
}
for (let i35 = 0; i35 < 25000; i35++) {
    if (i35 === 24999) {
        v8 = true;
    }
    f9(v8);
}
