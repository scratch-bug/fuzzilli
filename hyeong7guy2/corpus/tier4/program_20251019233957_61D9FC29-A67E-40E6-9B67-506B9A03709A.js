const v2 = String.prototype.concat;
for (let i4 = 0;
    i4 < 20000;
    (() => {
        let v8 = i4++;
        v8--;
        v2.apply(v8);
    })()) {
}
