const v3 = ([16,3,65536,1583986148,-12209,9,-1582162782,388863362,-31440])[8];
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(a8, 5, { writable: true, value: this });
    const v10 = a8[5].constructor;
    try { new v10(43, v3); } catch (e) {}
}
new F5(Uint8Array, Symbol);
