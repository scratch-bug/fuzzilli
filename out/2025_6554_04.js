function poc(is_warmup) {
    const x = { p: { a: 42 } };
    let y;

    if (is_warmup) {
        y = 'p';
        delete x?.[y]?.a;
    } else {
        delete x?.[y]?.a;
    }
}

for (let i = 0; i < 20000; i++) {
    poc(true);
}

poc(false);