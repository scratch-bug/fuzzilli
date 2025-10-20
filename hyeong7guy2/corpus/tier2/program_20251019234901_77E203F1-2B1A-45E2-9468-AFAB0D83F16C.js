function f0() {
    d8.serializer.serialize();
    Object.defineProperty(d8, "toString", { configurable: true, value: f0 });
    with (d8) {
        const t4 = test.FastCAPI;
        const v6 = new t4();
        v6.call_to_number(d8);
    }
    return f0;
}
try { f0(); } catch (e) {}
