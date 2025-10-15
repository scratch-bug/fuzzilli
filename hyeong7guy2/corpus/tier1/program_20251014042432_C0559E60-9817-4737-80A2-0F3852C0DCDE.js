function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = F0.prototype;
Object.defineProperty(v4, "toJSON", { configurable: true, value: v4 });
