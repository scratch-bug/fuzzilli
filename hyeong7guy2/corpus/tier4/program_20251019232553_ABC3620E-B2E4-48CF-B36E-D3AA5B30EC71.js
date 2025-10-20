function f1() {
    try { Date.setUTCMinutes(); } catch (e) {}
    return Date;
}
const v5 = new Proxy(f1, {});
gc({ execution: "async" }).then(v5);
