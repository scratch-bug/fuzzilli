const v1 = {
    get a() {
        return this;
    },
};
for (let i3 = 0; i3 < 20000; i3++) {
    const v9 = {};
    const v12 = i3 && 2 ? v9 : v1;
    v12.a = v12;
}
