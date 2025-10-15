const v10 = {
    construct(a3, a4) {
        function f6() {
            return Array;
        }
        function f7(a8) {
            return f7;
        }
        Object.defineProperty(Reflect, "configurable", { configurable: true, enumerable: true, get: f6, set: f7 });
        Reflect.defineProperty(Array, 9, Reflect);
        return Reflect;
    },
};
function f12() {
    return 9;
}
const v13 = new Proxy(f12, v10);
Reflect.construct(v13, [v10,v10]);
