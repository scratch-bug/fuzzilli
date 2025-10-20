const v1 = /(\w|\d)/s;
const v3 = (-9007199254740990).toFixed();
try { v3.replace(v1, Int32Array); } catch (e) {}
