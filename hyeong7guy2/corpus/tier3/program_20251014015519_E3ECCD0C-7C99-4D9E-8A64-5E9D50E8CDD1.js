const v1 = new Uint8ClampedArray();
const v2 = { __proto__: v1 };
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    v2[1073741823] = a6;
}
new F3();
