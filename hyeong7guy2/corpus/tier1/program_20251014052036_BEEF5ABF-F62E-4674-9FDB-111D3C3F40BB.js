/Va{}s\1\2(a(?:\1(b\1\2))\2)\1(x)(x)(x)\3*\c!(?:ab)|cdeFa\Sc?/gyd;
const v14 = class extends Array {
}
function f15() {
    return 4;
}
function f16() {
    const v17 = { a: v14 };
    delete v17.a;
    return v17;
}
const v21 = new Proxy(f15, { construct: f16 });
const v22 = new v21();
v22.e = v22;
v22.b = v22;
v22.d = 9;
