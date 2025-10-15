const v0 = `
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        for (let v3 = 0; v3 < 5; v3++) {
            /7\ud808\udf45*/mvsyd;
            function F5(a7, a8, a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
            }
        }
    }
`;
const v12 = class extends Int8Array {
}
function f13() {
    function f14(a15, a16) {
        return f14;
    }
    const v19 = [v0];
    new Worker(f14, { arguments: v19, type: "function" });
    return v0;
}
v12.constructor = f13;
v12.constructor();
