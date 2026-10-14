/* =====================================================
   LOCATELLI SERVIÇOS CONTÁBEIS
   JAVASCRIPT
===================================================== */


/* =========================
   CONFIGURAÇÕES
========================= */

// COLOQUE AQUI O WHATSAPP REAL DA LOCATELLI
// Formato: 55 + DDD + número
const WHATSAPP_NUMBER = "5551XXXXXXXXX";

// COLOQUE AQUI O INSTAGRAM REAL
const INSTAGRAM_URL = "https://www.instagram.com/";


/* =========================
   MENU MOBILE
========================= */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("open");

    });

}


/* Fecha menu ao clicar em um link */

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav?.classList.remove("open");

    });

});


/* =========================
   HEADER AO ROLAR
========================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================
   WHATSAPP
========================= */

function openWhatsApp(message) {

    const encodedMessage =
        encodeURIComponent(message);

    const url =
        `https://wa.me/${51997049107}?text=${encodedMessage}`;

    window.open(url, "_blank");

}


document.querySelectorAll(".whatsapp-link").forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        let message =
            "Olá! Gostaria de conhecer os serviços da Locatelli Serviços Contábeis.";

        const text =
            this.textContent.toLowerCase();

        if (text.includes("abrir")) {

            message =
                "Olá! Gostaria de informações sobre abertura de empresa.";

        }

        else if (text.includes("trocar")) {

            message =
                "Olá! Gostaria de informações sobre a troca de contabilidade.";

        }

        else if (text.includes("reforma")) {

            message =
                "Olá! Gostaria de entender como a Reforma Tributária pode afetar minha empresa.";

        }

        openWhatsApp(message);

    });

});


/* =========================
   INSTAGRAM
========================= */

document.querySelectorAll('a[href="#"]').forEach(link => {

    if (
        link.textContent
            .toLowerCase()
            .includes("instagram")
    ) {

        link.href = "https://www.instagram.com/locatelli_contabilidade/";

    }

});


/* =========================
   COOKIES
========================= */

const cookieBanner =
    document.getElementById("cookieBanner");

const acceptCookies =
    document.getElementById("acceptCookies");

const rejectCookies =
    document.getElementById("rejectCookies");


if (
    cookieBanner &&
    !localStorage.getItem("locatelliCookies")
) {

    setTimeout(() => {

        cookieBanner.classList.add("show");

    }, 1200);

}


function closeCookies() {

    cookieBanner?.classList.remove("show");

}


acceptCookies?.addEventListener("click", () => {

    localStorage.setItem(
        "locatelliCookies",
        "accepted"
    );

    closeCookies();

});


rejectCookies?.addEventListener("click", () => {

    localStorage.setItem(
        "locatelliCookies",
        "rejected"
    );

    closeCookies();

});


/* =========================
   ANIMAÇÕES AO ENTRAR NA TELA
========================= */

const animatedElements =
    document.querySelectorAll(
        ".feature-card, .service-card, .situation-card, .number-item, .segments-grid div"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


animatedElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(20px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});


/* =========================
   ACESSIBILIDADE
========================= */

if (
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches
) {

    document.documentElement.style.scrollBehavior =
        "auto";

}