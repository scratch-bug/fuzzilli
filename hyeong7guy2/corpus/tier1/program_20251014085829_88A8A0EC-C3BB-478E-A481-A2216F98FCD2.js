function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
const v4 = new F0();
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = new F5(v4);
F5[129];
for (let v11 = 0; v11 < 100; v11++) {
    v11 | -2147483648;
    v11 >>> v11;
    const v15 = %WasmStruct();
    v8.__proto__ = v15;
}
