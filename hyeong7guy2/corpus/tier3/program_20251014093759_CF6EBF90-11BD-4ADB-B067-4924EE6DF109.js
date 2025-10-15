function f1(a2, a3, a4, a5) {
    const v6 = { __proto__: a2 };
    v6.a = v6;
    return f1;
}
f1(null);
