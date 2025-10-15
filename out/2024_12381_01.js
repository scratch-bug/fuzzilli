function hot_func(array) {
    array.push(1);
}

class A extends Array {}
class B extends Array {}

for (let i = 0; i < 25000; ++i) {
    hot_func(new A());
}

hot_func(new B());