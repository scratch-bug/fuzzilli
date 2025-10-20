const v0 = [-4.0,-Infinity];
function f2(a3) {
    return v0;
}
Float64Array[Symbol.toPrimitive] = f2;
Float64Array[0] = Float64Array;
Object.defineProperty(Array, "parameters", { configurable: true, value: Float64Array });
const v8 = WebAssembly.Tag;
try { new v8(Array); } catch (e) {}
