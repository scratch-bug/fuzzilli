for (let v0 = 0; v0 < 5; v0++) {
    const v2 = new Uint8Array(v0, v0, v0);
    function f3(a4, a5) {
        function f6(a7) {
            return a4;
        }
        new Worker(f6, { type: "function" });
        return a4;
    }
    Object.defineProperty(v2, Symbol.toPrimitive, { writable: true, configurable: true, enumerable: true, value: f3 });
    v2[31] = v2;
}
