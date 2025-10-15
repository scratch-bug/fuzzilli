function bug(target) {
    Object.assign(target, { a: 1 });
}

for (let i = 0; i < 25000; i++) {
    let obj = {};
    if (i === 24999) {
        Object.getOwnPropertySymbols(obj);
    }
    bug(obj);
}