let trigger = false;
const handler = {
    set(target, prop, value, receiver) {
        if (trigger) {
            delete target.y;
        }
        return Reflect.set(target, prop, value, receiver);
    }
};

for (let i = 0; i < 25000; i++) {
    const o = { y: 1 };
    const p = new Proxy(o, handler);
    p.x = 1;
}

trigger = true;
const o = { y: 1 };
const p = new Proxy(o, handler);
p.z = 2;