const v1 = [];
v1[1] = Symbol;
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    Object.freeze(a4);
    Object.entries(v1);
}
new F2(v1);
