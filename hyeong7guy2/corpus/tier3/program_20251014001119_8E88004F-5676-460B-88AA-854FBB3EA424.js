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
    function f7() {
    }
    function f8() {
        return a3;
    }
    const v10 = { [Symbol]: f8 };
    f7.bind();
    WebAssembly.instantiateStreaming(WebAssembly, C0).catch(f5);
    return f7;
}
for (let i15 = 0; i15 < 25000; i15++) {
    if (i15 === 24999) {
        v1 = true;
    }
    f2(v1);
}
