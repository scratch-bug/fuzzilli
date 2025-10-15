const v0 = {};
function f2() {
}
const v3 = new Proxy(f2, v0);
const v4 = [-9007199254740991];
for (let v5 = 0; v5 < 500; v5++) {
    v4.concat.call(v3);
}
