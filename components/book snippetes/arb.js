//pagination
let currentValue = 1;
let pags = document.querySelectorAll(".pag li");
let mainSide = document.querySelector(".main-side");
let nextBtn = document.querySelector(".next-btn");
let prevBtn = document.querySelector(".prev-btn");

const data=[
    {
        id:1,
        anchor: "القرارات هي وعود",
        p: "قرر وانت واعي و مدرك",
        bookName : "الطريقة الاكثر فاعليه لكي تنجز المهام",
        firstDivSpan: 45,
        secondDivSpan: "23/5/2022",
    },
    {
        id:2,
        anchor: "تقسيم المشروع",
        p: "لزيادة التركيز على هدف مبسط",
        bookName: "الطريقة الاكثر فاعليه لكي تنجز المهام" ,
        firstDivSpan: 450,
        secondDivSpan: "3/7/2023",
    },
    {
        id:3,
        anchor: "انجاز المهام",
        p: "التركيز",
        bookName: "الطريقة الاكثر فاعليه لكي تنجز المهام " ,
        firstDivSpan: 280,
        secondDivSpan: "15/4/2023",
    },
    {
        id:4,
        anchor: "قل مرحبا للتغيير",
        p: "تقبل التغيير",
        bookName: "من حرك جبنتي" ,
        firstDivSpan: 233,
        secondDivSpan: "23/8/2022",
    },
    {
        id:5,
        anchor: "الحياة",
        p: "ليست طريقا واحدا",
        bookName: "من حرك جبنتي" ,
        firstDivSpan: 285,
        secondDivSpan: "2/1/2023",
    },
    {
        id:6,
        anchor: "غير طريقة تفكيرك",
        p: "لحياة أفضل",
        bookName: "قلبك دليلك",
        firstDivSpan: 280,
        secondDivSpan: "23/7/2023",
    },
    {
        id:7,
        anchor: "الحظ",
        p: "أهميته",
        bookName: "قلبك دليلك",
        firstDivSpan: 280,
        secondDivSpan: "23/7/2023",
    },
    {
        id:8,
        anchor: "العمل من أجل المال فقط",
        p: "تحب الصيد وتكره السمك",
        bookName: "قلبك دليلك",
        firstDivSpan: 280,
        secondDivSpan: "23/7/2023",
    },
    {
        id:9,
        anchor: "الموهبة",
        p: "لا تقارن نفسك بالاخرين",
        bookName: "قلبك دليلك",
        firstDivSpan: 280,
        secondDivSpan: "23/7/2023",
    },
    {
        id:10,
        anchor: "التسامح",
        p: "من أجلك",
        bookName: "قلبك دليلك",
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
            if (index < 5 ){
                mainSide.innerHTML +=`
                   <div class="main-side-box">
                      <a> ${article.anchor} </a>
                      <p> ${article.p} </p>
                      <hr>
                      <div class="book-info flex-full">
                        <span> كتاب </span>
                        <span class="book-name"> ${article.bookName} </span>
                      </div>
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
            if (index > 4 && index < 11){
                mainSide.innerHTML +=`
                <div class="main-side-box">
                   <a> ${article.anchor} </a>
                   <p> ${article.p} </p>
                   <hr>
                   <div class="book-info flex-full">
                        <span> كتاب </span>
                        <span class="book-name"> ${article.bookName} </span>
                    </div>
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
        if (index > 4 && index < 11){
        mainSide.innerHTML +=`
        <div class="main-side-box">
           <a> ${article.anchor} </a>
           <p> ${article.p} </p>
           <hr>
           <div class="book-info flex-full">
                <span> كتاب </span>
                <span class="book-name"> ${article.bookName} </span>
            </div>
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
        if (index < 5  ){
        mainSide.innerHTML +=`
        <div class="main-side-box">
           <a> ${article.anchor} </a>
           <p> ${article.p} </p>
           <hr>
           <div class="book-info flex-full">
                <span> كتاب </span>
                <span class="book-name"> ${article.bookName} </span>
            </div>
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