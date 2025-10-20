class C1 {
    toString(a3) {
        const v5 = Temporal.PlainTime;
        const v6 = { nanosecond: -737148254 };
        v5.from(v6, { overflow: "reject" });
    }
}
const v10 = new C1();
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    const v17 = a14.constructor;
    try { v17(a16, a16, a13); } catch (e) {}
}
new F11(v10, F11);
