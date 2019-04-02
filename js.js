const enterBtn = document.querySelector(".enter"),
        closeBtn = document.querySelector(".closeButton"),
        closeBtn2 = document.querySelector(".closeButton2"),
        formBox = document.querySelector(".loginSignUpForm"),
        firstRowBox = document.querySelector(".firstRow"),
        secondRowBox = document.querySelector(".secondRow"),
        asideFisrtRow1 = document.querySelector(".asideRow1"),
        asideFisrtRow2 = document.querySelector(".asideRow2"),
        asideFisrtRow3 = document.querySelector(".asideRow3"),
        asideFisrtRow4 = document.querySelector(".asideRow4"),
        asideFisrtRow5 = document.querySelector(".asideRow5"),
        asideFisrtRow6 = document.querySelector(".asideRow6"),
        asideFisrtRow7 = document.querySelector(".asideRow7"),
        welcome = document.querySelector(".welcome"),
        logIn = document.querySelector(".logIn"),
        verticalLine = document.querySelector(".verticalLine"),
        logInWith = document.querySelector(".logInWith"),
        signUp = document.querySelector(".signUp"),
        signUp2 = document.querySelector(".signUp2"),
        welcome2 = document.querySelector(".welcome2"),
        logIn2 = document.querySelector(".logIn2"),
        okButton = document.querySelector(".okButton"),
        verticalLine2 = document.querySelector(".verticalLine2"),
        logInWith2 = document.querySelector(".logInWith2"),
        loginSignUpForm1 = document.querySelector(".loginSignUpForm1"),
        loginSignUpForm2 = document.querySelector(".loginSignUpForm2")

    enterBtn.addEventListener("click", clickEnterButtonOpen)
    closeBtn.addEventListener("click", clickEnterButtonClose)
    closeBtn2.addEventListener("click", clickEnterButtonClose)
    signUp.childNodes[1].addEventListener("click", clickSignUpButton)
    signUp2.childNodes[1].addEventListener("click", clickSignUpButton2)

    function clickEnterButtonOpen(){
        formBox.style.top = "0"
        formBox.style.transition =  "top .9s cubic-bezier(0, 0, 0.6, 0.93) .25s"
        firstRowBox.style.animation = "firstRowAnime 1.2s forwards 0s"
        secondRowBox.style.animation = "secondRowAnime 1.2s forwards 0s"
        asideFisrtRow1.style.animation = "asideRow1Anime 1.2s forwards 0s"
        asideFisrtRow2.style.animation = "asideRow2Anime 1.2s forwards 0s"
        asideFisrtRow3.style.animation = "asideRow3Anime 1.2s forwards 0s"
        asideFisrtRow4.style.animation = "asideRow4Anime 1.2s forwards 0s"
        asideFisrtRow5.style.animation = "asideRow5Anime 1.2s forwards 0s"
        asideFisrtRow6.style.animation = "asideRow6Anime 1.2s forwards 0s"
        asideFisrtRow7.style.animation = "asideRow7Anime 1.2s forwards 0s"
        welcome.style.marginTop = "0px"
        logIn.style.marginTop = "0px"
        verticalLine.style.marginTop = "0px"
        logInWith.style.marginTop = "0px"
        signUp.style.marginTop = "30px"
        closeBtn.style.top = "5px";
        welcome.style.transition = "margin-top .4s cubic-bezier(0, 0, 0.68, 0.82) .8s"
        logIn.style.transition = "margin-top .4s cubic-bezier(0, 0, 0.68, 0.82) .7s"
        verticalLine.style.transition = "margin-top .4s cubic-bezier(0, 0, 0.68, 0.82) .6s"
        logInWith.style.transition = "margin-top .4s cubic-bezier(0, 0, 0.68, 0.82) .5s"
        signUp.style.transition = "margin-top .4s cubic-bezier(0, 0, 0.68, 0.82) .4s"
        closeBtn.style.transition = "top .4s cubic-bezier(0, 0, 0.68, 0.82) .7s"
        welcome2.style.animation = "none"
        logIn2.style.animation = "none"
        okButton.style.animation = "none"
        verticalLine2.style.animation = "none"
        logInWith2.style.animation = "none"
        signUp2.style.marginTop = animation = "none"
        closeBtn2.style.animation = "none"
    }
        function clickEnterButtonClose(){
        formBox.style.top = "-200px"
        formBox.style.transition = "top .9s cubic-bezier(0, 0, 0.6, 0.93) .2s"
        firstRowBox.style.animation = "firstRowAnimeClose 1.5s forwards 0s"
        secondRowBox.style.animation = "secondRowAnimeClose 1.4s forwards 0s"
        asideFisrtRow1.style.animation = "asideRow1AnimeClose 1.4s forwards 0s"
        asideFisrtRow2.style.animation = "asideRow2AnimeClose 1.4s forwards 0s"
        asideFisrtRow3.style.animation = "asideRow3AnimeClose 1.4s forwards 0s"
        asideFisrtRow4.style.animation = "asideRow4AnimeClose 1.4s forwards 0s"
        asideFisrtRow5.style.animation = "asideRow5AnimeClose 1.4s forwards 0s"
        asideFisrtRow6.style.animation = "asideRow6AnimeClose 1.4s forwards 0s"
        asideFisrtRow7.style.animation = "asideRow7AnimeClose 1.4s forwards 0s"
        welcome.style.marginTop = "-200px"
        logIn.style.marginTop = "-170px"
        verticalLine.style.marginTop = "-155px"
        logInWith.style.marginTop = "-220px"
        signUp.style.marginTop = "-65px"
        closeBtn.style.top = "-30px";
        welcome.style.transition = "margin-top .4s cubic-bezier(0, 0, 0.68, 0.82)"
        logIn.style.transition = "margin-top .4s cubic-bezier(0, 0, 0.68, 0.82) .05s"
        verticalLine.style.transition = "margin-top .4s cubic-bezier(0, 0, 0.68, 0.82) .1s"
        logInWith.style.transition = "margin-top .4s cubic-bezier(0, 0, 0.68, 0.82) .15s"
        signUp.style.transition = "margin-top .4s cubic-bezier(0, 0, 0.68, 0.82) .2s"
        closeBtn.style.transition = "top .4s"
        welcome2.style.animation = "welcome2 .8s forwards"
        logIn2.style.animation = "logIn2 .8s forwards .1s"
        okButton.style.animation = "logIn2Button .8s forwards .1s"
        verticalLine2.style.animation = "verticalLine2 .8s forwards .2s"
        logInWith2.style.animation = "logInWith2 .8s forwards .3s"
        signUp2.style.marginTop = animation = "signUp2 .8s forwards .3s"
        closeBtn2.style.animation = "closeBtn2 .8s forwards"
        loginSignUpForm1.style.transform = "perspective(2000px) rotateX(0deg)"
        loginSignUpForm1.style.transition = "transform 0s 1s"
        loginSignUpForm2.style.transform = "perspective(2000px) rotateX(-180deg)"
        loginSignUpForm2.style.transition = "transform 0s 1s, z-index 0s ease 1s"
        loginSignUpForm2.style.zIndex = "-1"
        }
        function clickSignUpButton(){
            loginSignUpForm1.style.transform = "perspective(2000px) rotateX(180deg)"
            loginSignUpForm1.style.transition = "transform 1s"
            loginSignUpForm2.style.transform = "perspective(2000px) rotateX(0deg)"
            loginSignUpForm2.style.zIndex = "0"
            loginSignUpForm2.style.transition = "transform 1s, z-index 0s ease .3s"
        }
        function clickSignUpButton2(){
            loginSignUpForm1.style.transform = "perspective(2000px) rotateX(0deg)"
            loginSignUpForm1.style.transition = "transform 1s"
            loginSignUpForm2.style.transform = "perspective(2000px) rotateX(-180deg)"
            loginSignUpForm2.style.zIndex = "-1"
            loginSignUpForm2.style.transition = "transform 1s, z-index 0s ease .3s"
        }