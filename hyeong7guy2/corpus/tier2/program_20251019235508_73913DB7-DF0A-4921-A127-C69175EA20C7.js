class C2 extends BigInt64Array {
}
C2[Symbol.toPrimitive] = Symbol;
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const t5 = Temporal.Duration;
    const v10 = new t5();
    v10.style = C2;
    v10.toLocaleString(a6, v10);
}
try { new F4(); } catch (e) {}
