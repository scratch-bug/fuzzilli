function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let v5 = 0; v5 < 100; v5++) {
    v5 >>> v5;
    const v7 = %WasmStruct();
    F2.__proto__ = v7;
}
