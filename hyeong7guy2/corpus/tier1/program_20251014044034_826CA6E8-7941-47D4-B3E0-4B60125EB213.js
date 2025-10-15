const v1 = new Int8Array();
function f2(a3) {
    for (let i5 = 0;
        i5 < 25000;
        (() => {
            for (let v9 = 0; v9 < 5; v9++) {
                v9 | v9;
            }
            ++i5;
        })()) {
        ([i5,i5]).push(1.1);
    }
    return v1;
}
Object.defineProperty(v1, "valueOf", { configurable: true, enumerable: true, value: f2 });
v1[8] = v1;
