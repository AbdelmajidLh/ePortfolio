$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const formData = new FormData(contactForm);
            const name = formData.get("name") || "";
            const email = formData.get("email") || "";
            const phone = formData.get("phone") || "";
            const message = formData.get("message") || "";
            const subject = encodeURIComponent(`Contact portfolio - ${name || "Nouvelle demande"}`);
            const body = encodeURIComponent(`Nom : ${name}\nEmail : ${email}\nTéléphone : ${phone}\n\n${message}`);
            window.location.href = `mailto:abdelmajid.elhou@gmail.com?subject=${subject}&body=${body}`;
            contactForm.reset();
            alert("Merci ! Votre message est prêt dans votre client mail.");
        });
    }

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Abdelmajid EL HOU";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Revenez sur le portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Tech Lead Data", "Data Engineer", "Formateur", "Mentor statistiques et Data"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.slice(0, 10).forEach(project => {
        const imagePath = project.image.startsWith("/") ? project.image : `/${project.image}`;
        projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="${imagePath}" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> Voir</a>
            <a href="${project.links.code}" class="btn" target="_blank">Infos <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
  });
    // <!-- tilt js effect ends -->

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });

}

fetchData().then(data => {
    showSkills(data);
});

fetchData("projects").then(data => {
    showProjects(data);
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .facebook', { interval: 600 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .mail', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });
  const certificateButtons = document.querySelectorAll('.certificate-filters .btn');
  const certificates = document.querySelectorAll('.certificates-grid .certificate-card');

  if (certificateButtons.length) {
    certificateButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        certificateButtons.forEach(b => b.classList.remove('is-checked'));
        btn.classList.add('is-checked');
        const filter = btn.dataset.filter;
        certificates.forEach(card => {
          const match = filter === '*' ? true : card.classList.contains(filter.substring(1));
          card.style.display = match ? 'block' : 'none';
        });
      });
    });

    const certificateModal = document.getElementById('certificate-modal');
    const certificateModalImg = document.getElementById('certificate-modal-img');
    const certificateModalCaption = document.getElementById('certificate-modal-caption');
    const certificateModalClose = document.getElementById('certificate-modal-close');

    certificates.forEach(card => {
      card.addEventListener('click', () => {
        const img = card.querySelector('img');
        const title = card.querySelector('.certificate-info h3')?.textContent || '';
        const subtitle = card.querySelector('.certificate-info span')?.textContent || '';
        certificateModalImg.src = img.src;
        certificateModalImg.alt = img.alt;
        certificateModalCaption.textContent = `${title} — ${subtitle}`;
        certificateModal.style.display = 'flex';
      });
    });

    const closeModal = () => {
      certificateModal.style.display = 'none';
      certificateModalImg.src = '';
    };

    certificateModalClose.addEventListener('click', closeModal);
    certificateModal.addEventListener('click', event => {
      if (event.target === certificateModal) {
        closeModal();
      }
    });
  }
