function f1() {
    return 257;
}
JSON[Symbol.toPrimitive] = f1;
try { JSON.parse(JSON, Float32Array); } catch (e) {}
