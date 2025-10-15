async function poc(trigger) {
    const p = Promise.all([0]);
    p.then(() => {});
    await Promise.resolve();
    p.then(() => {
        if (trigger) {
            new Error();
        }
    });
}

for (let i = 0; i < 25000; i++) {
    poc(false);
}
poc(true);