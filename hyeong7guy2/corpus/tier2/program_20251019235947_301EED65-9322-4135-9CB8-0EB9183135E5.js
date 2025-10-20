const v0 = {};
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = Intl.DateTimeFormat;
    const v12 = v7("os", { numberingSystem: "hanidec" }).format();
    function F13() {
        if (!new.target) { throw 'must be called with new'; }
        this.d = -1024;
    }
    const v16 = new F13();
    function F17(a19, a20, a21) {
        if (!new.target) { throw 'must be called with new'; }
        Object.defineProperty(this, "withCalendar", { writable: true, configurable: true, enumerable: true, value: -23399 });
    }
    const v22 = /(?<a>)/dusygmi;
    const v23 = new F17();
    v23.toJSON = v0;
    const v24 = [v22,v16,v23];
    const v25 = { c: v24 };
    v25.toJSON = v12;
    const v27 = JSON.stringify(v25);
    const v28 = JSON.parse;
    v28.apply(JSON, [v27]);
}
new F1(v0, F1);
for (let i34 = 536870889, i35 = 10; i35; i35--) {
}
