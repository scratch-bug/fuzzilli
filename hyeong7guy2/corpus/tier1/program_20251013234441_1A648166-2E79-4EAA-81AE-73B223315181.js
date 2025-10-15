const v1 = class {
}
function f2() {
}
function f3() {
    function f4() {
        Array(1048576);
        for (let i9 = 0, i10 = v1; i10; i9++, i10--) {
        }
        const v19 = {};
        v19.done = v19;
        return v19;
    }
    return { next: f4 };
}
const v22 = Symbol.iterator;
const v29 = f2.bind(null, ...{ [v22]: f3 });
v29.e = v29;
function f30(a31) {
    const v35 = {};
    v35.h = 127;
    v35.a = f2;
}
const v38 = [];
new Worker(f30, { arguments: v38, type: "function" });
v29.name = v29;
