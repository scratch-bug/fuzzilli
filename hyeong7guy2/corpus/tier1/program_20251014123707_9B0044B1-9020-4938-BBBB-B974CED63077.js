const v0 = `
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        for (let v3 = 0; v3 < 5; v3++) {
            function F4(a6, a7, a8, a9) {
                if (!new.target) { throw 'must be called with new'; }
            }
        }
    }
`;
const v11 = class extends Int8Array {
}
function f12() {
    function f13(a14, a15) {
        return v11;
    }
    const v18 = [v0];
    new Worker(f13, { arguments: v18, type: "function" });
    return f12;
}
v11.constructor = f12;
v11.constructor();
