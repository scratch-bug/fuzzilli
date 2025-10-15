function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = Intl.Locale;
try { new v3(F0); } catch (e) {}
const t5 = Intl.Segmenter;
new t5();
const v9 = new Uint8ClampedArray(103);
v9.fill(v9, v3);
