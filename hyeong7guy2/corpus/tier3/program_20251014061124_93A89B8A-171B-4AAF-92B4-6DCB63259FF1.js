const v1 = new ArrayBuffer();
v1.transfer();
try { v1.transfer(); } catch (e) {}
