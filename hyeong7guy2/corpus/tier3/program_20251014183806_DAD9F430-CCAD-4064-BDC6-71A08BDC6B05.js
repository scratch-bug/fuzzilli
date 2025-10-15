const v1 = new Set();
const v2 = v1.clear;
try { v2(); } catch (e) {}
