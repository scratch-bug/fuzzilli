class C1 {
}
const v2 = new C1();
v2.toJSON = 3315;
const v7 = {
    construct(a4, a5) {
        return "🙌🏿";
    },
};
JSON.stringify(v2, v2, v7.construct());
