const v1 = new WeakSet();
v1.e = v1;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    new Uint8ClampedArray(268435441);
}
new F2();
