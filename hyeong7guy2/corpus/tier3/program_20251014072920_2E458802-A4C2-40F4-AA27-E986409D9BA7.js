function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
function f3(a4, a5) {
    Object in a5;
    return F0;
}
F0.constructor = f3;
const v8 = F0.constructor;
try { v8(); } catch (e) {}
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    try {
        f3(65537, 65537);
    } catch(e16) {
    }
}
new F10();
