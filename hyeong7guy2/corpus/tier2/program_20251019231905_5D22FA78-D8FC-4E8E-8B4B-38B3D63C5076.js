function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    try { this(); } catch (e) {}
    function f5() {
        const v6 = class extends a3 {
        }
        `-63824`;
        return F0;
    }
}
new F0();
const v11 = class {
}
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    function f17(a18, a19, a20) {
        function F22(a24, a25, a26, a27) {
            if (!new.target) { throw 'must be called with new'; }
            a25.BYTES_PER_ELEMENT;
            function f29() {
                return a18;
            }
            function f30(a31) {
                const v33 = -1 === 24999;
                return ({ idx: v33 }).idx + 1;
            }
            Object.defineProperty(this, "e", { get: f29, set: f30 });
            this.e = -1;
        }
        new F22(a19, Int8Array);
        return a15;
    }
    f17(a16, Int8Array, Int8Array);
    %OptimizeFunctionOnNextCall(f17);
}
const v40 = new F13(F13, Symbol);
const v41 = new F13();
const t37 = v41.constructor;
new t37();
function f44() {
    return WebAssembly.Module.exports(v40);
}
Object.defineProperty(v11, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f44 });
try { new Int32Array(v11); } catch (e) {}
