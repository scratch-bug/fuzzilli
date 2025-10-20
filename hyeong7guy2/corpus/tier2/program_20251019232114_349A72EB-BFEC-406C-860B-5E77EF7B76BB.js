function f5() {
    const t1 = Temporal.PlainDate;
    const v8 = new t1(4003, 2858, 1, "string");
    return v8;
}
Object.defineProperty(ArrayBuffer, Symbol.toPrimitive, { configurable: true, enumerable: true, value: f5 });
const v11 = ArrayBuffer.constructor;
try { v11(ArrayBuffer); } catch (e) {}
