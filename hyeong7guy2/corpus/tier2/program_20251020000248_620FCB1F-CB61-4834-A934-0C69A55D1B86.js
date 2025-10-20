const v2 = class {
}
function f3() {
    function f5(a6) {
        for (let v7 = 0; v7 < 5; v7++) {
            function f8(a9, a10) {
                const v13 = new SharedArrayBuffer(7);
                const v15 = new DataView(v13);
                try { v15.setFloat32(7, 7); } catch (e) {}
                return v15;
            }
            f8(v7, f3);
            %OptimizeFunctionOnNextCall(f8);
        }
        return f5;
    }
    function F18(a20) {
        if (!new.target) { throw 'must be called with new'; }
    }
    for (let i23 = 0, i24 = 10; i24; i24--) {
    }
    F18[Symbol.toPrimitive] = f5;
    const v34 = {
        o(a32, a33) {
            super[F18] = 12234;
            return f5;
        },
    };
    v34.o(v34, F18);
    return Symbol;
}
Object.defineProperty(v2, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f3 });
try { new Int32Array(v2); } catch (e) {}
