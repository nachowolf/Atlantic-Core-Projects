module.exports = function(){

    function route(input){

if(input === 'home'){
    return input
}
else if(input === 'services'){
    return input
}
else if(input === 'projects'){
    return input
}
else if(input === 'gallery'){
    return input
}
else if(input === 'aboutUs'){
    return input
}
else if(input === 'contactUs'){
    return input
}
    }
function hero(input){

    if(input === 'home'){
        return "/../assets/home.jpg"
    }
    else if(input === 'services'){
        return "/../assets/rawpixel-603021-unsplash.jpg"
    }
    else if(input === 'projects'){
        return input
    }
    else if(input === 'gallery'){
        return input
    }
    else if(input === 'aboutUs'){
        return input
    }
    else if(input === 'contactUs'){
        return input
    }
    

    }
    return {
        route,
        hero
    }
};