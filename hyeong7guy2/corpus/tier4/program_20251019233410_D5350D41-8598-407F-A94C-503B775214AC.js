const v2 = {
    [Symbol]() {
    },
};
class C3 {
}
for (let i5 = 0; i5 < 25000;) {
    for (let v10 = 0; v10 < 5; v10++) {
        for (let [i14, i15] = (() => {
                let v12 = 10;
                v12++;
                return [0, v12];
            })();
            i14;
            ) {
        }
        ++i5;
    }
}
