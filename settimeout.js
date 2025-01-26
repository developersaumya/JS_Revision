//setTimeout vs setInterval

function printExplocode()
{
    console.log("Explocode - Explore coding...")
}

//setTimeout(printExplocode,1000)

setInterval(printExplocode,1000)

setTimeout(function() {
    console.log('Second');
}, 0)

// console.log('First');