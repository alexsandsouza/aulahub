# AulaHub - PRD (Requisitos do Produto)

**Versão:** 0.1 | **Estado:** especificação inicial, sujeita à validação.

| ID | Requisito | Critério de aceite |
| --- | --- | --- |
| RF-001 | Listar disciplinas por semestre | O estudante seleciona um período e vê apenas as turmas correspondentes. |
| RF-002 | Filtrar por curso e pesquisar disciplina | Filtros funcionam em desktop e celular. |
| RF-003 | Exibir página por turma | Curso, turma, disciplina e status aparecem com clareza. |
| RF-004 | Disponibilizar cronograma | Apresenta somente datas confirmadas ou indica 'A definir'. |
| RF-005 | Apresentar plano de ensino | Link disponível apenas após autorização/publicação do documento. |
| RF-006 | Organizar aulas, slides e referências | Recursos rotulados por unidade ou aula e com acesso apropriado. |
| RF-007 | Integrar Google Classroom | Link específico por turma, sem expor códigos privados de entrada. |
| RF-008 | Preservar histórico | Semestres antigos permanecem consultáveis conforme política de conteúdo. |
| RF-009 | Identificar recursos restritos | Portal informa claramente quando o acesso exige autorização. |
| RNF-SEC-001 | Proteger materiais autorais | Nenhum material restrito é armazenado no repositório público ou no bundle do site. |
| RNF-SEC-002 | Restringir acesso no provedor | Arquivos sensíveis usam compartilhamento restrito por conta/grupo; não usar 'qualquer pessoa com o link'. |
| RNF-SEC-003 | Evitar falsas proteções | Não usar senha em JavaScript, links ocultos ou bloqueio do botão direito como controle de acesso. |
| RNF-PRI-001 | Preservar privacidade | Não publicar notas, listas nominais de alunos ou informações pessoais. |
| RNF-UX-001 | Responsividade | Conteúdo legível e navegável no celular e desktop. |
| RNF-ACC-001 | Acessibilidade | Navegação por teclado, contraste, rótulos e títulos semânticos. |
| RNF-MAN-001 | Atualização simples | Disciplinas e links editáveis em arquivos de dados sem refazer o layout. |

## Regras de conteúdo
1. Disciplinas do semestre futuro devem indicar 'Prevista - a confirmar' até conferência institucional.
2. Links de Drive e Classroom devem ser testados com uma conta de aluno autorizada.
3. Restrições de download/impressão/cópia, quando disponíveis, reduzem cópias casuais, mas não garantem impossibilidade de captura.
4. O aviso de direitos autorais não substitui controle de acesso nem análise das regras institucionais.

## Rastreabilidade
Cada funcionalidade nova deve fazer referência ao ID de requisito correspondente em alterações, revisões e testes.


## Incremento implementado - Dashboard Acadêmico 0.2 (2026-11-20)

| ID | Requisito | Situação | Critério de verificação |
| --- | --- | --- | --- |
| RF-010 | Exibir dashboard inicial | Implementado | Quatro indicadores visíveis, com números claramente rotulados e sem alegar dados oficiais. |
| RF-011 | Pesquisar disciplinas sem diferenciar acentos | Implementado | Filtro por texto encontra resultados com e sem acentuação. |
| RF-012 | Filtrar disciplinas por área | Implementado | Seleção de área modifica a lista, inclusive combinada com a busca. |
| RF-013 | Exibir estado vazio para filtro sem correspondência | Implementado | Mensagem informativa é exibida. |
| RF-014 | Reservar seções de agenda e avisos | Implementado | Não apresenta datas ou atividades não confirmadas. |
| RF-015 | Dashboard por semestre, curso e turma reais | Pendente | Depende de distribuição acadêmica oficial. |

### Verificação para a release 0.2
- Conferir responsividade em celular, tablet e desktop.
- Testar pesquisa, filtros e mensagem de ausência de resultados.
- Validar links e navegação por teclado.
- Revisar semântica e contraste.
- Confirmar implantação no GitHub Pages após a atualização da branch main.

**Observação:** as três disciplinas são exemplos; o número exibido no indicador se refere a cards demonstrativos, não a ofertas confirmadas. Os indicadores de atividades, turmas e eventos oficiais permanecem em zero até sua publicação.


## Incremento 0.3 - Portal por disciplina (20/11/2026)

| ID | Requisito | Estado | Aceite |
| --- | --- | --- | --- |
| RF-016 | Abrir espaço individual de disciplina | Implementado | Clique no catálogo abre rota `#/disciplina/{id}`. |
| RF-017 | Navegação por seis áreas da disciplina | Implementado | Visão geral, unidades, aulas, atividades, cronograma e referências. |
| RF-018 | Estruturar seis unidades de ensino | Implementado | Unidades I-VI aparecem mesmo sem conteúdo, com indicação honesta de pendência. |
| RF-019 | Separar dados acadêmicos públicos do layout | Implementado | Catálogo e avisos são lidos de `data/portal.json`. |
| RF-020 | Mostrar apenas links externos HTTPS autorizados | Implementado | Sem URL configurada, portal exibe mensagem de indisponibilidade. |
| RF-021 | Atualizar indicadores do dashboard a partir do catálogo | Implementado | Exibição distingue exemplos de turmas oficialmente confirmadas. |
| RF-022 | Cadastrar turmas, aulas, cronogramas e recursos reais | Pendente | Depende de distribuição e aprovação institucional. |

### Checklist manual de verificação
- Abrir diretamente `#/disciplina/sistemas-operacionais`.
- Alternar todas as seis abas e verificar o histórico de navegação.
- Pesquisar disciplinas com e sem acentos.
- Filtrar áreas, verificar estado vazio.
- Confirmar que o JSON não contém informações pessoais ou documentos restritos.
- Conferir comportamento no celular e com navegação por teclado.
- Confirmar deploy do GitHub Pages da branch main.

Testes manuais e validação por usuário final continuam **pendentes**, até execução documentada.
