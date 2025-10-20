function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
const v4 = [v2];
let v5 = 0;
v5--;
const v7 = v5 & v5;
v7 >>> v7;
const v10 = Symbol.iterator;
const v12 = {
    [v10]() {
    },
};
const v14 = !false;
const v15 = v14 && v14;
let v16 = 387551742n;
v16--;
const v19 = Temporal.Instant;
function f20() {
    return v3;
}
const v21 = new v19(v16);
try { v21.since(); } catch (e) {}
function F23(a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v4;
}
const v27 = new F23(v3);
const v28 = v27.constructor;
const v29 = new v28(v28, v5);
const v30 = v29 ?? v29;
function f31(a32, a33, a34) {
    const v35 = Temporal.PlainMonthDay;
    const v38 = WebAssembly.compile(v2);
    v38.toString = f31;
    v38.catch(Array);
    const v40 = {};
    v40.monthCode = v38;
    v35.from(v40);
    return v40;
}
try { f31(v30, v15, v29); } catch (e) {}
