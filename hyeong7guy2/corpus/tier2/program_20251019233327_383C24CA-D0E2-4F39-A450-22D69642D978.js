function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = Intl.DateTimeFormat;
    const v13 = v8("os", { numberingSystem: "hanidec" }).format();
    function F14() {
        if (!new.target) { throw 'must be called with new'; }
        this[1] ||= -1024;
    }
    const v17 = new F14();
    const v18 = /(?<a>)/dusygmi;
    v18.toJSON = v2;
    const v19 = [v18,v17];
    const v20 = { c: v19 };
    v20.toJSON = v13;
    const v22 = JSON.stringify(v20);
    const v23 = JSON.parse;
    v23.apply(JSON, [v22]);
}
new F3();
for (let i29 = 536870889, i30 = 10; i30; i30--) {
}
