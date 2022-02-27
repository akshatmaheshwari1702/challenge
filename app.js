let album
let searchButton=document.querySelector("#button")
let results
let musciCard=document.querySelector(".musicCard")

searchButton.addEventListener("click",async ()=>{
    album=await document.getElementById('input-song').value
    const data=await fetch(`https://itunes.apple.com/search?term=${album}&media=music&limit=15.`)
    const music=await data.json()
    const results=music.results
    results.forEach(element => 
        {
            console.log(element)
            const divTwo=document.createElement("div");
            divTwo.classList.add("cardBig");
            const divOne=document.createElement("div");
            divOne.classList.add("card");
            const img = document.createElement("img");
            img.src = element.artworkUrl100;
            const link=document.createElement("a")
            link.href=element.collectionViewUrl;
            const name=document.createElement("p");
            name.innerText=element.collectionName;
            divOne.appendChild(img);
            divOne.appendChild(name);
            divTwo.appendChild(link);
            link.appendChild(divOne)
            
            musciCard.appendChild(divTwo);
    });
   

})