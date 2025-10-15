const P = Proxy;
for (let i3 = 0;
    i3 < 25000;
    (() => {
        ++i3;
        const v9 = !P;
        Math.acosh();
        !v9;
    })()) {
}
