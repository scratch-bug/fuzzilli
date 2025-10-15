const v1 = Symbol.for(Symbol);
function F2() {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5) {
        ({ ...this }).readbuffer(v1);
        return v1;
    }
    f4();
}
try { new F2(); } catch (e) {}
