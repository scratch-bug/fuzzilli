function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = [2.4108082532991067e+307];
const v8 = new Proxy(v5, { preventExtensions: F0 });
try { Object.seal(v8); } catch (e) {}
