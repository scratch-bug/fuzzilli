class C0 {
}
const v1 = class extends C0 {
}
const v3 = [-65536,1073741824,512,12];
function f4(a5) {
    function f6() {
    }
    typeof f6 === "object";
    for (let v10 = 0; v10 < 250; v10++) {
    }
    const v14 = {
        [v1](a12, a13) {
            super[v1] = a12;
        },
        __proto__: Symbol,
    };
    return f4;
}
const v17 = { type: "function" };
Object.defineProperty(v17, "arguments", { writable: true, enumerable: true, value: v3 });
new Worker(f4, v17);
