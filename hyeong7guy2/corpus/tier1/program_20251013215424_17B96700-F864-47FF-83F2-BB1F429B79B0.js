const v0 = class {
}
async function f2(a3, a4) {
    const v5 = a4.constructor;
    try { v5(a4); } catch (e) {}
    const v8 = Symbol.asyncDispose;
    const v10 = {
        [v8]() {
        },
    };
    await using v11 = v10;
}
f2(Int16Array, v0);
let v14 = undefined;
function f15() {
    Array(1048576);
}
f15();
const v20 = { next: f15 };
v14 = v20;
const t19 = v20.next;
t19();
