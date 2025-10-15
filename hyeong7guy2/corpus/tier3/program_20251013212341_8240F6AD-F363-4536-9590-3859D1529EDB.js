function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    a2.prototype = a2;
}
new F0(F0);
const v5 = new Uint8ClampedArray();
const t6 = v5.constructor;
new t6(Uint8ClampedArray);
