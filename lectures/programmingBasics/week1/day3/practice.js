let desk = [
    {
        'location': 'shelf#1', 'items': [
            {
                'item': 'lego flower', 'count': 2, 'type': [
                    {
                        'name': 'tulip', 'colors': [
                            'red', 'green', 'white'
                        ]
                    },
                    {
                        'name': 'daisy', 'colors': [
                            'yellow', 'white', 'green'
                        ]
                    }
                ]
            },
            {
                'item': 'frog', 'count': 2, 'type': [
                    {
                        'name': 'toy', 'colors': [
                            'green'
                        ]
                    }
                ]
            }
        ]
    },
    {
        'location': 'undershelf#1', 'items': [
            {
                'item': 'beeSquishi', 'count': 1, 'type': [
                    {
                        'name': 'Squishi toy', 'colors': [
                            'yellow', 'black', 'white', 'pink'
                        ]
                    }
                ]
            }
        ]
    },
    {
        'location': 'main desk', 'items': [
            {
                'item': 'monitors', 'count': 2, 'type': [
                    {
                        'name': 'viotek', 'colors': [
                            'black'
                        ]
                    },
                    {
                        'name': 'imac', 'colors': [
                            'grey', 'mint green'
                        ]
                    }
                ]
            }
        ]
    }
]
// Print whole array

console.log(desk);

// Print 1 location

console.log(desk[2]);


// Print 1 location name

console.log(desk[2].location);

// Print 1 location items

console.log(desk[0].items);

// Print item object

console.log(desk[0].items[1]);

// print the item object count

console.log(desk[0].items[0].count);

// print the item object name

console.log(desk[1].items[0].type[0].name);

// print the colors of the object

console.log(desk[1].items[0].type[0].colors);

// print 1 color of the item

console.log(desk[1].item[0].type[0].colors[0]);

// console.log('**********************************************************')

// Print the names of all the locations

for(let i =0; i < desk.length; i++) {
    console.log(desk[i].location)
}

// console.log('**********************************************************')

// print the array of types for any item that has a count more than 1
/*
for(let i = 0; i < desk.length; i++) {
    let arr1 = desk[i].items;
    console.log[arr1]
    for(let j = 0; j < arr1.length; j++) {
        let obj3 = arr1[j].count;
        console.log(arr1[j].type);
        if(obj3)
    }
}
*/
// console.log('**********************************************************')

// Print all the item names if they have a color of white in the list of colors