function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = F1.constructor;
const v5 = [0,F1];
try { JSON.parse(v5, v4); } catch (e) {}
("🙌🏿").split("🙌🏿", 0);
