const v1 = Array(Array);
function f2(a3) {
    return a3;
}
for (let i5 = 0;
    i5 < 20000;
    (() => {
        ++i5;
        for (let v10 = 0; v10 < 5; v10++) {
            const v11 = {
                construct: Array,
                getOwnPropertyDescriptor: f2,
                getPrototypeOf: f2,
                has: Array,
                ownKeys: f2,
            };
            new Proxy(v1, v11);
        }
    })()) {
}
