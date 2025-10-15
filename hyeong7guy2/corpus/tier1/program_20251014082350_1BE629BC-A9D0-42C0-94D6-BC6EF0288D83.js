const v1 = [];
v1[12] = 10;
Object.defineProperty(v1, 16, { value: v1 });
v1.concat();
