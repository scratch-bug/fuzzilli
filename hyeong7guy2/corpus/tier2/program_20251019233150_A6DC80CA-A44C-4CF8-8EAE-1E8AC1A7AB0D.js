const v1 = new Int32Array();
const v2 = v1.join(v1);
function f5() {
    return v2;
}
function f6() {
    const v8 = Temporal.ZonedDateTime;
    try { new v8(268435439n, "-16:00", v2); } catch (e) {}
    function f11() {
        return { done: true };
    }
    return { next: f11 };
}
const v15 = Symbol.iterator;
f5.bind(null, ...{ [v15]: f6 });
