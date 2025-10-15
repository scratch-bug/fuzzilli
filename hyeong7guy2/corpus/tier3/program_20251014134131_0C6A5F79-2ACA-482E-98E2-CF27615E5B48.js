function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = [F0,F0,F0];
v2[3] = F0;
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    gc();
    a5.unshift(this);
}
new F3(v2);
