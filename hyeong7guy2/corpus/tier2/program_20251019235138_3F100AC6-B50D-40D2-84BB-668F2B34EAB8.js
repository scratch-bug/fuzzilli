const v2 = new Uint8Array(720);
const v4 = v2.join();
function f6() {
    return v4;
}
function f7() {
    const v9 = Temporal.ZonedDateTime;
    try { new v9(268435439n, "-16:00", v4); } catch (e) {}
    function f12() {
        return { done: true };
    }
    return { next: f12 };
}
const v16 = Symbol.iterator;
f6.bind(v2, ...{ [v16]: f7 });
