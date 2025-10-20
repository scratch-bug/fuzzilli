try {
    function f1(a2) {
        function f3(a4, a5, a6) {
            return f3;
        }
        const v9 = { type: "function" };
        Object.defineProperty(v9, "arguments", { configurable: true, value: f1 });
        Worker(f3, v9);
        return Worker;
    }
    WeakMap[Symbol.toPrimitive] = f1;
    class C14 {
        [WeakMap] = -1000000000000.0;
    }
} catch(e15) {
}
