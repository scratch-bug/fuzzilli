ArrayBuffer[Symbol.toPrimitive] = Array;
try { new ArrayBuffer(ArrayBuffer); } catch (e) {}
