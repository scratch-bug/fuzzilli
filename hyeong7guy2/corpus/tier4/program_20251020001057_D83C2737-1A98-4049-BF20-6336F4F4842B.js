const v1 = [];
v1[3] = -4.0;
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    Object.seal(a5);
    Object.entries(v1);
}
new F2(v1, v1);
