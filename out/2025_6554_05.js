function poc(warmup_path) {
    let x = warmup_path ? {} : null;
    try {
        if (warmup_path) {
            let y = 1;
            delete x?.[y]?.a;
        } else {
            delete x?.[y]?.a;
        }
    } catch (e) {
    }
    let y = 1;
}

for (let i = 0; i < 25000; i++) {
    poc(true);
}

poc(false);