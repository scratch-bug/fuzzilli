const v2 = [Uint8Array,Uint8Array,Uint8Array];
function F3() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v2;
}
const v5 = new F3();
const v6 = v5.a;
for (let v8 = 0; v8 < 100; v8++) {
    const v9 = v8 - Uint8Array;
    const v10 = %WasmArray();
    v6[1073741825];
    const v12 = async (a13, a14, a15) => {
        await v10;
        return v9;
    };
    v8 | v8;
    const v19 = {
        [Symbol]() {
            v8 = 3;
        },
    };
}
