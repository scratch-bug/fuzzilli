function hot_function(array, value) {
    array.push(value);
    new Array(1);
}

for (let i = 0; i < 20000; ++i) {
    let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    a.length = 16;
    hot_function(a, 17);
}

let trigger_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
trigger_array.length = 16;

const provider = {
    get p() {
        new Array(0x40000);
        return 1.1;
    }
};

hot_function(trigger_array, provider.p);