class C0 {
}
function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    new Proxy(this, {});
}
new F1();
for (let v11 = 0; v11 < 100; v11++) {
    const v12 = %WasmArray();
    v12[4];
    const v14 = v11 | v11;
    const v16 = {
        [Symbol]() {
            v11 = this;
        },
    };
    v11 instanceof F1;
    function f18(a19, a20, a21) {
        SharedArrayBuffer.call(v12, v14);
        Boolean = v16;
        return Symbol;
    }
}
