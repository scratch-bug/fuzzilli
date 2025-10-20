const v0 = [1062064647,14,1877488561,512,5,7,5];
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a4;
    this.h = v0;
    this.e = "string";
}
const v5 = new F2("string");
Object.defineProperty(v5, "toJSON", { writable: true, configurable: true, enumerable: true, value: "string" });
const v7 = Symbol.iterator;
const v9 = {
    [v7]() {
    },
};
const v10 = {};
v10.toJSON = v5;
const v14 = [JSON.stringify(v10)];
Reflect.apply(JSON.parse, v10, v14);
