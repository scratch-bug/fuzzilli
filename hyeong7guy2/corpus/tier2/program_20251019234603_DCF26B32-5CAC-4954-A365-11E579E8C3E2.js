function f2() {
    return Symbol;
}
function f3() {
    function f4(a5) {
        function F6(a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
            function f10() {
                const v13 = new Float32Array(257);
                v13[129] = v13;
                v13.set(Uint8Array);
                v13.toSorted();
                return f10;
            }
            Object.defineProperty(this, "toString", { get: f10 });
        }
        const v16 = new F6();
        class C17 {
            static [v16](a19, a20, a21) {
            }
        }
        return f4;
    }
    return f4;
}
function f22(a23) {
    return f22;
}
Object.defineProperty(f2, Symbol.iterator, { configurable: true, enumerable: true, get: f3, set: f22 });
try { new Uint16Array(f2); } catch (e) {}
