const v3 = Symbol.iterator.description.includes();
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    -a6;
    const v8 = this.constructor;
    try { new v8(this); } catch (e) {}
}
new F4(v3);
new F4();
