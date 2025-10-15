function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = class {
    }
    const t4 = Symbol.iterator.description.__proto__;
    t4[64] >>= v3;
}
new F0();
new F0();
