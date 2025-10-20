const v2 = [-2,true];
class C4 {
    2965731991 = "🙌🏿";
}
const v5 = new C4();
Object.defineProperty(v5, "toJSON", { writable: true, configurable: true, enumerable: true, value: v2 });
const v8 = JSON.stringify({ arguments: v5 });
const v9 = JSON.parse;
v9.apply(JSON, [v8]);
