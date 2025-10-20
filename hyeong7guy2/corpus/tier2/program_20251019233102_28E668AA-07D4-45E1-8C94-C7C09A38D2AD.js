const v1 = [-1.0,-4.0];
const v4 = {
    get g() {
        return 0;
    },
    get e() {
    },
};
Object.defineProperty(v4, "toJSON", { enumerable: true, value: v1 });
const v6 = JSON.stringify(v4);
const v7 = JSON.parse;
v7.apply(JSON, [v6]);
