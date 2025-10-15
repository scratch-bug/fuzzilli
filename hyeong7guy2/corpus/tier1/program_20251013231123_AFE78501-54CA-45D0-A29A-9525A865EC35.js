const v1 = [1];
Object.defineProperty(v1, 16, { value: v1 });
v1.length = 16;
v1.push();
