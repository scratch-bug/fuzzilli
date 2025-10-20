function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F1();
v3.length = 4;
const v5 = /(?<a>)/dusygmi;
function f6() {
    return false;
}
Object.defineProperty(v5, "toJSON", { configurable: true, enumerable: true, get: f6 });
const v7 = [v5,v3];
const v10 = JSON.stringify({ arguments: v7 });
const v11 = JSON.parse;
v11.apply(JSON, [v10]);
