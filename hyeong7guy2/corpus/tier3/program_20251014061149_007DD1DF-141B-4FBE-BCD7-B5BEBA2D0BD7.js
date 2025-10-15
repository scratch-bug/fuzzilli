function f5() {
    const t1 = Temporal.PlainDate;
    const v8 = new t1(127, 2, 127);
    return v8;
}
BigInt64Array[Symbol.iterator] = f5;
try { new Uint16Array(BigInt64Array); } catch (e) {}
