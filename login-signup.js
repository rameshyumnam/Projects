
const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () =>{
    container.classList.add("active");
})

loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
});

// Sign Up and Sign In
const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const signUpBtn = document.getElementById("sign-up");
const signInBtn = document.getElementById("login-btn")


// Add eventListener to sugnup button
signUpBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim()

    if(!name && !email && !password) {
        alert ("Please fill out the form first!")
        return;
    }

    // Save the details
    localStorage.setItem("user", JSON.stringify({name, email, password}));

    const body = document.body;
    body.innerHTML = "";
    const div = document.createElement("div");
    div.classList.add("registered");
    div.innerHTML = `<h2>Registration Successful!</h2> <h1>Hello ${name}</h1> <h4>Thanks for visiting the page. Please visit us again.</h4>`;
    body.appendChild(div);
})

signInBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim()

    if(!email && !password) {
        alert ("Please fill out the form first!")
        return;
    }

    // Check if he user is available or not
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
        alert ("No user registered with this information. Please check your name and password");
        return;
    }

    const storedUserData = JSON.parse(storedUser);

    if (storedUserData.email === email && storedUserData.password === password) {
        const body = document.body;
        body.innerHTML = "";
        const div = document.createElement("div");
        div.classList.add("logedin");
        div.innerHTML = `<h2>Login Successful!</h2> <h1>Welcome Back ${storedUserData.name}!</h1> <h4>Glad to see you again.</h4>`;

        const logOutBtn = document.createElement("button");
        logOutBtn.innerText = "Log Out"
        logOutBtn.classList.add("logout")
        div.appendChild(logOutBtn);

        logOutBtn.addEventListener("click", () => {
            location.reload();
        })
        body.appendChild(div);
    } else {
        alert ("Invalid email or password!")
    }
})