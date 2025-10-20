const v0 = {};
function f2() {
    return v0;
}
const v3 = new Proxy(f2, v0);
for (let v4 = 0; v4 < 5; v4++) {
    const v5 = [f2,f2,f2,f2];
    v3.prototype = v3;
    Reflect.construct(v3, v5);
}
