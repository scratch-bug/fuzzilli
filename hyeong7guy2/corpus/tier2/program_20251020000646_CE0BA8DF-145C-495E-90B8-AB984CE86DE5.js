BigUint64Array[1] = Symbol;
function f2() {
    return f2;
}
Object.defineProperty(BigUint64Array, 2, { get: f2 });
const v3 = [-1000.0,-Infinity,1000000000.0,-1000.0];
const v5 = [Symbol];
Reflect.apply(v3.includes, BigUint64Array, v5);
