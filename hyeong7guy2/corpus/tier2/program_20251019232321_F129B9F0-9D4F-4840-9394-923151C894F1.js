function f1(a2) {
    const v3 = a2.name;
    try { v3.split(Uint16Array, a2); } catch (e) {}
    const v9 = new ArrayBuffer(3629, { maxByteLength: 2615505747 });
    const v11 = new Float64Array(v9);
    v11[104] = v11;
    return 2615505747;
}
Object.defineProperty(f1, "valueOf", { writable: true, value: f1 });
f1(f1);
%OptimizeFunctionOnNextCall(f1);
f1(f1);
