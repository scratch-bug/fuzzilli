const v0 = class {
}
const v1 = v0 !== v0;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const t5 = Temporal.PlainTime;
    new t5(a5, a4, a4, a4, a4, v1);
}
new F2();
