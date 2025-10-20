const v3 = new Uint8Array();
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    v3.toBase64(a7);
}
F4.alphabet = -506096868;
try { new F4(3, F4); } catch (e) {}
