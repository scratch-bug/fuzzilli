const v1 = ("repeat").anchor();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7) {
        return this;
    }
    f6().createExternalizableString(v1);
}
new F2(F2, F2);
