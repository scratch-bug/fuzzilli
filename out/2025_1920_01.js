let trigger_flag = false;

class C {}
const P = new Proxy(C, {
    construct(target, args) {
        return Reflect.construct(target, args);
    }
});

function vuln() {
    const obj = new P();
    const arr = [1, 2, 3, 4];

    if (trigger_flag) {
        obj.p1 = 0;
        obj.p2 = 1.1;
    }

    if ((arr[0] + 1) % 1 !== 0) {
        let x = 1;
    }
}

for (let i = 0; i < 25000; i++) {
    vuln();
}
trigger_flag = true;
vuln();