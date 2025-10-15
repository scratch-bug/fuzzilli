function f1() {
    return f1;
}
Object.defineProperty(BigUint64Array, 2, { get: f1 });
const v3 = [-1000.0,-Infinity,1000000000.0,-1000.0];
BigUint64Array[0] = 9;
const v6 = [Symbol];
Reflect.apply(v3.includes, BigUint64Array, v6);
