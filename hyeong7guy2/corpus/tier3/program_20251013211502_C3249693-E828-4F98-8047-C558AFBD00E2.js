function bug(a1) {
    Object.assign(a1, { a: 1 });
}
for (let i7 = 0; i7 < 25000; i7++) {
    let obj = {};
    if (i7 === 24999) {
        Object.getOwnPropertySymbols(obj);
    }
}
