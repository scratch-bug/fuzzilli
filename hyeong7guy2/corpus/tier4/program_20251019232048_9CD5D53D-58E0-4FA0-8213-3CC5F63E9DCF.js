let v1 = Symbol.bind();
class C2 {
}
C2.toString = v1;
for (let i4 = 0; i4 < 20000; ++i4) {
    C2["toString"]();
}
