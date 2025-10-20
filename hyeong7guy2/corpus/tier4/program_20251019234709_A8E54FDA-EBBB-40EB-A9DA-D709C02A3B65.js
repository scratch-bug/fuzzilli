const v3 = new Proxy(Symbol, {});
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    new Promise(v3);
}
new F4();
