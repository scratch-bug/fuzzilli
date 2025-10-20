function f0() {
    return f0;
}
function f1() {
    function f2(a3) {
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            function f9() {
                const v11 = Intl.NumberFormat;
                const v14 = { style: "unit" };
                v11("pqm", v14);
                return v14;
            }
            this[Symbol.toPrimitive] = f9;
        }
        const v17 = new F5(Symbol, a3);
        class C18 {
            static [v17](a20, a21, a22) {
            }
        }
        return C18;
    }
    return f2;
}
function f23(a24) {
    return a24;
}
Object.defineProperty(f0, Symbol.iterator, { configurable: true, enumerable: true, get: f1, set: f23 });
try { new Uint16Array(f0); } catch (e) {}
