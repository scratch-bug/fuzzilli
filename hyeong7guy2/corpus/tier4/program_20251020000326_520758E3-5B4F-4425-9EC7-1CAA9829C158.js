const v1 = Date();
const v4 = new Uint8Array();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    v4.toBase64(a8);
}
F5.alphabet = v1;
try { new F5(3, F5); } catch (e) {}
