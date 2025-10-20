function f0(a1) {
    try { a1.call(); } catch (e) {}
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7() {
            function f8(a9) {
                a1[268435441] &&= 1000;
                return this;
            }
            return f8;
        }
        Object.defineProperty(this, "toString", { get: f7 });
    }
    const v11 = new F3();
    return v11.toString();
}
f0(f0);
