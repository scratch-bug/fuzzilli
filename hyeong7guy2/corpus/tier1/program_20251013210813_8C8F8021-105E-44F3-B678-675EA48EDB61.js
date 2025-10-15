let trigger = false;
const v10 = {
    set(a3, a4, a5, a6) {
        if (trigger) {
            delete a3.y;
        }
        return Reflect.set(a3, a4, a5, a6);
    },
};
const handler = v10;
for (let i13 = 0; i13 < 25000; i13++) {
    const o = { y: 1 };
    const v23 = new Proxy(o, handler);
    const p = v23;
    p.x = 1;
}
trigger = true;
const o = { y: 1 };
const v31 = new Proxy(o, handler);
const p = v31;
p.z = 2;
