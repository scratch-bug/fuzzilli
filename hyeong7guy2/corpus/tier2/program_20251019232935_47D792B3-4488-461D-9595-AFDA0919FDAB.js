function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = {
    next() {
        return { ...this };
    },
};
Object.defineProperty(v5, Symbol, { writable: true, enumerable: true, value: F0 });
v5.next();
