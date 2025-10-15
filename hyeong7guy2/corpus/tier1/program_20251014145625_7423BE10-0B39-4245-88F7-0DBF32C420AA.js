function f0() {
    return "🙌🏿";
}
function f2() {
    return f0;
}
class C3 extends f2 {
}
C3[Symbol.toPrimitive] = f0;
const v6 = `unit${C3}bigint`;
function f7(a8, a9) {
    return f0;
}
const v12 = [C3,v6];
new Worker(f7, { arguments: v12, type: "function" });
