//main-sec-in-big-section
const data=[
    {
        id:1,
        img: "../../images/latest-articles/developer-terms.png",
        anchor: "Some important Terms in Tech World",
        p: "Some important Terms in Tech World with the definition of it",
        firstDivSpan: 4536,
        firstDivIcon : "fas fa-eye",
        secondDivSpan: "23/5/2022",
        secondDivIcon : "fas fa-calendar-alt",
    },
    {
        id:2,
        img: "../../images/latest-articles/good-pc-to-learn-programming.png",
        anchor: "Good PC quality to learn Programming",
        p: "Before you buy one !!",
        firstDivSpan: 7536,
        firstDivIcon : "fas fa-eye",
        secondDivSpan: "3/7/2023",
        secondDivIcon : "fas fa-calendar-alt",
    },
    {
        id:3,
        img: "../../images/latest-articles/hardest-programming-language.png",
        anchor: "Hardest Programming Langauage",
        p: "Guess It ?!",
        firstDivSpan: 3536,
        firstDivIcon : "fas fa-eye",
        secondDivSpan: "15/4/2023",
        secondDivIcon : "fas fa-calendar-alt",
    },
    {
        id:4,
        img: "../../images/latest-articles/breaking-the-psychological-barrier.png",
        anchor: "The Psychological Barrier",
        p: "Your Psychology Before Learning",
        firstDivSpan: 2336,
        firstDivIcon : "fas fa-eye",
        secondDivSpan: "23/8/2022",
        secondDivIcon : "fas fa-calendar-alt",
    },
    {
        id:5,
        img: "../../images/latest-articles/symbols-names.png",
        anchor: "Symbols",
        p: "Some Symbols",
        firstDivSpan: 8536,
        firstDivIcon : "fas fa-eye",
        secondDivSpan: "2/1/2023",
        secondDivIcon : "fas fa-calendar-alt",
    },
     {
        id:6,
        img: "../../images/latest-articles/unique-front-end.png",
        anchor: "How To Be unique",
        p: "Some important Tips to be the Best",
        firstDivSpan: 18536,
        firstDivIcon : "fas fa-eye",
        secondDivSpan: "23/7/2023",
        secondDivIcon : "fas fa-calendar-alt",
    }
]

//pagination
let currentValue = 1;
let pags = document.querySelectorAll(".pag li");
let mainSide = document.querySelector(".main-side");
let nextBtn = document.querySelector(".next-btn");
let prevBtn = document.querySelector(".prev-btn");

const pagination = ()=>{
    pags.forEach((pag)=>{
        pag.classList.remove("active");
    })
    event.target.classList.add("active");
    currentValue = event.target.value;
    mainSide.innerHTML = "";
    if(currentValue === 1){
        data.map((article , index)=>{
            if (index < 3 ){
                mainSide.innerHTML +=`
                    <div class="main-side-box">
                       <img src="${article.img}" alt="${article.anchor}">
                       <hr>
                       <a> ${article.anchor}</a>
                       <p>${article.p}</p>
                       <hr>
                       <div class="icons flex-full">
                           <div>
                              <span> ${article.firstDivSpan} </span>
                              <i class="${article.firstDivIcon}"></i>
                          </div>
                          <div>
                             <span> ${article.secondDivSpan} </span>
                             <i class="${article.secondDivIcon}"></i>
                         </div>
                      </div>
                    </div>
                `
            }
        })
    }else{
        data.map((article , index)=>{
            if (index >= 3 ){
                mainSide.innerHTML +=`
                   <div class="main-side-box">
                       <img src="${article.img}" alt="${article.anchor}">
                       <hr>
                       <a> ${article.anchor}</a>
                       <p>${article.p}</p>
                       <hr>
                       <div class="icons flex-full">
                           <div>
                              <span> ${article.firstDivSpan} </span>
                              <i class="${article.firstDivIcon}"></i>
                           </div>
                           <div>
                              <span> ${article.secondDivSpan} </span>
                              <i class="${article.secondDivIcon}"></i>
                           </div>
                       </div>
                   </div>
                `
            }
        })
    }
}

//pagination by buttons(arrows)
//next-button
nextBtn.onclick= ()=>{
    if(currentValue == 1){
        
        pags.forEach((pag)=>{
            pag.classList.remove("active");
            
        })
        currentValue++;
        pags[currentValue-1].classList.add("active");
        mainSide.innerHTML = "";
        data.map((article , index)=>{
            if (index >= 3 ){
                mainSide.innerHTML +=`
                   <div class="main-side-box">
                       <img src="${article.img}" alt="${article.anchor}">
                       <hr>
                       <a> ${article.anchor}</a>
                       <p>${article.p}</p>
                       <hr>
                       <div class="icons flex-full">
                           <div>
                              <span> ${article.firstDivSpan} </span>
                              <i class="${article.firstDivIcon}"></i>
                           </div>
                           <div>
                              <span> ${article.secondDivSpan} </span>
                              <i class="${article.secondDivIcon}"></i>
                           </div>
                       </div>
                   </div>
                `
            }
        })
    }
}   

//previous-button
prevBtn.onclick= ()=>{
    if(currentValue == 2){
        pags.forEach((pag)=>{
            pag.classList.remove("active");
            
        })
        currentValue--;
        pags[currentValue-1].classList.add("active");
        mainSide.innerHTML = "";
        data.map((article , index)=>{
            if (index < 3 ){
                mainSide.innerHTML +=`
                   <div class="main-side-box">
                       <img src="${article.img}" alt="${article.anchor}">
                       <hr>
                       <a> ${article.anchor}</a>
                       <p>${article.p}</p>
                       <hr>
                       <div class="icons flex-full">
                           <div>
                              <span> ${article.firstDivSpan} </span>
                              <i class="${article.firstDivIcon}"></i>
                           </div>
                           <div>
                              <span> ${article.secondDivSpan} </span>
                              <i class="${article.secondDivIcon}"></i>
                           </div>
                       </div>
                   </div>
                `
            }
        })
    }
}   

