const v1 = Symbol.toPrimitive;
const v2 = {};
const v4 = {
    [v1]() {
    },
};
v4.h = v4;
Object.assign(v2, v4);
