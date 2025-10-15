let toggle = false;

function poc() {
    const target = {};
    if (toggle) {
        new Map().set(target, 1);
    }
    Object.assign(target, {});
}

for (let i = 0; i < 25000; i++) {
    poc();
}

toggle = true;
poc();