function f2() {
    return -17377n;
}
const v5 = new Proxy(Int8Array, { set: f2 });
v5.c = v5;
