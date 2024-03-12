//pagination
let currentValue = 1;
let pags = document.querySelectorAll(".pag li");
let mainSide = document.querySelector(".main-side");
let nextBtn = document.querySelector(".next-btn");
let prevBtn = document.querySelector(".prev-btn");

const data=[
    {
        id:1,
        anchor: "جودة العمل",
        p: "أهم من الكمية و العدد ",
        firstDivSpan: 45,
        secondDivSpan: "23/5/2022",
    },
    {
        id:2,
        anchor: "هل تعلم البرمجة مفيد للحصول على وظيفة فقط؟",
        p: "لا بل اكثر ... ",
        firstDivSpan: 450,
        secondDivSpan: "3/7/2023",
    },
    {
        id:3,
        anchor: "لا تنسى الدرس",
        p: "انسى الماضي لكن ليس الدرس!!",
        firstDivSpan: 280,
        secondDivSpan: "15/4/2023",
    },
    {
        id:4,
        anchor: "ادارة الوقت",
        p: "الأهمية",
        firstDivSpan: 233,
        secondDivSpan: "23/8/2022",
    },
    {
        id:5,
        anchor: "الحياة قصيرة",
        p: "لا تتعلم كل شئ",
        firstDivSpan: 285,
        secondDivSpan: "2/1/2023",
    },
    {
        id:6,
        anchor: "لا تفرح كثيرا بشهادة الكورس ",
        p: "نعم انه انجاز لكن....",
        firstDivSpan: 280,
        secondDivSpan: "23/7/2023",
    },
    {
        id:7,
        anchor: "المسامح كريم",
        p: "الحزن من الناس",
        firstDivSpan: 280,
        secondDivSpan: "23/7/2023",
    },
    {
        id:8,
        anchor: "انظر لعيوبك قبل الاخرين",
        p: "لا تتبع عيوب الناس",
        firstDivSpan: 280,
        secondDivSpan: "23/7/2023",
    },
    {
        id:9,
        anchor: "لا تحمل كل الصناديق مرة واحده",
        p: "نعم...",
        firstDivSpan: 280,
        secondDivSpan: "23/7/2023",
    },
    {
        id:10,
        anchor: "فوائد المشاكل",
        p: "لا بد من المشاكل في الحياة",
        firstDivSpan: 280,
        secondDivSpan: "23/7/2023",
    },
    
]


//clicking on page number function
const pagination = ()=>{
    pags.forEach((pag)=>{
        pag.classList.remove("active");
    })
    event.target.classList.add("active");
    currentValue = event.target.value;
    mainSide.innerHTML = "";
    if(currentValue === 1){
        data.map((article , index)=>{
            if (index < 6 ){
                mainSide.innerHTML +=`
                   <div class="main-side-box">
                      <a> ${article.anchor} </a>
                      <p> ${article.p} </p>
                      <hr>
                      <div class="icons flex-full">
                        <div>
                           <span> ${article.firstDivSpan} </span>
                           <i class="fas fa-eye"></i>
                        </div>
                        <div>
                          <span> ${article.secondDivSpan} </span>
                          <i class="fas fa-calendar-alt"></i>
                        </div>
                      </div>
                    </div>
                `
            }
        })
    }else{
        data.map((article , index)=>{
            if (index > 5 && index < 11){
                mainSide.innerHTML +=`
                <div class="main-side-box">
                   <a> ${article.anchor} </a>
                   <p> ${article.p} </p>
                   <hr>
                   <div class="icons flex-full">
                     <div>
                        <span> ${article.firstDivSpan} </span>
                        <i class="fas fa-eye"></i>
                     </div>
                     <div>
                       <span> ${article.secondDivSpan} </span>
                       <i class="fas fa-calendar-alt"></i>
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
    if( currentValue = 1){
        pags.forEach((pag)=>{
            pag.classList.remove("active");
                
        })
    
    currentValue++;
    pags[currentValue-1].classList.add("active");
    mainSide.innerHTML = "";
    
    data.map((article , index)=>{
        if (index > 5 && index < 11){
        mainSide.innerHTML +=`
        <div class="main-side-box">
           <a> ${article.anchor} </a>
           <p> ${article.p} </p>
           <hr>
           <div class="icons flex-full">
             <div>
            <span> ${article.firstDivSpan} </span>
            <i class="fas fa-eye"></i>
             </div>
             <div>
               <span> ${article.secondDivSpan} </span>
               <i class="fas fa-calendar-alt"></i>
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
    if(currentValue = 2){
        pags.forEach((pag)=>{
            pag.classList.remove("active");
            
        })
        
    currentValue--;
    pags[currentValue-1].classList.add("active");
    mainSide.innerHTML = "";
    data.map((article , index)=>{
        if (index < 6  ){
        mainSide.innerHTML +=`
        <div class="main-side-box">
           <a> ${article.anchor} </a>
           <p> ${article.p} </p>
           <hr>
           <div class="icons flex-full">
             <div>
            <span> ${article.firstDivSpan} </span>
            <i class="fas fa-eye"></i>
             </div>
             <div>
               <span> ${article.secondDivSpan} </span>
               <i class="fas fa-calendar-alt"></i>
             </div>
           </div>
        </div>
        `
        }
    })
 }
} 

