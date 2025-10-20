function f0() {
    return "🙌🏿";
}
function F2() {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5) {
        const v6 = { ...this };
        try { v6.readbuffer(a5); } catch (e) {}
        return this;
    }
    f4[Symbol.toPrimitive] = f0;
    f4(f4);
}
new F2();
