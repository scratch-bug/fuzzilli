function f0() {
}
const v1 = [22932,-2,256,2];
Object.defineProperty(v1, "has", { configurable: true, enumerable: true, value: f0 });
const v3 = new Proxy(v1, v1);
v3.indexOf();
