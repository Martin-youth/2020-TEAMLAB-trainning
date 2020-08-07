'use script'
let types = ['tshirt', 'pants', 'skirt'];
let gender = ['male','female'];
let sizes = ['small','medium','large'];
let colors = ['blue', 'yellow', 'pink'];

const item_list = []

function randomItem(result) {
    return result[Math.floor(Math.random() *result.length)];

}
for (let s of sizes) {
    for (let c of colors) {
        for (let t of types) {
            if (c === 'blue') {
                     switch (t) {
                        case 'tshirt':
                            item_list.push({type : t, size : s, color : c, gender : randomItem(gender), image : 'img/blue_t.png'});
                            break;
                        case 'pants':
                            item_list.push({type : t, size : s, color : c, gender : randomItem(gender), image : 'img/blue_p.png'});
                            break;
                        case 'skirt':
                            item_list.push({type : t, size : s, color : c, gender : 'female', image : 'img/blue_s.png'});
                            break;
                     }
                    }

            if (c === 'yellow') {
                     switch (t) {
                        case 'tshirt':
                            item_list.push({type : t, size : s, color : c, gender : randomItem(gender), image : 'img/yellow_t.png'});
                            break;
                        case 'pants':
                            item_list.push({type : t, size : s, color : c, gender : randomItem(gender), image : 'img/yellow_p.png'});
                            break;
                        case 'skirt':
                            item_list.push({type : t, size : s, color : c, gender : 'female', image : 'img/yellow_s.png'});
                            break;
                     }
                    }
                
            if (c === 'pink')
                     switch (t) {
                        case 'tshirt':
                           item_list.push({type : t, size : s, color : c, gender : randomItem(gender), image : 'img/pink_t.png'});
                           break;
                        case 'pants':
                           item_list.push({type : t, size : s, color : c, gender : randomItem(gender), image : 'img/pink_p.png'});
                           break;
                        case 'skirt':
                           item_list.push({type : t, size : s, color : c, gender : 'female', image : 'img/pink_s.png'});
                           break;
                    }
                                 
        }   
    }
}
all_items = Array.from(new Set(item_list));

function showItems(items){
    const container = document.querySelector('.items');
    const mapping = items.map(item =>
        `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item_image"> &nbsp ${item.gender} & ${item.size}
    </li>`
    );
    container.innerHTML = mapping.join('');
}
function SelectType(id) {
    return all_items.filter((item, index) =>
 (item.type === id || (item.color === id))) ;
}

