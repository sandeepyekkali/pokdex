// function getBg(tp){
//     const typelist=[
//         {type:"electric",color:"warning"},
//         {type:"water",color:"primary"},
//         {type:"fire",color:"danger"}
//     ]

//     let color = "secondary"
 
//     typelist.forEach(item=>{
//         if(item.type.indexOf(tp) !== -1){
//             color = item.color
//         }
//     })

//     return color
 
// }

function getBg(tp){
    const typelist = {}
    typelist['electric'] = 'warning'
    typelist['water'] = 'primary'
    typelist['fire'] = 'danger'
    typelist['grass'] = 'success'
    typelist['flying'] = 'dark'

    let color = "secondary"

    if(typelist[tp]) color=typelist[tp]

     return color
}

export {getBg}