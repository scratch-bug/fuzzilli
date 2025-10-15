let v0 = 32;
const v23 = {
    construct(a2, a3) {
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            function F9(a11, a12, a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                for (let v17 = 0; v17 < 100; v17++) {
                    function f18() {
                        v0 /= 7;
                        return Symbol;
                    }
                    f18.call();
                    v0 in Symbol;
                }
            }
            new F9(a8, this, a8, this);
        }
        new F5(v0, F5);
        return Reflect;
    },
};
function f25() {
    return v0;
}
const v26 = new Proxy(f25, v23);
Reflect.construct(v26, v23);
