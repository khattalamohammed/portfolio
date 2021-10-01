var burger= document.querySelector(".menu-btn");
var menu= document.querySelector(".menu");
var links=document.querySelectorAll(".menu li ");


burger.addEventListener("click",function(){
    menu.classList.toggle("active");
    links.forEach((link,index) => {
            if (link.style.animation) {
            link.style.animation = "";
            }else{
                link.style.animation = 'navAnim  .8s forwards '+(index/7)+'s';
            }
            console.log(index/7);
    });
    
    this.classList.toggle('bar');

});

var mainlinks=document.querySelectorAll(".menu li a");
mainlinks.forEach(mainlink => {
        mainlink.addEventListener("click",function(){
            
        menu.classList.remove("active");

        burger.classList.remove('bar');

        links.forEach(link=> {
           link.style.animation = "" ;
        });

    });
});

var myname=document.querySelector(".name");
var text=myname.textContent;
var splitText=text.split("");

    myname.textContent="";

for (let index = 0; index < splitText.length; index++) {
        myname.innerHTML+= "<span>"+splitText[index]+"</span>"; 
}
 
var char=0;

var timer1=setInterval(() => {
    var span=myname.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if(char === splitText.length){
        clearInterval(timer1);
        return;
    }
}, 50);


var profession=document.querySelector(".profession");
var text2=profession.textContent;

var splitText2=text2.split("");

    profession.textContent="";

for (let index = 0; index < splitText2.length; index++) {
        profession.innerHTML+= "<span>"+splitText2[index]+"</span>"; 
}

var ch=0;

var Timer2=setInterval(() => {
    var span=profession.querySelectorAll("span")[ch];
    span.classList.add("fade");
    ch++;
    if(ch === splitText2.length){
        clearInterval(Timer2);
        return;
    }
}, 50);

window.addEventListener("scroll",function(){
    // sticky navbar on scroll script
    /*if(this.scrollY > 20){
        $('.navbar').addClass("sticky");
    }else{
        $('.navbar').removeClass("sticky");
    }*/
    console.log(this.scrollY);
    if (this.scrollY > 50) {
        this.document.querySelector('header').style.background ='linear-gradient(150deg,rgba(252, 157, 3, 1),#f83600)';
    }else{
        this.document.querySelector('header').style.background ='';
    }
    // scroll-up button show/hide script
    if(this.scrollY > 500){
        document.querySelector('.scroll-up-btn').classList.add("show");
    }else{
        document.querySelector('.scroll-up-btn').classList.remove("show");
    }


    if (this.scrollY >1340 & this.innerWidth>960){
        var bars=document.querySelectorAll('.bars .bar');
        bars[0].classList.add("c");
        bars[1].classList.add("cplus");
        bars[2].classList.add("java");
        bars[3].classList.add("db");
        bars[4].classList.add("html");
        bars[5].classList.add("css");
        bars[6].classList.add("js");
        bars[7].classList.add("php");
        var percens=this.document.querySelectorAll('.myskills  .percen');
        percens.forEach(percen=> {
            percen.style.animation ='show .3s forwards 1s';
        });
    }
    if (this.scrollY >1640 & this.innerWidth<960){
        var bars=document.querySelectorAll('.programming .bars .bar');
        bars[0].classList.add("c");
        bars[1].classList.add("cplus");
        bars[2].classList.add("java");
        bars[3].classList.add("db");
        var percens=this.document.querySelectorAll('.programming .percen');
        percens.forEach(percen=> {
            percen.style.animation ='show .3s forwards 1s';
        });
    }
    if (this.scrollY >2140 & this.innerWidth<960){
        var bars=document.querySelectorAll('.web .bars .bar');
        bars[0].classList.add("html");
        bars[1].classList.add("css");
        bars[2].classList.add("js");
        bars[3].classList.add("php");
        var percens=this.document.querySelectorAll('.web .percen');
        percens.forEach(percen=> {
            percen.style.animation ='show .3s forwards 1s';
        });

    }
    if (this.scrollY >2540 & this.innerWidth>960) {
        var soft_skills=this.document.querySelectorAll('footer .container div');
        soft_skills.forEach(soft_skill => {
            soft_skill.style.animation = 'slide_dwn 1.5s forwards';
        });
    }
    if (this.scrollY >3500 & this.innerWidth<960) {
        var soft_skills=this.document.querySelectorAll('footer .container div');
        soft_skills[0].style.animation = 'slide_dwn 1.5s forwards';
    }
    if (this.scrollY >3700 & this.innerWidth<960) {
        var soft_skills=this.document.querySelectorAll('footer .container div');
        soft_skills[1].style.animation = 'slide_dwn 1.5s forwards';
    }
    if (this.scrollY >3900 & this.innerWidth<960) {
        var soft_skills=this.document.querySelectorAll('footer .container div');
        soft_skills[2].style.animation = 'slide_dwn 1.5s forwards';
    }
    if (this.scrollY >4100 & this.innerWidth<960) {
        var soft_skills=this.document.querySelectorAll('footer .container div');
        soft_skills[3].style.animation = 'slide_dwn 1.5s forwards';
    }
});
document.querySelector('.scroll-up-btn').addEventListener('click',function(){
    window.scrollTo(0,0);
    //document.querySelector('html').style.scrollBehavior = "auto";
});