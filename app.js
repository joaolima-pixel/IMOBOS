const style = document.createElement("style");
style.innerHTML = `
body{margin:0;font-family:Arial;background:#0f0f0f;color:white;}
header{display:flex;justify-content:space-between;padding:20px;background:#1a1a1a;}
.logo{color:#8B5A2B;font-size:22px;font-weight:bold;}
nav a{margin:10px;color:white;text-decoration:none;}
.btn{background:#8B5A2B;color:white;border:none;padding:10px 15px;cursor:pointer;border-radius:5px;}
.hero{text-align:center;padding:100px 20px;}
.cards{display:flex;gap:20px;justify-content:center;flex-wrap:wrap;}
.card{background:#1a1a1a;padding:20px;border-radius:10px;width:250px;text-align:center;}
.imoveis{display:flex;gap:20px;justify-content:center;flex-wrap:wrap;}
.imovel{background:#1a1a1a;border-radius:10px;width:250px;padding:10px;}
.form{display:flex;flex-direction:column;max-width:300px;margin:auto;gap:10px;}
input,select{padding:10px;}
footer{text-align:center;padding:30px;background:#000;}
`;
document.head.appendChild(style);

const app = document.getElementById("app");

app.innerHTML = `
<header>
<div class="logo">Imobos</div>
<nav>
<a href="#">Início</a>
<a href="#">Como funciona</a>
<a href="#">Imóveis</a>
</nav>
<button class="btn">Entrar na lista</button>
</header>

<section class="hero">
<h1>O novo marketplace de imóveis</h1>
<p>Venda e anuncie imóveis em uma plataforma digital</p>
<button class="btn">Anunciar imóvel</button>
</section>

<section>
<h2 style="text-align:center">Como funciona</h2>
<div class="cards">
<div class="card"><h3>Cadastre</h3><p>Adicione seu imóvel</p></div>
<div class="card"><h3>Receba contatos</h3><p>Clientes entram em contato</p></div>
<div class="card"><h3>Venda</h3><p>Finalize o negócio</p></div>
</div>
</section>

<section>
<h2 style="text-align:center">Imóveis</h2>
<div class="imoveis">
<div class="imovel"><h3>Casa moderna</h3><p>3 quartos</p><button class="btn">Ver</button></div>
<div class="imovel"><h3>Apartamento</h3><p>2 quartos</p><button class="btn">Ver</button></div>
<div class="imovel"><h3>Casa com piscina</h3><p>4 quartos</p><button class="btn">Ver</button></div>
</div>
</section>

<section>
<h2 style="text-align:center">Lista de espera</h2>
<form class="form" id="form">
<input type="text" placeholder="Nome" required>
<input type="email" placeholder="Email" required>
<select>
<option>Você é...</option>
<option>Corretor</option>
<option>Imobiliária</option>
<option>Proprietário</option>
</select>
<button class="btn">Entrar</button>
</form>
<p id="msg" style="text-align:center"></p>
</section>

<footer>
<p>© 2026 Imobos</p>
</footer>
`;

document.getElementById("form").addEventListener("submit", function(e){
e.preventDefault();
document.getElementById("msg").innerText = "Você entrou na lista de espera!";
});
