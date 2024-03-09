//main-sec-in-big-section
const data=[
    {
        id:1,
        anchor : "How to get ASCll code from Charcters and vice versa",
        firstP : "Some important Terms in Tech World with the definition of it",
        secondP : "JavaScript",
        firstDivSpan: 4536,
        firstDivIcon : "fas fa-eye",
        secondDivSpan: "23/5/2022",
        secondDivIcon : "fas fa-calendar-alt",
    },
    {
        id:2,
        anchor : "How to Check if array elements the same element or not",
        firstP : "How to get ASCll code from Charcters and vice versa",
        secondP : "JavaScript",
        firstDivSpan: 4536,
        firstDivIcon : "fas fa-eye",
        secondDivSpan: "23/5/2022",
        secondDivIcon : "fas fa-calendar-alt",
    },
    {
        id:3,
        anchor : "How to add Padding for more than one line",
        firstP : "Via box-decoration-break property",
        secondP : "Css",
        firstDivSpan: 4536,
        firstDivIcon : "fas fa-eye",
        secondDivSpan: "23/5/2022",
        secondDivIcon : "fas fa-calendar-alt",
    },
    {
        id:4,
        anchor : "How to make Focus on Parent when Focusing in insider elements",
        firstP : "you can choose the Parent for the Elements you make focus on",
        secondP : "Css",
        firstDivSpan: 4536,
        firstDivIcon : "fas fa-eye",
        secondDivSpan: "23/5/2022",
        secondDivIcon : "fas fa-calendar-alt",
    },
    {
        id:5,
        anchor : "How to add shadow in Images",
        firstP : "Box Shadow Property",
        secondP : "Css",
        firstDivSpan: 4536,
        firstDivIcon : "fas fa-eye",
        secondDivSpan: "23/5/2022",
        secondDivIcon : "fas fa-calendar-alt",
    },
    {
        id:6,
        anchor : "How to control the Distance between Outline and Border",
        firstP : "Many ways to do it",
        secondP : "Css",
        firstDivSpan: 4536,
        firstDivIcon : "fas fa-eye",
        secondDivSpan: "23/5/2022",
        secondDivIcon : "fas fa-calendar-alt",
    },
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
        data.map(( da , index)=>{
            if (index < 3 ){
                mainSide.innerHTML +=`
                 <div class="main-side-box">
                   <a href=""> ${da.anchor} </a>
                   <p> ${da.firstP} </p>
                   <p class="lang lang-css"> ${da.secondP} </p>
                   <hr>
                   <div class="icons flex-full">
                     <div>
                        <span> ${da.firstDivSpan} </span>
                        <i class="${da.firstDivIcon}"></i>
                     </div>
                     <div>
                        <span> ${da.secondDivSpan} </span>
                        <i class="${da.secondDivIcon}"></i>
                     </div>
                   </div>
                 </div>
                `
            }
        })
    }else{
        data.map(( da , index)=>{
            if (index >= 3 ){
                mainSide.innerHTML +=`
                <div class="main-side-box">
                <a href=""> ${da.anchor} </a>
                <p> ${da.firstP} </p>
                <p class="lang lang-css"> ${da.secondP} </p>
                <hr>
                <div class="icons flex-full">
                  <div>
                     <span> ${da.firstDivSpan} </span>
                     <i class="${da.firstDivIcon}"></i>
                  </div>
                  <div>
                     <span> ${da.secondDivSpan} </span>
                     <i class="${da.secondDivIcon}"></i>
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
        data.map(( da , index)=>{
            if (index >= 3 ){
                mainSide.innerHTML +=`
                <div class="main-side-box">
                <a href=""> ${da.anchor} </a>
                <p> ${da.firstP} </p>
                <p class="lang lang-css"> ${da.secondP} </p>
                <hr>
                <div class="icons flex-full">
                  <div>
                     <span> ${da.firstDivSpan} </span>
                     <i class="${da.firstDivIcon}"></i>
                  </div>
                  <div>
                     <span> ${da.secondDivSpan} </span>
                     <i class="${da.secondDivIcon}"></i>
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
        data.map(( da , index)=>{
            if (index < 3 ){
                mainSide.innerHTML +=`
                <div class="main-side-box">
                <a href=""> ${da.anchor} </a>
                <p> ${da.firstP} </p>
                <p class="lang lang-css"> ${da.secondP} </p>
                <hr>
                <div class="icons flex-full">
                  <div>
                     <span> ${da.firstDivSpan} </span>
                     <i class="${da.firstDivIcon}"></i>
                  </div>
                  <div>
                     <span> ${da.secondDivSpan} </span>
                     <i class="${da.secondDivIcon}"></i>
                  </div>
                </div>
              </div>
                `
            }
        })
    }
} 