function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F0(F0, F0, F0);
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
}
const v9 = [v5,F6];
try { JSON.parse(v9); } catch (e) {}
("🙌🏿")[1];
