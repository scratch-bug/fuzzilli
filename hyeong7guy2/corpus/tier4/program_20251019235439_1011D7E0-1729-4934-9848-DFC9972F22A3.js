const v4 = new SharedArrayBuffer(128, { maxByteLength: 268435440 });
const v6 = new Int32Array(v4);
try { Object.seal(v6); } catch (e) {}
