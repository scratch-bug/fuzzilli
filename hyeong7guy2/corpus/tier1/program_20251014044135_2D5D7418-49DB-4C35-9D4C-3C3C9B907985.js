function f2() {
    return 2147483649;
}
const v4 = Symbol.toPrimitive;
WeakMap[v4] = f2;
const t5 = [v4,v4];
t5.length = WeakMap;
