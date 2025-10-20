for (let v0 = 0; v0 < 250; v0++) {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new Int32Array(256);
const v8 = {};
v8.toJSON = v7;
const v10 = JSON.stringify(v8);
const v11 = JSON.parse;
function f12() {
    v11.call(JSON, v10, gc);
    return gc;
}
const v15 = { construct: f12 };
v15.construct(v7, v15, F1, v10);
