function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
const v4 = new F0();
const v5 = [v3];
try { Symbol.keyFor(v2); } catch (e) {}
const v8 = Symbol.iterator;
const v10 = {
    [v8]() {
    },
};
const v12 = !false;
v12 && v12;
const v16 = Temporal.Instant;
function f17() {
    return f17;
}
const v18 = new v16(387551742n);
try { v18.add(); } catch (e) {}
function F20(a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v5;
}
const v24 = new F20(v4);
const t26 = v24.constructor;
new t26();
function f27(a28, a29, a30) {
    const v31 = Temporal.PlainMonthDay;
    const v34 = WebAssembly.compile();
    v34.toString = f27;
    v34.catch(Array);
    const v36 = {};
    v36.monthCode = v34;
    v31.from(v36);
    return v3;
}
try { f27(); } catch (e) {}
