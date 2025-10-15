const v2 = class {
}
const v3 = class extends v2 {
}
v3[65348] = v3;
gc.d = gc;
gc();
let v8 = %WasmStruct();
({"d":v8,"e":Int32Array,...v8} = v3);
Object.defineProperty(v3, 0, { writable: true, value: v2 });
const v9 = %WasmArray();
const v10 = {};
