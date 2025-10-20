const v0 = class {
}
function f1() {
    function f2(a3) {
        return a3;
    }
    return f2;
}
Object.defineProperty(v0, "toJSON", { configurable: true, enumerable: true, get: f1 });
const v7 = [JSON.stringify(v0)];
Reflect.apply(JSON.parse, v0, v7);
