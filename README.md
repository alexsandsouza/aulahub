# 📚 AulaHub

**Seu espaço de aprendizagem.**

Portal acadêmico do **Prof. Alexsand Farias** para organizar disciplinas, aulas, cronogramas, planos de ensino, materiais didáticos e atividades, com integração ao Google Classroom.

> **Status:** desenvolvimento inicial. As disciplinas e os cronogramas de 2027.1 serão cadastrados após confirmação institucional.

## 🎯 Objetivo

Facilitar aos estudantes a localização dos recursos acadêmicos por semestre, curso, turma e disciplina, mantendo uma experiência clara e responsiva.

## 🧭 Como funcionará

- **AulaHub:** catálogo público de disciplinas, organização de conteúdos e links de acesso.
- **Google Drive:** hospedagem dos materiais autorais com permissões de acesso restritas.
- **Google Classroom:** comunicação com turmas, atividades, entregas e acompanhamento pedagógico.

**Importante:** o GitHub Pages é público. Arquivos didáticos restritos, dados pessoais, credenciais e avaliações privadas **não devem ser colocados neste repositório**. Apenas alunos autorizados poderão abrir os documentos protegidos pelo Google.

## 🧩 Desenvolvimento guiado pelo SPECTION

O projeto segue o framework [SPECTION](https://github.com/alexsandsouza/spection) com os estágios Discover, Specify, Architect, Plan, Build, Verify e Release.

| Documento | Finalidade |
| --- | --- |
| [Product Brief](docs/product-brief.md) | Problema, público, visão e limites do produto |
| [PRD](docs/prd.md) | Requisitos identificados e critérios de aceite |
| [Arquitetura](docs/architecture.md) | Componentes, integrações e segurança |
| [AGENTS.md](AGENTS.md) | Instruções para agentes de desenvolvimento |

## 🚀 Próximos marcos

1. Confirmar disciplinas e turmas de 2027.1.
2. Implementar a interface responsiva e o catálogo por semestre.
3. Adicionar cronogramas e planos de ensino aprovados.
4. Configurar links restritos do Drive e Classroom.
5. Validar a experiência de acesso do estudante.
6. Publicar a aplicação no GitHub Pages.

## 🔗 Endereços

- **Repositório:** https://github.com/alexsandsouza/aulahub
- **Site previsto (ainda não publicado):** https://alexsandsouza.github.io/aulahub/

## 🔒 Autoria e utilização

© 2026 Professor Alexsand Farias de Souza. Todos os direitos reservados, salvo autorizações expressas e direitos de terceiros. Este repositório não concede licença geral de reutilização. Os direitos e as condições de uso dos materiais acadêmicos estão sujeitos também às regras institucionais aplicáveis.

---

Desenvolvido para uma experiência de aprendizagem organizada, acessível e responsável.


## ✅ Incremento 0.3 - Dashboard e páginas de disciplinas

A versão do código inclui:
- Dashboard com indicadores baseados no catálogo público.
- Catálogo com pesquisa, filtro por área e semestre.
- Páginas individuais com seis abas: visão geral, unidades, aulas/materiais, atividades, cronograma e referências.
- Estrutura para seis unidades de ensino por disciplina.
- Avisos, agenda e estados vazios sem inventar informações acadêmicas.
- Layout responsivo para desktop e dispositivos móveis.

### Editar as disciplinas

Edite `data/portal.json`. Preencha somente dados públicos que já estejam confirmados. A oferta de 2027.1 permanece em demonstração até publicação oficial. Não cadastre URL de edição do Drive, tokens, nomes de alunos, materiais restritos ou compartilhamento aberto.

### Testar localmente

Este portal carrega `data/portal.json` via `fetch`, portanto use um servidor HTTP local, por exemplo:

```bash
python -m http.server 8000
```

Em seguida, abra `http://localhost:8000`. Apenas abrir `index.html` como arquivo local pode bloquear a leitura do JSON.

### Publicação

O GitHub Pages está configurado pelo proprietário do repositório. URL informada: https://alexsandsouza.github.io/aulahub/

### Situação da release

Código implementado e versionado; verificação manual no site publicado e testes em dispositivos ainda pendentes.

## Painel 2027.1 - Catálogo previsto

O arquivo `data/portal.json` contém **7 alocações previstas** distribuídas em **4 cursos**, totalizando **462 horas** (66 h cada), transcritas da declaração de disciplinas de 20/11/2026. Os registros são planejamento e estão sujeitos a alterações institucionais.

O dashboard apresenta indicadores automáticos, barras de distribuição por curso e filtros. Cada turma tem página própria; conteúdos, planos, bibliografias, cronogramas e vínculos de Classroom são publicados somente quando confirmados.

Para atualizar uma turma, edite o item de mesmo `id` em `data/portal.json`. Não hospede materiais restritos ou dados pessoais nesse JSON público.


## Interface 0.5 - Dashboard com menu lateral

O AulaHub possui agora navegação lateral com os itens Dashboard, Disciplinas, Agenda e atividades, Avisos e Materiais. No desktop, a barra é fixa e recolhível; em telas pequenas, abre em painel sobreposto e fecha ao selecionar uma seção, ao pressionar Escape ou ao tocar fora dela. A seção ativa é destacada.

A organização dos dados previstos de 2027.1 foi preservada, assim como as páginas individuais de disciplinas e a separação de materiais restritos do GitHub Pages.
