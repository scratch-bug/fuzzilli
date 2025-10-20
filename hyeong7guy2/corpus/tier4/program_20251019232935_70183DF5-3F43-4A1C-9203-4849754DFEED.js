const v1 = new WeakSet();
Array[Symbol.asyncIterator] = v1;
Array.fromAsync(Array).then(Array, Array);
