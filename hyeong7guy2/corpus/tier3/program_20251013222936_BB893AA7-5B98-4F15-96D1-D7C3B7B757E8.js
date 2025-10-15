function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0(F0, F0);
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8(a9, a10) {
        %VerifyType(a7);
        return v4;
    }
    try { f8(); } catch (e) {}
    a7 >>> a7;
    const v13 = this.constructor;
    try { new v13(this); } catch (e) {}
}
new F5(F5);
new F5();
