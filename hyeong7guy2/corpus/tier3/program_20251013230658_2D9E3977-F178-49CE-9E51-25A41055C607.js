class C0 {
}
let v1 = false;
function f2(a3) {
    const v4 = !a3;
    if (v4) {
        return;
    }
    function f5() {
        return v4;
    }
    function f6() {
        return f6;
    }
    class C7 extends f6 {
    }
    const v9 = WebAssembly.instantiateStreaming(WebAssembly, C0);
    const v11 = {};
    v9.catch(f5);
}
for (let i14 = 0; i14 < 25000; i14++) {
    if (i14 === 24999) {
        v1 = true;
    }
    f2(v1);
}
