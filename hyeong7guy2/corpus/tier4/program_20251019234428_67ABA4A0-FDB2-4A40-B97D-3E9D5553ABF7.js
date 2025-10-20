const v1 = class extends Map {
}
const v2 = new v1();
for (let i4 = 0;
    i4 != 20000;
    (() => {
        let v8 = i4++;
        ({"f":v8,"size":v8,} = v2);
    })()) {
}
