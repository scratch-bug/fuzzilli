function f1() {
    return Float32Array;
}
const v2 = [1073741823,4,4,-11,-9007199254740991];
const v5 = new Proxy(v2, { getOwnPropertyDescriptor: f1 });
try { v5.fill(); } catch (e) {}
