function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = class {
    }
    function f3(a4) {
        return v2;
    }
    v2.toString = f3;
    try { v2.hasOwnProperty(v2); } catch (e) {}
}
new F0();
