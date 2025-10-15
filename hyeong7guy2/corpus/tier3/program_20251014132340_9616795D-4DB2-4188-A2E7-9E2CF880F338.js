function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = [F0,/(a)a\b!+/vgsd];
const v4 = {};
const v6 = new Proxy(v3, v4);
v6.concat(v4);
for (let i10 = 0, i11 = 10; i11; i11--) {
}
