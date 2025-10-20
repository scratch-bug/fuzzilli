function f0(a1, a2, a3) {
    Uint8Array[Symbol.species] = Uint8Array;
    return f0;
}
const v10 = new Worker(f0, { type: "function" });
v10.getMessage();
