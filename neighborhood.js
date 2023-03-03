let form = document.getElementById('randomForm');

let openRandom = (e) => {
    e.preventDefault();
    let pickFrom = document.getElementById('selectBox');
    let randNum = Math.floor(Math.random() * 3);

    if(pickFrom.value === 'groceryStore') {
        switch(true) {
            case randNum === 1:
                window.open("https://www.harmonsgrocery.com/", "_blank");
                break;
            case randNum === 2:
                window.open("https://www.walmart.com/", "_blank");
                break;
            case randNum === 0:
                window.open("https://www.target.com/", "_blank");
                break;
            default:
                console.log("Something went wrong with picking a grocery store")
                console.log(`random number: ${randNum}`);
        }
    } else if (pickFrom.value === 'restaraunt') {
        switch(true) {
            case randNum === 1:
                window.open("https://www.ohmaisandwichkitchen.com/", "_blank");
                break;
            case randNum === 2:
                window.open("https://www.caferio.com/", "_blank");
                break;
            case randNum === 0:
                window.open("https://www.mcdonalds.com/", "_blank");
                break;
            default:
                console.log("Something went wrong with picking a restaraunt")
                console.log(`random number: ${randNum}`);
        }
    } else {
        alert('That is not an option!')
    }
}


form.addEventListener('submit', openRandom);