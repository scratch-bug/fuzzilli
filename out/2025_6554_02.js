function hot_func() {
    const obj = { prop: { a: 1 } };
    try {
        delete obj?.[y]?.a;
    } catch (e) {
    }
    let y = 'prop';
}

for (let i = 0; i < 10000; i++) {
    hot_func();
}