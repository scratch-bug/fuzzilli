const v2 = new Int8Array(4);
try { Int32Array.apply(128, v2); } catch (e) {}
