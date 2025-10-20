let v2 = 1073741823;
v2++;
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const t4 = Temporal.Duration;
    const v11 = new t4(7, v2, 1319652972, 1786, 1319652972, v2, v2);
    v11.with(v11);
}
new F5(v2, F5);
