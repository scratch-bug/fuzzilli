/Va{}s\1\2(a(?:\1(b\1\2))\2)\1(x)(x)(x)\3*\c!(?:ab)|cdeFa\Sc?/gyd;
const v3 = class extends Array {
}
function f4() {
    return 129;
}
function f5() {
    const v6 = { a: v3 };
    delete v6.a;
    return v6;
}
const v10 = new Proxy(f4, { construct: f5 });
const v11 = new v10(v10, 129, v10, Array, Array);
v11.d = v11;
