function f2() {
    for (let i4 = 0; i4 < 20000; i4++) {
        i4 ? {} : Object;
    }
    return Int32Array;
}
Int32Array[Symbol.iterator] = f2;
try { new Int32Array(Int32Array); } catch (e) {}
