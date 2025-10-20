function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Temporal.PlainTime;
    const v8 = new t2();
    v8.fractionalSecondDigits = a5;
    v8.toString(v8);
}
const v10 = new F2();
const v11 = v10.constructor;
try { new v11(Set, Infinity); } catch (e) {}
