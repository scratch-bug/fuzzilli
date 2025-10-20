const v0 = [-4294967297,-10,1366756234,-9007199254740992,-9,43336,-468741577,1532612221,2,257];
const v1 = {};
v1.toJSON = v0;
const v3 = JSON.stringify(v1);
const v4 = JSON.parse;
function f5() {
    return v4.call(JSON, v3, gc);
}
const v8 = { construct: f5 };
v8.construct(v8, f5, v3, JSON, v8);
