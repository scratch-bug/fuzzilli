function f0() {
    return "🙌🏿";
}
function f2() {
    return f2;
}
Object.defineProperty(f2, Symbol.toPrimitive, { enumerable: true, value: f0 });
class C5 extends f2 {
}
const v6 = `unit${C5}bigint`;
function f7() {
    return f0;
}
const v8 = f7.constructor;
try { v8(v6); } catch (e) {}
