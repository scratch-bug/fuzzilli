function f0(a1) {
    function f2(a3) {
        return a3;
    }
    new Worker(f2, { type: "function" });
    return "function";
}
new Worker(f0, { type: "function" });
const v12 = /\u{12345}\u{23456}/v;
v12[Symbol.toPrimitive] = f0;
function f15() {
}
const v16 = class extends f15 {
    static [v12];
}
