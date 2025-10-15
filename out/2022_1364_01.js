function poc(p) {
    function get_args() {
        return arguments;
    }

    if (p) {
    }

    const args1 = get_args();
    const args2 = get_args(1.1, 2.2, 3.3);

    return args1[0];
}

for (let i = 0; i < 10000; ++i) {
    poc(true);
}

poc(true);