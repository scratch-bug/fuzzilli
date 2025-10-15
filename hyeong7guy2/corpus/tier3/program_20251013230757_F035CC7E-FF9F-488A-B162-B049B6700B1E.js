const v0 = [-7,5,7];
const v1 = class {
}
function F2() {
    if (!new.target) { throw 'must be called with new'; }
    new v1(...v0, v1);
}
new F2();
new F2();
