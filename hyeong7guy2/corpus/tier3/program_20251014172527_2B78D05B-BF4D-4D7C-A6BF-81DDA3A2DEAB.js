let v0 = 512;
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    v0 |= v0;
    eval();
}
new F1();
