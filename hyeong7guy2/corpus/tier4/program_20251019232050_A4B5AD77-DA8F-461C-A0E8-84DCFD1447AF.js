function f1() {
    return ("🙌🏿").charAt();
}
f1[Symbol.toPrimitive] = f1;
const v6 = /\p{Script_Extensions=Greek}?/dsgmv;
v6.e = "function";
String.prototype.replace.call(f1, v6);
for (let i13 = 0, i14 = 10; i14; i14--) {
}
