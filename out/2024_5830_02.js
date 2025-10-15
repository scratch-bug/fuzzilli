function hot_function(o) {
    o.p = 1;
}

const warm_proto = {
    get p() {
        return 0;
    }
};

for (let i = 0; i < 10000; i++) {
    const o = Object.create(warm_proto);
    hot_function(o);
}

const trigger_proto = {
    get p() {
        for (let i = 0; i < 200; i++) {
            this['prop' + i] = i;
        }
        return 0;
    }
};

const trigger_o = Object.create(trigger_proto);
hot_function(trigger_o);