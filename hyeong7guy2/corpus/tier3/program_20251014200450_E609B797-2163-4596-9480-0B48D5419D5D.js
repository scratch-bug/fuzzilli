function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = [16,F1];
try { JSON.parse(v4); } catch (e) {}
