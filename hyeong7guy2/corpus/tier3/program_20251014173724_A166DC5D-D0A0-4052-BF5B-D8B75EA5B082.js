const v1 = Symbol.iterator;
for (let i3 = 0; i3 < 1000; i3++) {
    const v9 = [v1,v1,v1,v1];
    v9.then = Symbol;
    async function f10() {
        return await v9;
    }
    f10();
}
const t9 = 10000;
t9[4294967296] = 10000;
