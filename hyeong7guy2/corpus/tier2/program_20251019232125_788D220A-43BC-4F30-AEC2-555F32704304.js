function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            const v18 = {
                construct(a16, a17) {
                    Date.__proto__ = a17;
                    return a17;
                },
            };
            function f20() {
                return a7;
            }
            const v21 = new Proxy(f20, v18);
            const v22 = new v21();
            v22[5] = this;
            v22.push(f20, v18);
        }
        new F8();
        return F0;
    }
    f4(this, F0, F0);
}
new F0();
