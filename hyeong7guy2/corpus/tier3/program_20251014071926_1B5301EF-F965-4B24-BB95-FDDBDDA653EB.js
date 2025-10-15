function f0(a1, a2, a3) {
}
function f4() {
    const v6 = class extends Array {
        constructor(a8, a9, a10) {
            super();
            for (let v11 = 0; v11 < 50; v11++) {
            }
        }
    }
    new v6();
    return Array;
}
const v15 = { type: "function" };
new Worker(f4, v15);
new Worker(f0, { type: "function" });
function f20() {
    return v15;
}
new Worker(f20, { type: "function" });
