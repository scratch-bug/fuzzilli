function f0() {
    Object.defineProperty(d8, "toString", { configurable: true, value: f0 });
    with (d8) {
        const v3 = test.FastCAPI;
        const v4 = new v3(v3);
        v4.add_32bit_int();
        v4.call_to_number(d8);
    }
    return d8;
}
try { f0(); } catch (e) {}
