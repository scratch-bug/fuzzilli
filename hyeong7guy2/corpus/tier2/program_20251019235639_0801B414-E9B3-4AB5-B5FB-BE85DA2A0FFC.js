function f0(a1) {
}
const v5 = new Proxy(Array, { getOwnPropertyDescriptor: f0 });
v5.bind();
