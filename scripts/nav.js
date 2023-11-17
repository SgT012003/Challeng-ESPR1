var element = document.querySelector('.nav-section')
let Nav_innerHTML = `<nav class="nav-bar">
<div class="img-logo">
    <img src="./img/logo.png" alt="Logo do Institudo da Criança do Hospital das Clinicas" class="logo">
</div>
<div class="links">
    <a href="" class="nav-link">
        Home
    </a>
    <a href="" class="nav-link">
        Storytelling 
    </a>
    <a href="" class="nav-link">
        Software  Design
    </a>
    <a href="" class="nav-link">
        Conceito
    </a>
</div>
<div class="about">
    <button class="btn-about">
        About
    </button>
</div>
</nav>`;

element.innerHTML = Nav_innerHTML;