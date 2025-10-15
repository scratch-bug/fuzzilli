class C0 {
}
for (let i2 = 0;
    (() => {
        const v4 = i2 < 20000;
        function f5(a6) {
            return a6;
        }
        const v8 = [f5];
        Reflect.apply(v8.map, v8, v8);
        return v4;
    })();
    i2++) {
}
