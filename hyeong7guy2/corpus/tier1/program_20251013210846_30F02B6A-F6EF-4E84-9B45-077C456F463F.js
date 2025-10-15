function f0(a1, a2) {
    a1.p1;
    a2.p2 = {};
    return a1.p1;
}
for (let i7 = 0; i7 < 100000; i7++) {
    const v15 = { p1: 1.1, p2: 1 };
    let obj2 = { p1: 2.2, p2: 2 };
    f0(v15, obj2);
}
let trigger_obj = { p2: 3 };
f0(trigger_obj, trigger_obj);
