const v1 = 1000 + 1000;
const v3 = {
    [v1]() {
    },
};
Object.assign(v1, v3);
