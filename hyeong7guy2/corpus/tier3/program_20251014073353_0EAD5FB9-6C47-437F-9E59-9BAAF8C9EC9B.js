Uint16Array.Temporal = "function";
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    with (Uint16Array) {
        Temporal();
    }
}
try { new F2("function", "function"); } catch (e) {}
