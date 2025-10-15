function hot_func(is_trigger) {
    let val = { p: 42 };
    let i = 0;

    do {
        if (is_trigger) {
            val = 1.1;
        }
    } while (i++ < 0);

    return val.p;
}

for (let i = 0; i < 100000; ++i) {
    hot_func(false);
}

hot_func(true);