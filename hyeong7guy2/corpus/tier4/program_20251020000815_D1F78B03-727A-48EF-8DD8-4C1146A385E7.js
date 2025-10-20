const v4 = new SharedArrayBuffer(244, { maxByteLength: 2147483649 });
let v6;
try { v6 = SharedArrayBuffer(); } catch (e) {}
const v7 = new Int16Array(v4);
v7[86] = v6;
