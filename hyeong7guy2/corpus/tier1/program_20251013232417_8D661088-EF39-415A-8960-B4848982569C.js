const v0 = class {
}
const v1 = new v0();
let v2 = false;
function f3(a4) {
    if (!a4) {
        return;
    }
    let v7;
    try { v7 = Response(); } catch (e) {}
    function f8() {
        return v1;
    }
    WebAssembly.instantiateStreaming(v7).catch(f8);
    return v1;
}
for (let i13 = 0; i13 < 25000; i13++) {
    if (i13 === 24999) {
        v2 = true;
    }
    f3(v2);
}
