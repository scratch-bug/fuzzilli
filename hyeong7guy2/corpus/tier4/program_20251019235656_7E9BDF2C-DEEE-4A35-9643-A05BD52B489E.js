function f3() {
    return Array;
}
Array[0] = Proxy;
Reflect.set(Array, 2646);
Reflect.setPrototypeOf(f3, Array);
