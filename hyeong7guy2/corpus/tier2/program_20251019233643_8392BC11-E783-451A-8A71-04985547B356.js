const v0 = [-1.0,-4.0];
for (let v1 = 0; v1 < 5; v1++) {
    const v2 = {};
    const v3 = { p1: v1, p2: v2 };
}
const v5 = { p1: 1.1 };
Object.defineProperty(v5, "toJSON", { enumerable: true, value: v0 });
const v9 = [JSON.stringify(v5)];
Reflect.apply(JSON.parse, v5, v9);
