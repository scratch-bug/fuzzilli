const v1 = new WeakSet();
const v7 = {
    set b(a3) {
        for (let v4 = 0; v4 < 25; v4++) {
            v1["p" + v4] = v4;
        }
    },
};
v7.b = v7;
