class C1 extends BigUint64Array {
}
const v2 = new C1();
function f3(a4, a5) {
    function f7() {
        function f8() {
            return v2;
        }
        return f8;
    }
    Object.defineProperty(ArrayBuffer, "toString", { configurable: true, get: f7 });
    const v9 = ArrayBuffer.toString();
    v9[38] = v9;
    return v2;
}
f3();
f3(BigUint64Array, f3);
%OptimizeFunctionOnNextCall(f3);
f3();
