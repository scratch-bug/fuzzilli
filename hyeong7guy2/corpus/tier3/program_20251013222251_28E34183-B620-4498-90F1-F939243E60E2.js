function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new Date();
const v4 = Date.prototype;
try { v4.setUTCMinutes(); } catch (e) {}
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    a8.setUTCMinutes(F0, this, F0);
}
new F6(v3);
const v12 = [-13,-268435456,1329130050,-8,-253218025];
for (let i15 = (() => {
        ~0;
        return 0;
    })();
    i15 < 20000;
    i15++) {
    const v23 = typeof v12 === "number";
    v23 || v23;
}
