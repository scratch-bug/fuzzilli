function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new Uint8Array(4096);
v6.omitPadding = F0;
v6.toBase64(v6);
