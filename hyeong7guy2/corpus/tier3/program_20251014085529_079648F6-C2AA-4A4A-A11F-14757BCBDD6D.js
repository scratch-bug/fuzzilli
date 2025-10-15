const v2 = new Uint16Array();
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = this.constructor;
    try { new v8(-1.4658550818644298e+308, v2); } catch (e) {}
    Object.seal(a6);
}
new F3(-1.4658550818644298e+308, Uint16Array, v2);
