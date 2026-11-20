"use strict";
const $=(s,root=document)=>root.querySelector(s);
const app=$("#app");
let portal=null;
const safe=(v)=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const norm=(v)=>String(v??"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
const validExternal=(v)=>{try{const u=new URL(v);return u.protocol==="https:"?u.href:null}catch{return null}};
const sections=[["visao","Visão geral"],["unidades","Unidades"],["aulas","Aulas e materiais"],["atividades","Atividades"],["cronograma","Cronograma"],["referencias","Referências"]];
function linkOrPending(url,label){const href=validExternal(url);return href?'<a class="btn btn-primary" href="'+safe(href)+'" target="_blank" rel="noopener noreferrer">'+safe(label)+' ↗</a>':'<p class="placeholder">'+safe(label)+' ainda não disponível. Aguardando autorização e publicação pelo professor.</p>'}
function notices(){const arr=portal.avisos||[];return arr.length?arr.map(a=>'<div class="list-row"><strong>'+safe(a.titulo)+'</strong><small>'+safe(a.texto)+'</small></div>').join(""):'<p class="placeholder">Nenhum aviso publicado.</p>'}
function events(){const arr=portal.eventos||[];return arr.length?arr.map(a=>'<div class="list-row"><strong>'+safe(a.titulo)+'</strong><small>'+safe(a.data||"A definir")+'</small></div>').join(""):'<p class="placeholder">Nenhum evento confirmado para o período.</p>'}
function renderHome(){
const disciplinas=portal.disciplinas||[];
const periodos=portal.periodos||[];
const periodOptions=periodos.map(p=>'<option value="'+safe(p.id)+'">'+safe(p.titulo)+'</option>').join("");
const areas=[...new Set(disciplinas.map(d=>d.curso))];
const cursos=areas.map(nome=>({nome,quantidade:disciplinas.filter(d=>d.curso===nome).length}));
const horas=disciplinas.reduce((n,d)=>n+(Number(d.cargaHoraria)||0),0);
const planejadas=disciplinas.filter(d=>d.status==="prevista").length;
app.innerHTML='<div class="hero hero-premium"><div class="hero-copy"><div class="kicker">BEM-VINDO AO AULAHUB · 2027.1</div><h1>Suas aulas.<br><span class="accent">Tudo em um só lugar.</span></h1><p class="lead">Organize disciplinas, acompanhe atividades, consulte avisos e encontre os recursos de cada turma com facilidade.</p><div class="actions"><a href="#disciplinas" class="btn btn-primary">▦ &nbsp; Explorar disciplinas →</a><a href="#agenda" class="btn">▣ &nbsp; Ver agenda e atividades</a></div></div><div class="hero-art" aria-hidden="true"><div class="art-orbit"></div><div class="art-screen"></div><div class="art-book art-book-a"></div><div class="art-book art-book-b"></div><div class="art-cap">🎓</div></div><aside class="feature"><small class="muted">SEU ESPAÇO ACADÊMICO</small><strong>Organização para aprender melhor.</strong><p>Portal em preparação para o período letivo 2027.1.</p><div class="hero-chips"><span class="pill">▤ Disciplinas</span><span class="pill">▣ Aulas</span><span class="pill">✦ Atividades</span></div></aside></div>'+
'<section id="dashboard"><div class="heading"><div><h2>Dashboard acadêmico</h2><p class="subtitle">Resumo dos conteúdos cadastrados e dos próximos compromissos.</p></div><span class="tag">2027.1 · Alocações previstas</span></div><div class="metrics">'+
'<div class="metric"><small>Turmas previstas</small><strong>'+planejadas+'</strong><span class="hint">Relação acadêmica 2027.1</span></div>'+
'<div class="metric"><small>Cursos previstos</small><strong>'+areas.length+'</strong><span class="hint">Alocações de quatro cursos</span></div>'+
'<div class="metric"><small>Carga horária prevista</small><strong>'+horas+' h</strong><span class="hint">66 horas por turma</span></div>'+
'<div class="metric"><small>Atividades publicadas</small><strong>'+(portal.atividades||[]).length+'</strong><span class="hint">Prazos não divulgados</span></div></div><div class="two dashboard-insights"><article class="panel"><h3>Distribuição por curso</h3><div class="breakdown">'+cursos.map(c=>'<div class="break-row"><div class="break-label"><span>'+safe(c.nome)+'</span><strong>'+c.quantidade+' turma(s)</strong></div><div class="bar"><span style="width:'+(c.quantidade/disciplinas.length*100)+'%"></span></div></div>').join("")+'</div></article><article class="panel"><h3>Panorama do semestre</h3><div class="overview-number">'+disciplinas.length+' <span>turmas previstas</span></div><p>Alocações de 2027.1 registradas em declaração acadêmica de 20/11/2026. Horários, conteúdos e distribuição definitiva dependem de confirmação.</p><div class="overview-caption">'+areas.length+' cursos · '+horas+' horas previstas · '+new Set(disciplinas.map(d=>d.nome)).size+' disciplinas distintas</div></article></div></section>'+
'<section class="quick-section" aria-label="Acesso rápido"><div class="heading"><div><h2>Acesso rápido</h2><p class="subtitle">Encontre as informações mais importantes do seu semestre.</p></div></div><div class="quick-grid"><article class="panel quick-panel"><div class="quick-head"><h3>▤ &nbsp; Minhas disciplinas</h3><a href="#disciplinas">Ver todas →</a></div>'+disciplinas.slice(0,3).map(d=>'<a class="quick-item" href="#/disciplina/'+encodeURIComponent(d.id)+'"><span>'+safe(d.nome)+'</span><small>'+safe(d.turma)+'</small></a>').join("")+'</article><article class="panel quick-panel"><div class="quick-head"><h3>▣ &nbsp; Agenda e atividades</h3><a href="#agenda">Ver agenda →</a></div>'+((portal.eventos||[]).length?events():'<div class="quick-empty"><strong>Nenhum evento confirmado</strong><p>Os próximos prazos aparecerão aqui quando forem divulgados.</p></div>')+'</article><article class="panel quick-panel"><div class="quick-head"><h3>◉ &nbsp; Avisos</h3><a href="#avisos">Ver avisos →</a></div>'+notices()+'</article><article class="panel quick-panel"><div class="quick-head"><h3>▥ &nbsp; Materiais recentes</h3><a href="#materiais">Ver materiais →</a></div><div class="quick-empty"><strong>Nenhum arquivo público</strong><p>Materiais didáticos ficam nos ambientes autorizados do Google Classroom e Drive.</p></div></article></div></section>'+
'<section id="disciplinas"><div class="heading"><div><h2>Disciplinas</h2><p class="subtitle">Selecione uma disciplina para abrir seu espaço de aulas e atividades.</p></div></div><div class="filters"><label class="sr-only" for="busca">Pesquisar disciplina</label><input id="busca" type="search" placeholder="Pesquisar disciplina..." autocomplete="off"><label class="sr-only" for="area">Área</label><select id="area"><option value="">Todos os cursos</option>'+areas.map(a=>'<option>'+safe(a)+'</option>').join("")+'</select><label class="sr-only" for="periodo">Período</label><select id="periodo">'+periodOptions+'</select></div><div class="cards" id="course-list"></div><p id="empty" role="status">Nenhuma disciplina corresponde aos filtros informados.</p></section>'+
'<section id="agenda"><div class="heading"><div><h2>Agenda e atividades</h2><p class="subtitle">Datas e prazos reais serão publicados quando confirmados.</p></div></div><div class="two"><article class="panel"><h3>Próximos eventos</h3>'+events()+'</article><article class="panel"><h3>Atividades acadêmicas</h3><p class="placeholder">Nenhuma atividade oficial publicada. Consulte os espaços de disciplinas e os ambientes de acesso autorizados.</p></article></div></section>'+
'<section id="avisos"><div class="heading"><div><h2>Avisos acadêmicos</h2></div></div><div class="panel notice">'+notices()+'</div></section>'+
'<section id="materiais"><div class="heading"><div><h2>Acesso aos materiais</h2></div></div><div class="panel"><h3>Conteúdos protegidos</h3><p>Os materiais autorais não ficam armazenados neste repositório público. Os links do Google Drive e Classroom serão informados após conferência das permissões de cada turma. Não publique dados de estudantes, provas ou gabaritos no GitHub Pages.</p></div></section><section id="sobre" class="policy-section"><div class="panel"><h2>Sobre o AulaHub</h2><p>O AulaHub reúne informações acadêmicas de forma organizada. As turmas de 2027.1 são previstas e não substituem os sistemas oficiais da instituição.</p></div></section><section id="privacidade" class="policy-section"><div class="panel"><h2>Privacidade e autoria</h2><p>O portal público não solicita dados pessoais nem oferece login. Materiais didáticos restritos não são armazenados no GitHub Pages. O acesso a recursos externos depende das permissões apropriadas.</p></div></section>';
function filter(){const q=norm($("#busca").value),a=$("#area").value,p=$("#periodo").value;const arr=disciplinas.filter(d=>norm(d.nome).includes(q)&&(!a||a===d.curso)&&d.periodo===p);$("#course-list").innerHTML=arr.map(d=>'<article class="card"><div style="display:flex;justify-content:space-between;align-items:center;gap:10px"><span class="mark" aria-hidden="true">▣</span><span class="tag">'+(d.status==="confirmada"?"Confirmada":"Prevista · 2027.1")+'</span></div><h3>'+safe(d.nome)+'</h3><p>'+safe(d.descricao)+'</p><small class="muted">'+safe(d.curso)+' · '+safe(d.turma)+' · '+safe(d.cargaHoraria)+' h'+'</small><div class="card-foot"><span class="muted">Espaço da disciplina</span><a href="#/disciplina/'+encodeURIComponent(d.id)+'">Acessar →</a></div></article>').join("");$("#empty").style.display=arr.length?"none":"block"}
$("#busca").addEventListener("input",filter);$("#area").addEventListener("change",filter);$("#periodo").addEventListener("change",filter);filter();
}
function units(d){
 const stored=d.unidades||[];
 return '<div class="six">'+Array.from({length:6},(_,i)=>{
 const u=stored.find(x=>Number(x.numero)===i+1);
 const objetos=u?.objetos||[];
 return '<article class="unit"><strong>Unidade '+["I","II","III","IV","V","VI"][i]+'</strong><h3 class="unit-title">'+safe(u?.titulo||"Conteúdo a definir")+'</h3>'+
 (objetos.length?'<ol class="topic-list">'+objetos.map(o=>'<li><span class="topic-code">OC '+safe(o.codigo)+'</span> '+safe(o.tema)+'</li>').join("")+'</ol>':'<p class="muted">Conteúdos aguardando publicação</p>')+
 '<small class="muted">Materiais e atividades: aguardando autorização</small></article>'
 }).join("")+'</div>'
}
function references(d){
 const a=d.referencias||[];
 if(!a.length)return '<p class="placeholder">As referências serão adicionadas conforme o plano aprovado.</p>';
 return '<div class="reference-list">'+a.map(item=>{
 const url=validExternal(item.url);
 return '<div class="list-row"><strong>'+safe(item.titulo)+'</strong><small>'+safe(item.descricao||"")+'</small>'+(url?'<div><a href="'+safe(url)+'" target="_blank" rel="noopener noreferrer" class="reference-link">Consultar no acervo ↗</a></div>':'')+'</div>'
 }).join("")+'</div><p class="subtitle">O acesso às obras pode exigir autenticação na biblioteca institucional.</p>'
}
function unitOneLearning(d){
 const u=d.unidade1;
 if(!u)return "";
 const link=(r)=>{const url=validExternal(r.url);return url?'<a class="reference-link" href="'+safe(url)+'" target="_blank" rel="noopener noreferrer">Abrir recurso externo ↗</a>':''};
 return '<div class="unit1-learning"><div class="learn-banner"><span class="tag">Unidade I · OC 341-345</span><h3>Roteiro de estudo e aprendizagem</h3><p>'+safe(u.objetivo)+'</p><small>'+safe(u.status)+'</small></div>'+
 '<h3>Sequência didática sugerida</h3><div class="lesson-grid">'+u.encontros.map(e=>'<article class="lesson-card"><span class="tag">Encontro '+safe(e.numero)+' · OC '+safe(e.oc.join(", "))+'</span><h4>'+safe(e.titulo)+'</h4><p>'+safe(e.estrategia)+'</p><small><strong>Resultado proposto:</strong> '+safe(e.produto)+'</small></article>').join("")+'</div>'+
 '<h3>Leituras, vídeos e PDFs de apoio</h3><div class="learning-resources">'+u.recursosPublicos.map(r=>'<article class="resource-card"><span class="tag">'+safe(r.tipo)+'</span><h4>'+safe(r.titulo)+'</h4><p>'+safe(r.descricao)+'</p>'+link(r)+'</article>').join("")+'</div>'+
 '<h3>Atividade prática proposta</h3><div class="panel"><strong>'+safe(u.atividadePratica.titulo)+'</strong><p class="subtitle">'+safe(u.atividadePratica.modalidade)+' · '+safe(u.atividadePratica.duracaoSugeridaMinutos)+' minutos sugeridos</p><ol class="exercise-list">'+u.atividadePratica.etapas.map(x=>'<li>'+safe(x)+'</li>').join("")+'</ol><p class="subtitle">'+safe(u.atividadePratica.entregaSugerida)+'</p></div>'+
 '<h3>Exercícios de fixação</h3><div class="panel"><ol class="exercise-list">'+u.exercicios.map(x=>'<li>'+safe(x)+'</li>').join("")+'</ol></div>'+
 '<div class="placeholder">Os slides autorais e os links do Classroom ainda não estão publicados. Esta proposta não define prazos ou notas.</div></div>'
}
function rows(items,empty){return items?.length?items.map(item=>'<div class="list-row"><strong>'+safe(item.titulo)+'</strong><small>'+safe(item.descricao||"")+'</small></div>').join(""):'<p class="placeholder">'+safe(empty)+'</p>'}
function tabContent(d,tab){
switch(tab){
case "unidades":return '<h3>Organização por unidades de ensino</h3><p class="subtitle" style="margin-bottom:18px">Objetos de conhecimento organizados a partir do plano PPC 2026. Conteúdo proposto para 2027.1 sujeito à validação institucional.</p>'+units(d)+unitOneLearning(d);
case "aulas":return '<h3>Aulas e materiais didáticos</h3>'+rows(d.aulas,"Nenhuma aula ou material publicado ainda. Após autorização, os links dos arquivos ficarão disponíveis aqui.")+'<div style="margin-top:17px">'+linkOrPending(d.classroomUrl,"Abrir Google Classroom")+'</div>';
case "atividades":return '<h3>Atividades acadêmicas</h3>'+rows(d.atividades,"Não há atividades cadastradas para esta disciplina. Datas e instruções serão adicionadas quando confirmadas.");
case "cronograma":return '<h3>Cronograma da disciplina</h3>'+rows(d.cronograma,"Cronograma em preparação. Nenhuma data de aula ou avaliação foi confirmada.");
case "referencias":return '<h3>Bibliografia e referências</h3>'+references(d);
default:return '<div class="detail-grid"><div class="panel"><h3>Sobre a disciplina</h3><p>'+safe(d.descricao)+'</p><div class="list-row"><strong>Situação acadêmica</strong><small>'+(d.status==="confirmada"?"Turma confirmada":"Turma prevista na declaração - sujeita à confirmação")+'</small></div><div class="list-row"><strong>Plano de ensino</strong>'+linkOrPending(d.planoUrl,"Consultar plano de ensino")+'</div></div><div class="panel"><h3>Informações da turma</h3><div class="list-row"><strong>Período</strong><small>'+safe(d.periodo)+'</small></div><div class="list-row"><strong>Curso</strong><small>'+safe(d.curso)+'</small></div><div class="list-row"><strong>Turma</strong><small>'+safe(d.turma)+'</small></div><div class="list-row"><strong>Carga horária</strong><small>'+safe(d.cargaHoraria)+' h</small></div><div class="list-row"><strong>Classroom</strong>'+linkOrPending(d.classroomUrl,"Acessar turma")+'</div></div></div>';
}}
function classroomOverview(d){
 if(!d.classroom)return "";
 const c=d.classroom, m=c.materialInicial;
 const href=validExternal(d.classroomUrl);
 return '<section class="classroom-overview" aria-labelledby="classroom-title"><div class="classroom-head"><div><span class="kicker">AMBIENTE DE APRENDIZAGEM</span><h2 id="classroom-title">Sala Google Classroom</h2><p class="subtitle">Turma '+safe(d.turma)+' · '+safe(c.instituicao)+'</p></div><span class="tag">✓ '+safe(c.situacao)+'</span></div><div class="classroom-grid"><article class="classroom-card"><span class="classroom-icon" aria-hidden="true">▤</span><h3>Unidade I organizada</h3><p>'+safe(m?.titulo||"Unidade I")+'</p><span class="tag">'+safe(m?.situacao||"Em preparação")+'</span><a class="reference-link" href="#/disciplina/'+encodeURIComponent(d.id)+'/unidades">Consultar roteiro didático →</a></article><article class="classroom-card"><span class="classroom-icon" aria-hidden="true">▣</span><h3>Acesso aos materiais da turma</h3><p>O material de orientação foi informado como publicado no Classroom. Materiais restritos permanecem protegidos no serviço Google.</p>'+(href?'<a class="btn btn-primary" href="'+safe(href)+'" target="_blank" rel="noopener noreferrer">Abrir Google Classroom ↗</a>':'<span class="tag">Link da turma pendente de vinculação</span>')+'</article></div></section>'
}
function renderDetail(id,tab){
const d=(portal.disciplinas||[]).find(x=>x.id===id);
if(!d){app.innerHTML='<section><h1>Disciplina não encontrada</h1><p class="muted">Confira o endereço ou retorne ao catálogo.</p><a class="btn" href="#disciplinas">Voltar para disciplinas</a></section>';return}
const active=sections.some(s=>s[0]===tab)?tab:"visao";
app.innerHTML='<div class="detail-header"><div class="breadcrumb"><a href="#disciplinas">← Todas as disciplinas</a> / '+safe(d.periodo)+'</div><div class="kicker" style="margin-top:23px">Espaço da disciplina</div><h1>'+safe(d.nome)+'</h1><p class="lead">'+safe(d.descricao)+'</p><div class="detail-meta"><span class="tag">'+safe(d.area)+'</span><span class="tag">'+safe(d.periodo)+'</span><span class="tag">'+(d.status==="confirmada"?"Turma confirmada":"Prevista · 2027.1")+'</span></div></div>'+
+classroomOverview(d)+
'<div class="tabs" role="tablist" aria-label="Seções da disciplina">'+sections.map(([key,title])=>'<button type="button" class="tab" role="tab" aria-selected="'+(key===active)+'" data-tab="'+key+'">'+title+'</button>').join("")+'</div>'+
'<section id="conteudo-disciplina" role="tabpanel" aria-label="'+safe(sections.find(s=>s[0]===active)[1])+'">'+(active==="visao"?tabContent(d,active):'<div class="panel">'+tabContent(d,active)+'</div>')+'</section>';
document.querySelectorAll("[data-tab]").forEach(b=>b.addEventListener("click",()=>{const next=b.dataset.tab;location.hash="#/disciplina/"+encodeURIComponent(d.id)+"/"+next}));
}
function route(){let hash;try{hash=decodeURIComponent(location.hash.slice(1))}catch{hash=""}const match=hash.match(/^\/disciplina\/([^/]+)(?:\/([^/]+))?$/);if(match){renderDetail(match[1],match[2]||"visao");scrollTo({top:0,behavior:"instant"})}else{renderHome();if(hash&&hash[0]!=="/"){requestAnimationFrame(()=>{const target=document.getElementById(hash);if(target)target.scrollIntoView()})}else scrollTo({top:0,behavior:"instant"})}}
async function start(){try{const response=await fetch("./data/portal.json",{cache:"no-cache"});if(!response.ok)throw new Error("HTTP "+response.status);portal=await response.json();route();window.addEventListener("hashchange",route)}catch(e){app.innerHTML='<section><h1>Não foi possível carregar o portal</h1><p class="muted">Verifique a publicação do arquivo data/portal.json e recarregue a página.</p><button class="btn" onclick="location.reload()">Tentar novamente</button></section>';console.error("AulaHub:",e)}}
start();

/* AulaHub 0.5 - navegação lateral */
(function setupSidebar(){
  const body=document.body;
  const toggle=document.getElementById("collapse-sidebar");
  const open=document.getElementById("open-sidebar");
  const backdrop=document.getElementById("sidebar-backdrop");
  const side=document.getElementById("sidebar");
  const header=document.getElementById("header-section");
  const links=Array.from(document.querySelectorAll(".side-nav a[data-nav]"));
  const isMobile=()=>window.matchMedia("(max-width: 900px)").matches;
  function sync(){
    const mobileOpen=body.classList.contains("mobile-sidebar-open");
    const collapsed=body.classList.contains("sidebar-collapsed");
    open.setAttribute("aria-expanded",String(mobileOpen));
    toggle.setAttribute("aria-expanded",String(isMobile()?mobileOpen:!collapsed));
    toggle.setAttribute("aria-label",isMobile()?"Fechar menu lateral":collapsed?"Expandir menu lateral":"Recolher menu lateral");
    toggle.title=toggle.getAttribute("aria-label");
    backdrop.hidden=!mobileOpen;
    if(isMobile())side.removeAttribute("inert");
  }
  function closeMobile(restoreFocus=false){
    const wasOpen=body.classList.contains("mobile-sidebar-open");
    body.classList.remove("mobile-sidebar-open");
    sync();
    if(wasOpen&&restoreFocus)open.focus();
  }
  function toggleMenu(){
    if(isMobile()){
      body.classList.toggle("mobile-sidebar-open");
    }else{
      body.classList.toggle("sidebar-collapsed");
    }
    sync();
  }
  toggle.addEventListener("click",toggleMenu);
  open.addEventListener("click",toggleMenu);
  backdrop.addEventListener("click",()=>closeMobile(true));
  document.addEventListener("keydown",e=>{
    if(e.key==="Escape"&&body.classList.contains("mobile-sidebar-open"))closeMobile(true);
  });
  function updateActiveNavigation(){
    const hash=location.hash.slice(1);
    let selected="dashboard";
    if(hash.startsWith("/disciplina/"))selected="disciplinas";
    else if(["disciplinas","agenda","avisos","materiais","dashboard"].includes(hash))selected=hash;
    const labels={dashboard:"Dashboard Acadêmico",disciplinas:"Disciplinas",agenda:"Agenda e atividades",avisos:"Avisos acadêmicos",materiais:"Materiais didáticos"};
    header.textContent=labels[selected]||"Dashboard Acadêmico";
    for(const link of links){
      if(link.dataset.nav===selected)link.setAttribute("aria-current","page");
      else link.removeAttribute("aria-current");
    }
  }
  for(const link of links)link.addEventListener("click",()=>{
    closeMobile();
    // Mesmo quando o hash não muda, o link deve localizar a seção solicitada.
    if(location.hash===(link.getAttribute("href")))requestAnimationFrame(()=>document.getElementById(link.dataset.nav)?.scrollIntoView());
  });
  window.addEventListener("hashchange",()=>{
    updateActiveNavigation();
    closeMobile();
  });
  window.addEventListener("resize",()=>{
    if(!isMobile())body.classList.remove("mobile-sidebar-open");
    sync();
  });
  updateActiveNavigation();
  sync();
})();

(function setupTheme(){
const button=document.getElementById("theme-toggle");
if(!button)return;
function refresh(){const light=document.documentElement.dataset.theme==="light";button.setAttribute("aria-pressed",String(light));button.setAttribute("aria-label",light?"Ativar tema escuro":"Ativar tema claro");button.querySelector(".theme-icon").textContent=light?"☾":"☀";button.querySelector(".theme-label").textContent=light?"Tema escuro":"Tema claro"}
button.addEventListener("click",()=>{const next=document.documentElement.dataset.theme==="light"?"dark":"light";document.documentElement.dataset.theme=next;try{localStorage.setItem("aulahub-theme",next)}catch(e){}refresh()});refresh();
})();
