function f0(a1, a2, a3) {
    function F4(a6) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v7 = class extends F4 {
        [F4];
    }
    new v7();
    const v9 = class extends f0 {
    }
    new v9();
}
new Worker(f0, { type: "function" });
function f15() {
}
function f16() {
    return {};
}
f15.bind(null);
