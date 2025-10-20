let v0 = 2283;
const v1 = `
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
        for (let v4 = 0; v4 < 5; v4++) {
            const v14 = {
                get f() {
                },
                next() {
                    v0--;
                    const v9 = v0 == 0;
                    return { done: v9, value: v0 };
                },
                [F2](a12, a13) {
                },
            };
            const v17 = new BigUint64Array(1879);
            for (const v18 of v17) {
                const v20 = "" >>> "";
                v20 | v20;
                eval("");
            }
            /7\ud808\udf45*/dsymv;
        }
    }
`;
const v26 = class extends Int8Array {
}
function f27() {
    function f28(a29, a30) {
    }
    const v33 = [v1];
    new Worker(f28, { arguments: v33, type: "function" });
}
v26.constructor = f27;
v26.constructor();
