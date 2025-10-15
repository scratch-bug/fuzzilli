try { (-9007199254740991).normalize(); } catch (e) {}
function f3(a4, a5) {
}
for (let i7 = 0; i7 < 20000; i7++) {
    const v13 = {};
    const v16 = i7 % 2 ? v13 : Object;
    const v17 = {};
    f3(v16);
}
let victim = { a: 1.1 };
f3(victim, {});
