//TASK
async function ApiCall() { 
    let ReciveData = await fetch("https://animechan.xyz/api/random");
    let AllData = await ReciveData.json();

    //Creating A Divison  
    let Div = document.createElement("div");
    Div.setAttribute("class","container");
    Div.setAttribute("id","container-box");
    document.body.appendChild(Div);
    
    //Creating A New Row
    let NewRow = document.createElement("div");
    NewRow.setAttribute("class","row p-3 bg-info");
    NewRow.setAttribute("id", "Row-box");
    Div.appendChild(NewRow);

    //Creating New  H1 For Anime
    let NewPara = document.createElement("h3");
    NewPara.innerText = `Name Of The Anime: ${AllData.anime}`;
    NewPara.setAttribute("class", "display-5 anime-name text-center mt-3");
    NewPara.setAttribute("id", "anime-name");
    NewRow.appendChild(NewPara)

    //Creating A BlockQuote
    let Quote = document.createElement("blockquote");
    Quote.setAttribute("class", "blockquote text-center mt-3");
    NewRow.appendChild(Quote)
    
    //Creating P Tag
    let Qpara = document.createElement("p");
    Qpara.setAttribute("class", "mb-3");
    Qpara.innerText = `${AllData.quote}`;
    Quote.appendChild(Qpara);

    //Creating Footer 
    let Qfooter = document.createElement("footer");
    Qfooter.setAttribute("class", "blockquote-footer mt-2");
    Qfooter.innerText = `Character Name: `;
    Qpara.appendChild(Qfooter);
    
    //Creating The Cite Tag Inside The Footer
    let Qcite = document.createElement("cite");
    Qcite.setAttribute("class","Source Title");
    Qcite.innerText = `${AllData.character}`;
    Qfooter.appendChild(Qcite);
}
ApiCall();
function refreshPage(){
    window.location.reload();
};
