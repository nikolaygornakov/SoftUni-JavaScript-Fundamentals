function unique(input){
    let arrays = new Map()
    for (let line of input) {
        let array = JSON.parse(line).map(Number).sort((a, b) => b - a);
        let toStore = `[${array.join(', ')}]`;
        if (!arrays.has(toStore))
            arrays.set(toStore, array.length);
    }

    console.log([...arrays.keys()].sort((a, b) => arrays.get(a) -arrays.get(b)).join('\n'));
}

unique(["[-3, -2, -1, 0, 1, 2, 3, 4]","[10, 1, -17, 0, 2, 13]","[4, -3, 3, -2, 2, -1, 1, 0]"])