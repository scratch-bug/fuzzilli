function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    try {
        Temporal.PlainDateTime.from(a3);
    } catch(e9) {
    }
}
new F0();
