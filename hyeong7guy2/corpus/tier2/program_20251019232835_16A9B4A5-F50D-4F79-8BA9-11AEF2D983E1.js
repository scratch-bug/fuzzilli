function f0() {
    return f0;
}
const v1 = class extends f0 {
}
class C2 extends v1 {
}
const v3 = /(?<a>)/dusygmi;
const v8 = {
    [C2](a5, a6, a7) {
    },
    arguments: v3,
};
const v10 = JSON.stringify(v8);
const v11 = JSON.parse;
const v12 = [v10];
const v16 = {
    construct(a14, a15) {
        return a14;
    },
};
v11.apply(JSON, v12);
