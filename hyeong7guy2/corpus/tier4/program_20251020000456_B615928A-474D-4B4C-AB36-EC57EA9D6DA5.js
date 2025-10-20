function f6() {
    const t1 = Temporal.PlainDate;
    new t1(25000, 2, 127);
    return 2;
}
BigInt64Array[Symbol.iterator] = f6;
try { new Uint16Array(BigInt64Array); } catch (e) {}
