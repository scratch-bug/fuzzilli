const v1 = new Map();
const v2 = {};
v2.a = v1;
for (let i4 = 0; i4 < 25000; ++i4) {
    v2.a;
}
