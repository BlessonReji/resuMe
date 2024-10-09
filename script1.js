 $(document).ready(function(){
    $(window).scroll(function(){
        
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
       
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

   
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
      
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        
        $('html').css("scrollBehavior", "smooth");
    });

    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    
    var typed = new Typed(".typing", {
        strings: ["build your resume", "start your carrer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

})

function addnewWEField()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder" , 'Enter Your work experience')

    let weOb = document.getElementById("we");
    let weButtonOb = document.getElementById("weButton");

    weOb.insertBefore(newNode,weButtonOb);

}

function addnewEQField()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder" , 'Enter Your Educational Qualificaton')

    let eqOb = document.getElementById("eq");
    let EQButtonOb = document.getElementById("EQButton");

    eqOb.insertBefore(newNode,EQButtonOb);

}

function addnewSkill()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skfield");
    newNode.setAttribute("rows", 1);
    newNode.setAttribute("placeholder" , 'Enter Your Skills')

    let skOb = document.getElementById("sk");
    let skButtonOb = document.getElementById("skButton");

    skOb.insertBefore(newNode,skButtonOb);

}

function GenerateResume(){

    //NAME FIELD
    let namefield = document.getElementById("namefield").value;

    let nameT = document.getElementById("NameT");

    nameT.innerHTML = namefield;

    //CONTACT FIELD
    let contactfield = document.getElementById("contactfield").value;

    let phoneT = document.getElementById("PhoneT");

    phoneT.innerHTML = contactfield;

    //MAIL FIELD
    let mailfield = document.getElementById("mailfield").value;

    let mailT = document.getElementById("MailT");

    mailT.innerHTML = mailfield;

    //SKILL FIELD
    let skill = document.getElementsByClassName("skField").value;
    let str = "";
    let s;
    for(s of skill){
        str = str + `<li> ${s.value} </li>`;
        
    }
    document.getElementById(SkT).innerHTML = str;

    //we
    let wes = document.getElementsByClassName("weField");
    let st = "";
    
    for(let e  of wes){
        st = st + `<li> ${e.value} </li>`;
    }

    document.getElementById("wet").innerHTML = st;

}

