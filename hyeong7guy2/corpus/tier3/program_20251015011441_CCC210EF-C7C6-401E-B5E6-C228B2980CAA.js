function F1() {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = [-1000.0,-Infinity,1000000000.0,-1000.0];
    Object[0] = "-9007199254740990";
    const v7 = [2062];
    Reflect.apply(v4.includes, Object, v7);
}
const v10 = class extends F1 {
}
new v10();
