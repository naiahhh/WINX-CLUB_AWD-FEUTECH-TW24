const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const backButton = document.getElementById('back');
backButton.addEventListener('click', () => {
    window.location.href = '../index.html';
});

document.addEventListener("DOMContentLoaded", function () {
    const profiles = document.querySelectorAll(".profile-img");

    profiles.forEach(profile => {
        profile.addEventListener("mouseover", function () {
            const id = this.getAttribute("id");
            switch (id) {
                case "ali":
                    this.src = "../assets/img/port/1.1.jpg";
                    break;
                case "ava":
                    this.src = "../assets/img/port/2.1.jpg";
                    break;
                case "markie":
                    this.src = "../assets/img/port/3.1.jpg";
                    break;
                case "lyza":
                    this.src = "../assets/img/port/4.1.jpg";
                    break;
                case "dalet":
                    this.src = "../assets/img/port/5.2.jpg";
                    break;
                default:
                    break;
            }
            this.classList.add("hover-animation");
        });

        profile.addEventListener("mouseout", function () {
            const id = this.getAttribute("id");
            switch (id) {
                case "ali":
                    this.src = "../assets/img/port/1.jpg";
                    break;
                case "ava":
                    this.src = "../assets/img/port/2.jpg";
                    break;
                case "markie":
                    this.src = "../assets/img/port/3.jpg";
                    break;
                case "lyza":
                    this.src = "../assets/img/port/4.jpg";
                    break;
                case "dalet":
                    this.src = "../assets/img/port/5.jpg";
                    break;
                default:
                    break;
            }
            this.classList.remove("hover-animation");
        });
    });
});