function f0(a1) {
    const v2 = /a\Sa(?:b)ta?/dsgvi;
    v2.test();
    return v2;
}
const v7 = new Worker(f0, { type: "function" });
v7.getMessage();
