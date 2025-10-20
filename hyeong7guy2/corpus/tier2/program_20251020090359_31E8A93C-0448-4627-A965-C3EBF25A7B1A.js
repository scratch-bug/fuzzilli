let v0 = 9;
let v1 = 1.0497201825143915e+308;
let v2 = "127";
const v4 = new Int8Array(v2);
class C5 {
}
function f6() {
    ({"buffer":v0,"byteLength":C5,"length":v2,...v1} = v4);
    return v1;
}
const v7 = {};
v7.toJSON = f6;
const v9 = JSON.stringify(v7);
const v10 = `
    parseInt("und🤯efined");
`;
const v19 = {
    toString(a15, a16, a17, a18) {
        return this;
    },
    type: v10,
    Module: v9,
};
JSON.stringify(v19);
