function f2(a3, a4) {
    return WeakSet;
}
Object.defineProperty(Array, Symbol.iterator, { writable: true, configurable: true, value: f2 });
Array.fromAsync(Array).then(Array, Array);
