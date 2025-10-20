const v2 = new Int32Array(256);
const v3 = {};
v3.toJSON = v2;
const v5 = JSON.stringify(v3);
const v6 = JSON.parse;
function f7() {
    v6.call(JSON, v5, gc);
    return JSON;
}
({ construct: f7 }).construct();
