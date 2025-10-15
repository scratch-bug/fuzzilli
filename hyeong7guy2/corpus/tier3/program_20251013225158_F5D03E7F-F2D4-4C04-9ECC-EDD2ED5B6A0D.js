const v5 = class {
}
new v5();
function F7(a9) {
    if (!new.target) { throw 'must be called with new'; }
}
new F7();
const v11 = {};
class C13 {
    [Map](a15, a16, a17, a18) {
    }
}
const v19 = {};
for (let i21 = 0; i21 < 20000; i21++) {
    const v28 = { a: 1 };
    const v31 = i21 / 16 ? v28 : v19;
    v31.toISOString = {};
}
const v35 = {};
const v36 = {};
