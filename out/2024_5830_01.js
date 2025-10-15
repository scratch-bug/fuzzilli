function bug(o) {
    o.z = 1;
}

const trigger_obj = {};
for (let j = 0; j < 32; j++) {
    trigger_obj['p' + j] = 0;
}

let do_trigger = false;
for (let i = 0; i < 25000; i++) {
    const o = do_trigger ? trigger_obj : {};
    bug(o);
    if (i === 24998) {
        do_trigger = true;
    }
}

trigger_obj.p1;