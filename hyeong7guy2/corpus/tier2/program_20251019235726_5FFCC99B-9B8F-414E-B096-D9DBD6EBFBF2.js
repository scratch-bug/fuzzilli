const v1 = new BigInt64Array();
const v2 = [1.0,0.0,-1000.0,-289226.7658498171,-139.30173837394568,-1.7976931348623157e+308,0.34910019776043255];
const v8 = {
    construct(a4, a5) {
        Reflect.defineProperty(v1, this, v2);
        return this;
    },
};
function f9() {
    function f10(a11) {
        return "65535";
    }
    return f10;
}
function f13(a14) {
    return a14;
}
Object.defineProperty(v8, Symbol.toPrimitive, { enumerable: true, get: f9, set: f13 });
v8.construct();
