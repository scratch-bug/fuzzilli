const v1 = %WasmArray();
const v3 = [v1];
Reflect.apply(Object.isSealed, Object, v3);
