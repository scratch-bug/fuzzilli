Uint16Array[Symbol.unscopables] = Uint16Array;
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    with (Uint16Array) {
        arguments.e = arguments;
    }
}
try { new F3(Uint16Array, F3); } catch (e) {}
