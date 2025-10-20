for (let i2 = 0, i3 = 10; i3; i3--) {
}
function* f10(a11, a12) {
    yield* "valueOf";
    return f10;
}
const v13 = f10("valueOf", "valueOf");
v13.next(v13);
try { v13.throw(); } catch (e) {}
