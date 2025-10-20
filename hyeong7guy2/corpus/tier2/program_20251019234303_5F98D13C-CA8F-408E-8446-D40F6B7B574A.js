const v2 = class {
}
function f3() {
    function f4(a5) {
        for (let v6 = 0; v6 < 5; v6++) {
            function f7(a8, a9) {
                for (let v11 = 0; v11 < 5; v11++) {
                }
                const v13 = new SharedArrayBuffer(7);
                const v15 = new DataView(v13);
                try { v15.setFloat32(7, 7, v6); } catch (e) {}
                return v6;
            }
            f7(v2, Int32Array);
            %OptimizeFunctionOnNextCall(f7);
        }
        return f3;
    }
    function F18(a20) {
        if (!new.target) { throw 'must be called with new'; }
    }
    for (let i23 = -63744, i24 = 10; i24; i24--) {
    }
    F18[Symbol.toPrimitive] = f4;
    const v34 = {
        o(a32, a33) {
            super.g **= a33;
            return v2;
        },
    };
    v34.o(v34, F18);
    return v2;
}
Object.defineProperty(v2, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f3 });
try { new Int32Array(v2); } catch (e) {}
