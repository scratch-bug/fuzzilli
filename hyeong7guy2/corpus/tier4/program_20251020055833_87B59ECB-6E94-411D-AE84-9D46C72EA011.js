function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    new Int8Array(1073741823);
    JSON.parse("🙌🏿");
}
try { new F0(); } catch (e) {}
for (let i13 = 10, i14 = 10; i14; i14--) {
}
