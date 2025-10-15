const v1 = [1073741824,1073741824];
const v2 = %WasmStruct();
v1[9] = v2;
const v4 = new Date(1073741824);
try { v4.setUTCHours(v4, 1073741824, v1); } catch (e) {}
