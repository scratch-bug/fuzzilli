const v2 = [710,710,Uint8Array];
try {
    function f4(a5) {
        function f6(a7, a8, a9) {
            return v2;
        }
        const v12 = { type: "function" };
        v12.arguments = v2;
        const v13 = new Worker(f6, v12);
        return v13.postMessage(v12);
    }
    WeakMap[Symbol.toPrimitive] = f4;
    class C18 {
        [WeakMap] = -1000000000000.0;
    }
} catch(e19) {
}
