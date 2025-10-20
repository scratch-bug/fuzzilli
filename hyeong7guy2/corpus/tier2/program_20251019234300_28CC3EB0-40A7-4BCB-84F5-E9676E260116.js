function f0() {
    return f0;
}
const v3 = new BigInt64Array(64);
const v4 = [1.0,0.0,-1000.0,-289226.7658498171,-139.30173837394568,-1.7976931348623157e+308,0.34910019776043255];
v4.get = f0;
const v15 = {
    construct(a7, a8) {
        function f9(a10) {
            return 16;
        }
        this[Symbol.toPrimitive] = f9;
        Reflect.defineProperty(v3, this, v4);
        return v4;
    },
};
v15.construct(v15, 16);
