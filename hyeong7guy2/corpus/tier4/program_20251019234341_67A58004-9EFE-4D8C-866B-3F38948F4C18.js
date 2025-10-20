const v2 = Float64Array.from(WeakSet);
class C4 {
    [v2] = 1073741824;
}
const v5 = new C4();
const v8 = {
    ...v5,
    set f(a7) {
    },
};
JSON.stringify(v8);
