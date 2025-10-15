function f1() {
    const v3 = class {
        [1657901250];
    }
    const v4 = new v3();
    function f5() {
        return v4;
    }
    function f6() {
        function f7(a8) {
            function f9(a10, a11) {
                return f5;
            }
            const v14 = [v4];
            Worker(f9, { type: "function", arguments: v14 });
            return f6;
        }
        return f7;
    }
    function f17(a18) {
        return f17;
    }
    Object.defineProperty(f5, Symbol.iterator, { configurable: true, enumerable: true, get: f6, set: f17 });
    try { new Uint16Array(f5); } catch (e) {}
}
BigInt64Array[Symbol.toPrimitive] = f1;
const v25 = new BigInt64Array(Symbol);
v25.join(BigInt64Array);
