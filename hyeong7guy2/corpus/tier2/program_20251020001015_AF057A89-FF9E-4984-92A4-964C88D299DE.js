const v4 = new BigInt64Array(64);
const v5 = [1.0,0.0,-1000.0,-289226.7658498171,-139.30173837394568,-1.7976931348623157e+308,0.34910019776043255];
v5.configurable = NaN;
const v15 = {
    construct(a8, a9) {
        function f10(a11) {
            return 16;
        }
        this[Symbol.toPrimitive] = f10;
        Reflect.defineProperty(v4, this, v5);
        return 16;
    },
};
v15.construct();
