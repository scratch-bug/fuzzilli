function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    static {
        try {
            this.any();
        } catch(e6) {
            e6.stack;
        }
    }
}
[110];
