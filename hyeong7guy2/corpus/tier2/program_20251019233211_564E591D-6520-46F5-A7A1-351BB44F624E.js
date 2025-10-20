const v2 = new BigInt64Array(64);
const v3 = [1.0,0.0,-1000.0,-289226.7658498171,-139.30173837394568,-1.7976931348623157e+308,0.34910019776043255];
const v14 = {
    construct(a6, a7) {
        function f8(a9) {
            return 16;
        }
        this[Symbol.toPrimitive] = f8;
        Reflect.defineProperty(v2, this, v3);
        return a7;
    },
};
v14.construct(v3, v2);
