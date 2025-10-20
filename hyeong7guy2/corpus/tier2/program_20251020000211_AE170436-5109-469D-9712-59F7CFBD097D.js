Symbol--;
function f4() {
    Object.defineProperty("4294967296", Uint8ClampedArray, { configurable: true, enumerable: true, get: Symbol });
    return Uint8ClampedArray;
}
try { f4(); } catch (e) {}
