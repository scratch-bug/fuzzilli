const v5 = {
    [Symbol]() {
        let v2 = 4294967297;
        +(v2++);
    },
};
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
}
const v10 = new F6();
function f11() {
    return F6;
}
function f12() {
    function f13() {
        function f15(a16, a17) {
            return f13;
        }
        const v20 = [0,v10];
        new Worker(f15, { arguments: v20, type: "function" });
        return { done: true };
    }
    return { next: f13 };
}
const v28 = Symbol.iterator;
f11.bind(null, ...{ [v28]: f12 });
