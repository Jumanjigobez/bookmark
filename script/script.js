//Function to ease on getting DOM elements
var elem = (x) => {
    return document.querySelector(x)
}

//Mobile Menu Function

var mobile_menu = elem(".mobile_menu"),
    menu_btn = elem(".menu_btn");

var openMenu = () => {
    mobile_menu.classList.add("active");
    menu_btn.style.display = "none";
}

var closeMenu = () => {
    mobile_menu.classList.remove("active");
    menu_btn.style.display = "flex";
}

//Tab onclick functions
var change_part = elem(".change_part"),
    tab_1 = elem(".tab_1"),
    tab_2 = elem(".tab_2"),
    tab_3 = elem(".tab_3");

tab_1.classList.add("active")

var changeTab = (x) => {
    if (x.className == "tab_1") {
        tab_1.classList.remove("active")
        tab_2.classList.remove("active")
        x.classList.add("active")

        change_part.innerHTML = `
            <div class="box">
                <div class="bg bg2"></div>
                <div class="img_part">
                    <img src="images/illustration-features-tab-1.svg" alt="Simple Bookmarking Image">
                </div>
                <div class="text_part">
                    <h3>Bookmark in one click</h3>
                    <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                    <button class="btn">More Info</button>
                </div>
            </div>
        
        
        `

    } else if (x.className == "tab_2") {
        tab_1.classList.remove("active")
        tab_3.classList.remove("active")
        x.classList.add("active")

        change_part.innerHTML = `
            <div class="box">
                <div class="bg bg2"></div>
                <div class="img_part">
                    <img src="images/illustration-features-tab-2.svg" alt="Simple Bookmarking Image">
                </div>
                <div class="text_part">
                    <h3>Intelligent search</h3>
                    <p>Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
                    <button class="btn">More Info</button>
                </div>
            </div>
        
        
        `
    } else if (x.className == "tab_3") {
        tab_2.classList.remove("active")
        tab_1.classList.remove("active")
        x.classList.add("active")

        change_part.innerHTML = `
            <div class="box">
                <div class="bg bg2"></div>
                <div class="img_part">
                    <img src="images/illustration-features-tab-3.svg" alt="Simple Bookmarking Image">
                </div>
                <div class="text_part">
                    <h3>Share your bookmarks</h3>
                    <p>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
                    <button class="btn">More Info</button>
                </div>
            </div>
        
        `
    }
}


// View FAQ's Answer

var viewAnswer = (x) => {
    let answer_part = x.querySelector(".answer_part");
    answer_part.style.display = answer_part.style.display === "none" ? "block" : "none";
    let name_part = x.querySelector(".name_part")
    let icon = name_part.querySelector("img");
    icon.style.transform = icon.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
    icon.style.filter = icon.style.filter === "hue-rotate(100deg)" ? "hue-rotate(0deg)" : "hue-rotate(100deg)";
}

//Validate Email Input

var email_input = elem("#email"),
    error_icon = elem(".error_icon"),
    error_text = elem(".error");

const regex_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



email_input.onkeyup = () =>{
    let valid_email = regex_email.test(email_input.value);
    if (!valid_email) {//Check if valid_email is not true
        email_input.style.border = "1px solid var(--Soft-Red)";
        error_icon.style.display = "flex";
        error_text.innerText = "Whoops, make sure it's an email";
        error_text.style.display = "flex";

    }else{
        email_input.style.border = "1px solid transparent";
        error_icon.style.display = "none";
        error_text.innerText = "";
        error_text.style.display = "none";
    }
}
var validate = () =>{
    if (email_input.value==="") {
        email_input.style.border = "1px solid var(--Soft-Red)";
        error_icon.style.display = "flex";
        error_text.innerText = "Sorry, Email can't be empty";
        error_text.style.display = "flex";

    }
    else{
        email_input.value = "";
        email_input.style.border = "1px solid transparent";
        error_icon.style.display = "none";
        error_text.innerText = "";
        error_text.style.display = "none";
    }
}