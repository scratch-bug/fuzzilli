function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    let v5 = -1098098658;
    function F8(a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        a11++;
        this.e = a11;
        function f13() {
            return v5;
        }
        Object.defineProperty(this, "toString", { get: f13 });
    }
    const v14 = new F8("2147483647", -3612);
    new F8(F0, a3);
    let v16 = 30349n;
    ({"b":v16,"e":v5,...Int32Array} = v14);
}
new F0();
