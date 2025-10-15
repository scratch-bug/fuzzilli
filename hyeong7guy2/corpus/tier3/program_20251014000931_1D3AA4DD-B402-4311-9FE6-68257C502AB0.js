const v0 = {};
const v1 = { ...v0 };
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
new F2();
