const v0 = class {
}
const v1 = new v0();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a4;
}
const v6 = new F2(v1);
JSON.toJSON = v6;
JSON.stringify(JSON, 3, 3);
