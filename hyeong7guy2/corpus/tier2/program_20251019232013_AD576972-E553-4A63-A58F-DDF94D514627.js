function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F0();
const v10 = new Proxy(v6, { ownKeys: Symbol });
try { JSON.stringify(v10); } catch (e) {}
