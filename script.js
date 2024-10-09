$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
  });

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  var typed = new Typed(".typing", {
    strings: ["build your resume", "start your carrer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});

function addnewWEField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Your work experience");

  let weOb = document.getElementById("we");
  let weButtonOb = document.getElementById("weButton");

  weOb.insertBefore(newNode, weButtonOb);
}

function addnewEQField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqField");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Your Educational Qualificaton");

  let eqOb = document.getElementById("eq");
  let EQButtonOb = document.getElementById("EQButton");

  eqOb.insertBefore(newNode, EQButtonOb);
}

function addnewSkill() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("skField");
  newNode.setAttribute("rows", 1);
  newNode.setAttribute("placeholder", "Enter Your Skills");

  let skOb = document.getElementById("sk");
  let skButtonOb = document.getElementById("skButton");

  skOb.insertBefore(newNode, skButtonOb);
}

function GenerateResume() {
  // NAME FIELD
  let namefield = document.getElementById("namefield").value;
  let nameT = document.getElementById("NameT");
  nameT.innerHTML = namefield;

  // CONTACT FIELD
  let contactfield = document.getElementById("contactfield").value;
  let phoneT = document.getElementById("PhoneT");
  phoneT.innerHTML = contactfield;

  // MAIL FIELD
  let mailfield = document.getElementById("mailfield").value;
  let mailT = document.getElementById("MailT");
  mailT.innerHTML = mailfield;
  

  // SKILL FIELD
  let skills = document.getElementsByClassName("skField");
  let skillList = document.getElementById("SkT");
  let skillArr = [];

  for (let skill of skills) {
    if (skill.value !== "") {
      skillArr.push(skill.value);
    }
  }

  skillArr.sort();

  let str = "";

  for (let skill of skillArr) {
    str += `<li>${skill}</li>`;
  }

  if (str === "") {
    skillList.innerHTML = "";
  } else {
    skillList.innerHTML = str;
    skillList.style.textAlign = "start";
  }

  // WORK FIELD
  let wes = document.getElementsByClassName("weField");
  let wet = document.getElementById("wet");
  let workArr = [];

  for (let work of wes) {
    if (work.value !== "") {
      workArr.push(work.value);
    }
  }

  workArr.sort();

  let str1 = "";

  for (let work of workArr) {
    str1 += `<li>${work}</li>`;
  }

  if (str1 === "") {
    wet.innerHTML = "";
  } else {
    wet.innerHTML = str;
    wet.style.textAlign = "start";
  }


}
