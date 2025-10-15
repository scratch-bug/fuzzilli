function hot_func(arr, val) {
    arr.push(val);
}

for (let i = 0; i < 10000; ++i) {
    let a = [1.1, 2.2];
    hot_func(a, 3.3);
}

let trigger_array = [1.1, 2.2];
let provider = {
    get p() {
        trigger_array[0] = {};
        return 4.4;
    }
};

hot_func(trigger_array, provider.p);