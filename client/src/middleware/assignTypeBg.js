function getBg(tp){
    const typelist=[
        {type:"electric",color:"warning"},
        {type:"water",color:"primary"},
        {type:"fire",color:"danger"}
    ]

    let color = "secondary"
 
    typelist.forEach(item=>{
        if(item.type.indexOf(tp) !== -1){
            color = item.color
        }
    })

    return color
 
}

export {getBg}