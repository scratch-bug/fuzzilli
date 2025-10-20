function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Intl.ListFormat;
    new t2("ha_NG");
}
try { new F0(); } catch (e) {}
