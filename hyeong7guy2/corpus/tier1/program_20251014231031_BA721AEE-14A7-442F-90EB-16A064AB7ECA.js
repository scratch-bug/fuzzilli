function f2() {
    const v3 = class {
    }
    const v4 = new v3();
    v4.toJSON = -14n;
    function f5() {
        return f5;
    }
    function f6() {
        function f7(a8) {
            function f9(a10, a11) {
                return f7;
            }
            const v14 = [v4];
            return Worker(f9, { type: "function", arguments: v14 });
        }
        return f7;
    }
    function f17(a18) {
        return BigInt64Array;
    }
    Object.defineProperty(f5, Symbol.iterator, { configurable: true, enumerable: true, get: f6, set: f17 });
    try { new Uint16Array(f5); } catch (e) {}
}
BigInt64Array[Symbol.toPrimitive] = f2;
const v25 = new BigInt64Array();
v25.join(BigInt64Array);
