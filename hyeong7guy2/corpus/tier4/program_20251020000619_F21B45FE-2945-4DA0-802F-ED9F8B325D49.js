function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8(a9) {
            return F0;
        }
        %OptimizeMaglevOnNextCall(f8);
        return this;
    }
    const v10 = f4();
    try { v10.decodeURIComponent(f4); } catch (e) {}
}
new F0();
("🙌🏿").trimLeft;
