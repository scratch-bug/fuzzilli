function f0(a1, a2, a3) {
    const v6 = new Proxy(a1, {});
    class C7 {
    }
    C7.__proto__ = v6;
    return f0;
}
new Promise(f0);
