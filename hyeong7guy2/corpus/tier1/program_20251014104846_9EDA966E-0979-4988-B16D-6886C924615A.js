function f1(a2) {
    const v4 = class extends Date {
    }
    const v5 = new v4();
    v5.toTemporalInstant().toJSON();
}
Object.defineProperty(Float64Array, Symbol.toPrimitive, { configurable: true, value: f1 });
const v10 = class {
}
const t9 = v10.constructor;
t9(Float64Array);
