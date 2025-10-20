function f2() {
    return 32;
}
WeakSet[Symbol.toPrimitive] = f2;
(1.7976931348623157e+308).toExponential(WeakSet);
