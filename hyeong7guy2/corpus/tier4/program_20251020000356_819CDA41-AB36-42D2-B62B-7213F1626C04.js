const v2 = class extends Int16Array {
}
const v3 = class extends v2 {
}
const v4 = new v3();
for (let v6 = 0; v6 < 5; v6++) {
    v4.copyWithin(v6, 0, 2186);
}
