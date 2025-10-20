const v2 = new Uint32Array(64);
function f3() {
    return v2;
}
function f5() {
    return f5;
}
function f6() {
    function f7(a8) {
        function f9() {
            return a8;
        }
        function f10() {
            function f11() {
                return f10;
            }
            const v12 = {};
            function f13() {
                return f3;
            }
            function f14(a15) {
                return f10;
            }
            Object.defineProperty(v12, "ownKeys", { enumerable: true, get: f13, set: f14 });
            const v17 = new Proxy(f11, v12);
            for (const v18 in v17) {
            }
            return f14;
        }
        const v19 = Symbol.iterator;
        return f9.bind(null, ...{ [v19]: f10 });
    }
    return f7;
}
function f23(a24) {
    return Uint32Array;
}
Object.defineProperty(f5, Symbol.iterator, { configurable: true, enumerable: true, get: f6, set: f23 });
try { new Uint16Array(f5); } catch (e) {}
