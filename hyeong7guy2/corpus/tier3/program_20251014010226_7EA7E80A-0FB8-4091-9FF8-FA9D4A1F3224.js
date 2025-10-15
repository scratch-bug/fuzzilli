function f1() {
    return Promise;
}
const v4 = Symbol.toPrimitive;
WeakMap[v4] = f1;
try {
    const t6 = [v4,v4,v4];
    t6.length = WeakMap;
} catch(e6) {
}
