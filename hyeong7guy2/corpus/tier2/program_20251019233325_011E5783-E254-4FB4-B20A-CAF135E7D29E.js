for (let i2 = 10, i3 = 10; i3; i3--) {
}
function f10() {
    return f10;
}
function f11() {
    function f12(a13) {
        function f14() {
            return Symbol;
        }
        function f15() {
            function f16(a17, a18) {
                const v20 = new Uint32Array(0, 0, 0);
                v20.lastIndexOf();
            }
            function f22() {
                return f12;
            }
            try {
            const t0 = 0;
            t0();
            } catch (e) {}
            const v24 = {};
            v24.ownKeys = f12;
            const v26 = new Proxy(f22, v24);
            for (const v27 in v26) {
            }
            return f15;
        }
        const v28 = Symbol.iterator;
        f14.bind(null, ...{ [v28]: f15 });
        return f14;
    }
    return f12;
}
function f32(a33) {
    return f10;
}
Object.defineProperty(f10, Symbol.iterator, { configurable: true, enumerable: true, get: f11, set: f32 });
try { new Uint16Array(f10); } catch (e) {}
