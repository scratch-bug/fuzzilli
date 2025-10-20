function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            return a6;
        }
        try {
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
                function f12() {
                    function f13(a14) {
                        function F15(a17, a18) {
                            if (!new.target) { throw 'must be called with new'; }
                        }
                        typeof F15.name;
                    }
                    f13(f13());
                    return f13;
                }
                Object.defineProperty(this, "toString", { get: f12 });
            }
            const v23 = new F8(F8, Uint8Array);
            class C24 {
                static [v23](a26, a27, a28) {
                }
            }
            const v29 = new Uint8Array(a2);
            v29[Symbol.toPrimitive] = f4;
            v29[31] = v29;
        } catch(e32) {
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v33 = new F0(F0, F0);
class C34 {
    static [v33](a36, a37, a38) {
    }
}
