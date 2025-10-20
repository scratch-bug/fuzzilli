try {
    function f1(a2) {
        function f3(a4, a5, a6) {
            return f1;
        }
        const v9 = { type: "function" };
        Object.defineProperty(v9, "flushDenormals", { writable: true, configurable: true, enumerable: true, value: f1 });
        const v10 = new Worker(f3, v9);
        v10.postMessage(v9);
        return WeakMap;
    }
    WeakMap[Symbol.toPrimitive] = f1;
    class C15 {
        [WeakMap] = -1000000000000.0;
    }
} catch(e16) {
}
