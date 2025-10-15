const v3 = Symbol.iterator;
const v12 = {
    [v3]() {
        let v5 = 10;
        const v11 = {
            next() {
                v5--;
                const v9 = v5 == 0;
                return { done: v9 };
            },
        };
        return v11;
    },
};
class C13 extends Int32Array {
}
const v14 = new C13(v12);
v14.fill(-128);
