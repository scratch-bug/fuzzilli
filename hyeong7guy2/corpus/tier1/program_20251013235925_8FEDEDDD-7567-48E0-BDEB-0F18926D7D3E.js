Object.defineProperty(Symbol, 0, { writable: true, enumerable: true, value: Set });
for (let i3 = 0;
    (() => {
        Symbol[0] = i3;
        return i3 < 20000;
    })();
    i3++) {
}
