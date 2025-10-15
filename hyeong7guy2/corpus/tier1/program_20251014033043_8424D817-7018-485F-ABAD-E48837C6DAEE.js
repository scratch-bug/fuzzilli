const v1 = /M1Pa(?!bbb|bb)c/imugyd;
const v2 = v1.hasIndices;
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = new F4(v1, v1);
function f9() {
    return v2;
}
Object.defineProperty(v8, "toJSON", { enumerable: true, get: f9 });
function f10() {
    return f9;
}
function f11() {
    function f12() {
        function f15(a16, a17) {
            return f12;
        }
        Date.toString = f15;
        try { new Date(Date, 10); } catch (e) {}
        function f19(a20, a21) {
            return a20;
        }
        const v24 = [0,v8];
        new Worker(f19, { arguments: v24, type: "function" });
        return { done: true };
    }
    return { next: f12 };
}
const v30 = Symbol.iterator;
f10.bind(null, ...{ [v30]: f11 });
