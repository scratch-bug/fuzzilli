async function trigger(create_error) {
    await Promise.all([1]);
    if (create_error) {
        new Error();
    }
}

for (let i = 0; i < 100; i++) {
    trigger(false);
}
trigger(true);