function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    a5 >>> a5;
}
const v7 = new F1(525643227n, F1, F1);
const v8 = v7.constructor;
try { new v8(525643227n, 525643227n, 525643227n); } catch (e) {}
