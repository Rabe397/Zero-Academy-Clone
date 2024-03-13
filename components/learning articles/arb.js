//main-sec-in-big-section
const data=[
    {
        id:1,
        img: "../../images/latest-articles/developer-terms.png",
        anchor: "بعض المصطلحات في عالم التقنية ومعناها",
        p: "بعض المصطلحات التي تسمعها في عالم البرمجة مع تعريف بسيط لها",
        firstDivSpan: 4536,
        firstDivIcon : "fas fa-eye",
        secondDivSpan: "23/5/2022",
        secondDivIcon : "fas fa-calendar-alt",
    },
    {
        id:2,
        img: "../../images/latest-articles/good-pc-to-learn-programming.png",
        anchor: "الجهاز المناسب لتعلم البرمجة",
        p: "أنت لا تحتاج لجهاز امكانياته قوية حتى تتعلم البرمجة",
        firstDivSpan: 7536,
        firstDivIcon : "fas fa-eye",
        secondDivSpan: "3/7/2023",
        secondDivIcon : "fas fa-calendar-alt",
    },
    {
        id:3,
        img: "../../images/latest-articles/hardest-programming-language.png",
        anchor: "أصعب لغة برمجة",
        p: "هل البرمجة صعبة؟",
        firstDivSpan: 3536,
        firstDivIcon : "fas fa-eye",
        secondDivSpan: "15/4/2023",
        secondDivIcon : "fas fa-calendar-alt",
    },
    {
        id:4,
        img: "../../images/latest-articles/breaking-the-psychological-barrier.png",
        anchor: "الجانب النفسي",
        p: "أهميته و علاقته بنجاحك",
        firstDivSpan: 2336,
        firstDivIcon : "fas fa-eye",
        secondDivSpan: "23/8/2022",
        secondDivIcon : "fas fa-calendar-alt",
    },
    {
        id:5,
        img: "../../images/latest-articles/symbols-names.png",
        anchor: "الرموز",
        p: "أهم الرموز",
        firstDivSpan: 8536,
        firstDivIcon : "fas fa-eye",
        secondDivSpan: "2/1/2023",
        secondDivIcon : "fas fa-calendar-alt",
    },
     {
        id:6,
        img: "../../images/latest-articles/unique-front-end.png",
        anchor: "كيف تصبح مميز",
        p: "نصائح لتصبح افضل في المجال",
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
