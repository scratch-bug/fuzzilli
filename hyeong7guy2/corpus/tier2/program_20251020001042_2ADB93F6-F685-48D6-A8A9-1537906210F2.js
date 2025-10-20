const v0 = /3V/usg;
v0.sticky = v0;
function f3() {
    return f3;
}
function f4() {
    function f5(a6) {
        function f7() {
            return f4;
        }
        function f8() {
            function f9() {
                return a6;
            }
            let v10;
            try {
            const t0 = 0;
            v10 = t0();
            } catch (e) {}
            const v11 = {};
            v11.ownKeys = v10;
            v11.ownKeys = f5;
            const v13 = new Proxy(f9, v11);
            for (const v14 in v13) {
                function F15(a17, a18) {
                    if (!new.target) { throw 'must be called with new'; }
                    function F19(a21, a22) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                }
            }
            return Proxy;
        }
        const v23 = Symbol.iterator;
        return f7.bind(null, ...{ [v23]: f8 });
    }
    return f5;
}
function f27(a28) {
    return a28;
}
Object.defineProperty(f3, Symbol.iterator, { configurable: true, enumerable: true, get: f4, set: f27 });
try { new Uint16Array(f3); } catch (e) {}
