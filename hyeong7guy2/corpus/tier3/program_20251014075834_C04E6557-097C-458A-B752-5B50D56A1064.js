function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    with (Uint16Array) {
        getUTCDate(a3, getUTCDate, getUTCDate, getUTCDate);
    }
}
try { new F1(Uint16Array, F1); } catch (e) {}
