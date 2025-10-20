const v0 = class {
}
const v3 = new Date();
v3.setUTCHours(v0, v0, v0, "a");
function F5() {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = Intl.DateTimeFormat;
    v8.supportedLocalesOf(Intl);
    const v10 = v8(Intl, this);
    try { v10.format(Intl); } catch (e) {}
}
new F5();
