add_unit()

function add_unit(){
    let unit_arr = [
        {
            name: 'present continuous'
        },
        {
            name: 'present simple'
        }
    ]
    const container = document.querySelector(".container")
    for(i=0;i<unit_arr.length;i++){
        const div = document.createElement('div')
        div.classList.add('units_div')
        div.innerHTML = `
            <a href="${'units/unit' + [i+1] + '.html'}">
            <div class="unit_block">
                <div class="unit_block_square">${'unit' + [i+1]}</div>
                <div class="unit_block_name">${unit_arr[i].name}</div>
            </div>
        </a>
        `
        container.append(div)
    }
    

}


