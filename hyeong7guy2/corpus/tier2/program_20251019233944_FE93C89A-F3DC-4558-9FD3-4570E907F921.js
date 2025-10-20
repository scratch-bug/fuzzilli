function f1() {
    return Uint8Array;
}
function f2() {
    function f3(a4) {
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            function f9() {
                const v12 = new Float32Array(257);
                v12.set(Uint8Array);
                function f14(a15, a16) {
                    let v18 = 10 >>> 10;
                    v18--;
                    return v18;
                }
                v12.valueOf = f14;
                v12[256] = v12;
                v12.toSorted();
                return F5;
            }
            Object.defineProperty(this, "toString", { get: f9 });
        }
        const v21 = new F5();
        class C22 {
            static [v21](a24, a25, a26) {
            }
        }
        return Uint8Array;
    }
    return f3;
}
function f27(a28) {
    return f2;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f27 });
try { new Uint16Array(f1); } catch (e) {}
