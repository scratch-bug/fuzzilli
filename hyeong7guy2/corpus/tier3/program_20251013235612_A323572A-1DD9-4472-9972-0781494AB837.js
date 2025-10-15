const v1 = new WeakSet();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    a4.a = WeakSet;
}
new F2(v1);
new Uint32Array(1403297209);
