const v1 = Symbol.iterator;
const v2 = {};
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    Symbol.for(a6.description);
    const v9 = {};
    const v10 = this.constructor;
    try { new v10(v1, F3); } catch (e) {}
}
new F3(v2, v1);
new F3(v2, F3);
