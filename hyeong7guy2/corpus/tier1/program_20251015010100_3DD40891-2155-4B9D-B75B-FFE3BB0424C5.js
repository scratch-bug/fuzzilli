function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -12;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a9;
    this.h = -2791n;
}
new F7(v3, v4);
new F7(v4, v4);
const v13 = new F7(v4, v5);
function F14(a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v13;
}
new F14(v5, v13, v3);
for (const v49 in [0,97,115,109,1,0,2,0,-256,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4]) {
    gc(gc);
    const v53 = new Int32Array();
    const v58 = {
        construct(a55, a56) {
            v53.p1;
        },
    };
}
