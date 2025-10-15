function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -9223372036854775807;
    this.g = -9223372036854775807;
}
new F0();
class C4 extends F0 {
}
for (let i6 = 0;
    i6 < 20000;
    (() => {
        i6++;
        new C4();
    })()) {
    i6 | i6;
}
