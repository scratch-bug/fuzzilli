function f0() {
    return f0;
}
function f3() {
    return f0;
}
function f4() {
    return { get: f0, a: 3462, a: -59723.628242762876 };
}
const v6 = { construct: f4 };
const v8 = new Proxy(f3, v6);
new v8(v8, v6, Proxy);
