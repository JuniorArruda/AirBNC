const types = []

types.push(7)
types.push(8)


for (var i = 0; i < 10; i++) {
    if (!types.includes(i))
        types.push(i)

}



console.log(types)