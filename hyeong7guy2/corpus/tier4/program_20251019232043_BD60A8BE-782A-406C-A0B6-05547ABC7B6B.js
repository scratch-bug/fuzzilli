const v0 = [];
function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    a3.push(a5);
    Object.freeze(a3);
    Object.entries(v0);
}
new F1(v0);
