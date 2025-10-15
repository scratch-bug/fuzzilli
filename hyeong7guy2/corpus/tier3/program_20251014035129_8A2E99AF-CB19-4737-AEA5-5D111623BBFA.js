const v2 = new Uint32Array(63);
[Uint32Array,Uint32Array,v2,v2,v2];
const v5 = Symbol.iterator;
const v14 = {
    [v5]() {
        let v7 = 10;
        const v13 = {
            next() {
                v7--;
                const v11 = v7 == 0;
                return { done: v11, value: v7 };
            },
        };
        return v13;
    },
};
try { Int16Array.apply(Int16Array, v2); } catch (e) {}
const v18 = new Int16Array(10);
for (let v21 = 0; v21 < 50; v21++) {
    const v22 = class {
    }
    let v23;
    try { v23 = v22(); } catch (e) {}
    v23 ?? v23;
    try { v22(); } catch (e) {}
    let v26;
    try { v26 = v22.constructor(); } catch (e) {}
    try { v26.call(v18); } catch (e) {}
    let v29;
    try { v29 = new Symbol(); } catch (e) {}
    v29 ?? v29;
    const v32 = eval?.constructor;
    try { new v32(v21); } catch (e) {}
    const v34 = eval();
    const v35 = v34 ?? v34;
    v35 ?? v35;
}
