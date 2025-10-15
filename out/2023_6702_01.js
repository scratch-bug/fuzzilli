async function poc() {
    await Promise.race([Promise.resolve(0), new Promise(() => {})]);
    new Error();
}

for (let i = 0; i < 25000; i++) {
    poc();
}