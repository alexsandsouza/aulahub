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

## Incremento 0.4 - Dashboard de alocações 2027.1

Fonte: declaração docente emitida em 20/11/2026, seção 2027/1. Os sete registros são **previstos** e não equivalem à confirmação de horário/grade definitiva.

| ID | Requisito | Verificação |
| --- | --- | --- |
| RF-023 | Cadastrar todas as sete alocações previstas | Cada registro tem curso, código de turma, nome da disciplina e 66 horas. |
| RF-024 | Mostrar KPI de turmas, cursos, horas e atividades | Dashboard calcula 7, 4, 462 h e zero atividades publicadas a partir do JSON. |
| RF-025 | Mostrar distribuição de turmas por curso | Gráfico textual/visual apresenta ADS 2, Eng. Computação 1, Eng. Software 2, SI 2. |
| RF-026 | Filtrar catálogo por curso | Seleção de curso combina com pesquisa por disciplina e período. |
| RF-027 | Distinguir previsto de confirmado | Cards e páginas individuais identificam alocações previstas sem simular dados oficiais definitivos. |

Não há aulas, planos, horários nem atividades fictícias publicadas. Testes de interface e deploy público ainda precisam de validação no navegador.


## Incremento 0.5 - Navegação por menu lateral

| ID | Funcionalidade | Critério de aceite |
| --- | --- | --- |
| RF-028 | Menu lateral para o portal | Exibir Dashboard, Disciplinas, Agenda, Avisos e Materiais em menu persistente no desktop. |
| RF-029 | Recolhimento do menu no desktop | Botão alterna entre largura completa e modo compacto com ícones e títulos acessíveis. |
| RF-030 | Navegação móvel | Botão abre e fecha menu sobreposto, com fechamento por backdrop, Escape ou clique em link. |
| RF-031 | Destacar seção ativa | Link ativo recebe `aria-current="page"` e destaque visual, incluindo as páginas individuais de disciplina. |
| RNF-UX-002 | Responsividade do painel | Painel adapta a navegação sem barras laterais horizontais em telas estreitas. |

**Nota:** este incremento não inclui autenticação ou backend; acessos a documentos permanecem governados pelo Drive/Classroom. Testes manuais em dispositivos e verificação da implantação pública permanecem pendentes.


## Incremento 0.6 - Visual premium e temas claro/escuro (20/11/2026)

| ID | Requisito | Critério de aceite |
| --- | --- | --- |
| RF-032 | Oferecer tema claro e escuro | Controle no cabeçalho alterna os temas, com rótulo e estado acessível. |
| RF-033 | Persistir preferência visual localmente | Preferência é guardada em localStorage quando disponível, sem depender de login. |
| RF-034 | Hero moderno | Apresenta mensagem concisa, chamadas funcionais e ilustração decorativa CSS. |
| RF-035 | Painéis rápidos do dashboard | Mostra disciplinas reais previstas, agenda, avisos e materiais conforme dados disponíveis; estados vazios claros. |
| RF-036 | Footer institucional útil | Inclui rotas para disciplinas, agenda, avisos, acesso aos materiais, sobre e privacidade. |
| RNF-UX-003 | Layout premium responsivo | Cards e hero refluem em telas menores, com hierarquia visual consistente. |

O mockup é referência **estética**, não fonte de datas ou arquivos publicados. Nenhuma das atividades e PDFs demonstrativos foi cadastrada. Verificação de código-fonte executada; testes visuais em navegadores e acessibilidade assistiva continuam pendentes.


## Incremento 0.7 - Organização da disciplina Sistemas Operacionais para 2027.1

**Fonte de referência:** `1. PLANO DE ENSINO APRENDIZAGEM - 2026.2 - SISTEMAS OPERACIONAIS - CORRIGIDO(4).docx`, PPC 2026, 66 h, identificação específica de Análise e Desenvolvimento de Sistemas. Esta organização não substitui o plano aprovado para 2027.1.

| ID | Requisito | Critério de aceite |
| --- | --- | --- |
| RF-037 | Organizar três turmas previstas de SO | IDs ADS262M01-SED, ENGS262M01-SED e SIS262N01-SED mantidos individualizados. |
| RF-038 | Apresentar seis unidades didáticas | Exibir unidades I-VI para cada turma de SO. |
| RF-039 | Relacionar os objetos de conhecimento | Exibir 31 OCs numerados 341 a 371, agrupados conforme o plano de referência. |
| RF-040 | Registrar bibliografia básica e complementar | Exibir 3 referências básicas e 5 complementares; links HTTPS apenas quando constarem do plano. |
| RF-041 | Preservar estado de materiais protegidos | Não hospedar slides, avaliações, gabaritos ou arquivos autorais no GitHub Pages. |
| RF-042 | Comunicar status de validade | Indicar explicitamente necessidade de validar 2027.1, especialmente os cursos ENGS e SI. |

**Pendências:** obter planos aprovados de 2027.1 específicos para cada curso, definir datas, preparar materiais e liberar links com acesso controlado no Drive/Classroom. Não há cronogramas, aulas ou atividades de 2027.1 confirmados neste incremento.


## Incremento 0.8 - Roteiro de aprendizagem da Unidade I de SO

Base curricular: Plano de Ensino Aprendizagem de Sistemas Operacionais PPC 2026, versão corrigida (ADS, 66 h), objetos 341 a 345. Aplicação em 2027.1 e às turmas de ENGS e SI requer validação.

| ID | Requisito | Critério de aceite |
| --- | --- | --- |
| RF-043 | Organizar cinco tópicos em encontros propostos | Encontros 1-5 vinculados respectivamente aos OCs 341-345. |
| RF-044 | Exibir recursos públicos contextualizados | Dois vídeos e dois PDFs públicos, com indicação de fonte e link externo HTTPS. |
| RF-045 | Apresentar proposta de atividade prática | Roteiro investigativo de 60 minutos sugeridos, sem atribuição de nota/prazo. |
| RF-046 | Disponibilizar exercícios de fixação | Dez questões sem gabarito no portal público. |
| RF-047 | Separar planejamento e publicação oficial | Indicar que slides autorais, atividades avaliativas e Classroom ainda aguardam liberação. |

O conteúdo pedagógico proposto foi elaborado a partir dos tópicos do plano e não se confunde com transcrição literal do documento. Os links externos não garantem acesso gratuito permanente e devem ser revisados. Testes visuais de navegação e publicação não executados.

## Incremento 0.9 - Primeira turma no Classroom

- Turma ADS262M01-SED, Sistemas Operacionais, 2027.1: sala criada pelo professor no Google Classroom.
- Primeiro material de orientação da Unidade I: publicação informada pelo professor.
- Tela de turma no AulaHub apresenta o status, o resumo da Unidade I e o atalho interno para o roteiro didático.
- Link completo de acesso à turma ainda não fornecido. Botão externo permanece pendente; código/URL de convite não devem ser incluídos no repositório.
- As duas outras turmas de Sistemas Operacionais permanecem com seus próprios estados, sem simular publicação no Classroom.

RF-048: Exibir estado real de criação da sala; RF-049: Diferenciar publicação informada pelo professor de validação externa; RF-050: Não inventar URL de sala.
