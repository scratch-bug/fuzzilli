function f1() {
    return f1;
}
const v3 = new Proxy(f1, {});
const v4 = { ...v3 };
