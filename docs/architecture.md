# AulaHub - Arquitetura inicial

**Status:** proposta para MVP.

## Componentes
- **GitHub Pages:** publica apenas frontend estático e informações aprovadas para divulgação.
- **HTML, CSS, JavaScript:** navegação, filtro e apresentação do portal.
- **JSON versionado:** metadados públicos de períodos, cursos, turmas e recursos.
- **Google Drive:** armazenamento de arquivos autorais com compartilhamento restrito.
- **Google Classroom:** comunicação, atividades e entregas, com autenticação do Google.

## Fluxo de acesso
1. Visitante abre o AulaHub público.
2. Seleciona semestre, curso e turma.
3. Acessa informações públicas.
4. Para material protegido, segue o link externo para Drive/Classroom.
5. O serviço Google verifica as permissões do usuário.

**Não há autenticação no GitHub Pages.** Nunca assumir que esconder um botão ou URL protege arquivos.

## Conteúdo
Guardar no JSON público apenas nomes, descrições, datas aprovadas e URLs que podem ser divulgadas. Não publicar URLs de edição, segredos, dados de alunos nem arquivos restritos.

## Operação
- Atualizar recursos após publicação/autorização.
- Revisar links e permissões a cada início de semestre.
- Validar a experiência com perfil de estudante.
- Preservar versões e histórico via Git.

## Decisões pendentes
Identidade visual definitiva, modelo de dados, forma de versionar cronogramas e estrutura de navegação por turmas.
