const v2 = {
    [1]() {
    },
};
const v4 = Object.preventExtensions(v2);
v4[1] = v4;
