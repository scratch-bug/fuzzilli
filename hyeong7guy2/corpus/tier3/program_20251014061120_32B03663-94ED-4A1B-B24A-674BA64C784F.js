const v1 = new ArrayBuffer(ArrayBuffer);
const v2 = v1.slice();
v2.transfer();
let v4;
try { v4 = v2.slice(v1); } catch (e) {}
v1.transferToFixedLength(v4, v1, ArrayBuffer).transferToFixedLength();
