function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    with (Uint16Array) {
        arguments.e = arguments;
    }
}
try { new F1(); } catch (e) {}
