function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = {
    o(a4, a5) {
        try { this.o(); } catch (e) {}
        super[F0] = a5;
        return a4;
    },
};
v7.o();
