Uint32Array[Symbol.toPrimitive] = Symbol;
try { JSON.rawJSON(Uint32Array); } catch (e) {}
