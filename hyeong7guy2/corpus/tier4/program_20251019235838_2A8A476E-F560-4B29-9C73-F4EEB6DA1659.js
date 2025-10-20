function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = F0.isPrototypeOf();
with (d8) {
    const v5 = test.FastCAPI;
    const v6 = new v5(v5);
    v6.call_to_number(v2);
}
