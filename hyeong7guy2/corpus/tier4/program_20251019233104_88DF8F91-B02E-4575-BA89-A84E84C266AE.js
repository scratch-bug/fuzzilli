const v1 = [123];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v1;
}
const v6 = new F2();
JSON.toJSON = v6;
JSON.stringify(JSON, 3, 3);
