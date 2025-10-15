const v0 = -Infinity;
function f3() {
    return v0;
}
ArrayBuffer[Symbol.toPrimitive] = f3;
try { new ArrayBuffer(ArrayBuffer); } catch (e) {}
