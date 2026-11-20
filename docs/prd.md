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
