const v2 = new SharedArrayBuffer();
try { v2.slice(v2, -2147483649); } catch (e) {}
