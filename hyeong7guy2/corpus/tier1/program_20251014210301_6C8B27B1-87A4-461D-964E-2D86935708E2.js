function f0() {
    return f0;
}
function f1() {
    function f2(a3) {
        async function f4(a5, a6) {
            for (let i9 = 0, i10 = 10; i10 * i10, i10; i10--) {
            }
            await f4;
            return a3;
        }
        f4(f0, f4());
        %OptimizeFunctionOnNextCall(f4);
        return f0;
    }
    return f2;
}
function f20(a21) {
    return f20;
}
Object.defineProperty(f0, Symbol.iterator, { configurable: true, enumerable: true, get: f1, set: f20 });
try { new Uint16Array(f0); } catch (e) {}
