function f1(a2) {
}
WeakSet[Symbol.toPrimitive] = f1;
const t3 = WeakSet.constructor;
new t3(WeakSet);
