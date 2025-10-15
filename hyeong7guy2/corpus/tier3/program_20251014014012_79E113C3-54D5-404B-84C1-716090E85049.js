function f0() {
    return f0;
}
const v1 = {};
v1.get = f0;
function f3() {
    return v1;
}
const v4 = new Proxy(f3, v1);
for (let v5 = 0; v5 < 5; v5++) {
    v4.name;
}
