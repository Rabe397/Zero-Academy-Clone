//main-sec-in-big-section
const data=[
    {
        id:1,
        anchor: "Your work quality",
        p: "It's not about quantity but quality",
        firstDivSpan: 45,
        secondDivSpan: "23/5/2022",
    },
    {
        id:2,
        anchor: "Programming isn't worthless",
        p: "Use it there...",
        firstDivSpan: 450,
        secondDivSpan: "3/7/2023",
    },
    {
        id:3,
        anchor: "Don't forget the lesson!!",
        p: "Forget the past but not it's lesson!!!",
        firstDivSpan: 280,
        secondDivSpan: "15/4/2023",
    },
    {
        id:4,
        anchor: "Time Management",
        p: "So important...",
        firstDivSpan: 233,
        secondDivSpan: "23/8/2022",
    },
    {
        id:5,
        anchor: "Life is too short",
        p: "You can't learn everything",
        firstDivSpan: 285,
        secondDivSpan: "2/1/2023",
    },
    {
        id:6,
        anchor: "Don't be overwhelmed with the course certificate!",
        p: " Yeah it's good but...",
        firstDivSpan: 280,
        secondDivSpan: "23/7/2023",
    },
    {
        id:7,
        anchor: "Forgive ",
        p: "Sadness",
        firstDivSpan: 280,
        secondDivSpan: "23/7/2023",
    },
    {
        id:8,
        anchor: "Your faults first",
        p: "Don't Focus on people Faults!",
        firstDivSpan: 280,
        secondDivSpan: "23/7/2023",
    },
    {
        id:9,
        anchor: "Don't hold all boxes at once",
        p: "what?",
        firstDivSpan: 280,
        secondDivSpan: "23/7/2023",
    },
    {
        id:10,
        anchor: "Get advantges feom problems",
        p: "By this!!",
        firstDivSpan: 280,
        secondDivSpan: "23/7/2023",
    },
    
]

//pagination
let currentValue = 1;
let pags = document.querySelectorAll(".pag li");
let mainSide = document.querySelector(".main-side");
let nextBtn = document.querySelector(".next-btn");
let prevBtn = document.querySelector(".prev-btn");

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
                      <a href=""> ${article.anchor} </a>
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
                   <a href=""> ${article.anchor} </a>
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
           <a href=""> ${article.anchor} </a>
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
           <a href=""> ${article.anchor} </a>
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

