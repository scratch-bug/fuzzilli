function f1() {
    Object.defineProperty(d8, "toString", { configurable: true, value: f1 });
    with (d8) {
        const v4 = test.FastCAPI;
        new v4(v4, d8, test);
        const v6 = test.FastCAPI;
        v6.prototype = v6;
        const v7 = new v6();
        v7.call_to_number(d8);
    }
    return d8;
}
try { f1(); } catch (e) {}
new Float64Array(536870912);
