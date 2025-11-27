# Board de Tarefas - DNC

Gerenciador de tarefas desenvolvido como parte do desafio DNC Technologies, utilizando HTML5, CSS3 e JavaScript puro.

## 📋 Sobre o Projeto

Esta aplicação é um board de gerenciamento de tarefas totalmente responsivo, desenvolvido seguindo o design fornecido no Figma e os requisitos do desafio DNC. A aplicação permite adicionar, visualizar e concluir tarefas de forma dinâmica, sem necessidade de recarregar a página.

## ✨ Funcionalidades

- **Carregamento Automático**: Lista de tarefas carregada automaticamente na renderização inicial
- **Adicionar Tarefas**: Formulário para adicionar novas tarefas com nome e etiqueta
- **Concluir Tarefas**: Botão "Concluir" que marca a tarefa como concluída
- **Feedback Visual**: 
  - Texto riscado (strikethrough) para tarefas concluídas
  - Botão "Concluir" substituído por ícone de check verde
  - Contador de tarefas concluídas atualizado automaticamente
- **Persistência**: Tarefas salvas no localStorage do navegador
- **Responsividade**: Layout adaptável para mobile e desktop (mobile-first)

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica com tags `<header>`, `<main>`, `<section>`, `<footer>`
- **CSS3**: Estilização moderna com variáveis CSS, Flexbox e media queries
- **JavaScript ES6+**: Manipulação do DOM, gerenciamento de estado e localStorage
- **Google Fonts**: Fonte Rubik conforme especificação do design

## 📱 Responsividade

A aplicação foi desenvolvida seguindo a abordagem **mobile-first**, garantindo uma experiência otimizada em todos os dispositivos:

- **Mobile**: Layout vertical com elementos empilhados
- **Tablet (≥640px)**: Formulário horizontal
- **Desktop (≥768px)**: Layout centralizado com largura máxima
- **Desktop Large (≥1024px)**: Largura máxima expandida

## 🎨 Design

O design segue fielmente o protótipo fornecido no Figma, incluindo:

- Paleta de cores profissional (azul primário, verde sucesso, tons de cinza)
- Tipografia Rubik em diferentes pesos
- Espaçamentos consistentes usando unidades relativas (rem)
- Sombras suaves para profundidade
- Bordas arredondadas e transições suaves

## 📂 Estrutura de Arquivos

```
board-tarefas-dnc/
├── index.html          # Estrutura HTML da aplicação
├── css/
│   └── style.css       # Estilos CSS responsivos
├── js/
│   └── app.js          # Lógica JavaScript
├── assets/             # Pasta para recursos adicionais
└── README.md           # Documentação do projeto
```

## 🔧 Como Usar

1. **Clone ou baixe os arquivos** do projeto
2. **Abra o arquivo `index.html`** em qualquer navegador moderno
3. **Adicione tarefas** preenchendo o formulário:
   - Digite o nome da tarefa
   - Digite a etiqueta/categoria
   - Clique no botão "+" ou pressione Enter
4. **Conclua tarefas** clicando no botão "Concluir"
5. **Acompanhe o progresso** pelo contador na parte inferior

## 💾 Persistência de Dados

A aplicação utiliza o **localStorage** do navegador para salvar as tarefas. Isso significa que:

- As tarefas permanecem salvas mesmo após fechar o navegador
- Cada navegador/dispositivo mantém sua própria lista de tarefas
- Para limpar os dados, use as ferramentas de desenvolvedor do navegador

## ✅ Requisitos Atendidos

### Semântica (25 pontos)
- ✅ Tags semânticas HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`)
- ✅ Atributos ARIA para acessibilidade

### Responsividade (25 pontos)
- ✅ Layout mobile-first
- ✅ Media queries para tablet e desktop
- ✅ Unidades relativas (rem)
- ✅ Design fiel ao Figma em todas as resoluções

### Funcionalidades (25 pontos)
- ✅ Lista de tarefas carregada ao abrir a tela
- ✅ Adicionar novas tarefas via formulário
- ✅ Marcar tarefas como concluídas
- ✅ Atualização de estados (botão → check, texto riscado)
- ✅ Contador de tarefas concluídas

### Boas Práticas (25 pontos)
- ✅ Código legível e bem organizado
- ✅ Variáveis e funções com nomes descritivos
- ✅ Funções com responsabilidade única
- ✅ Comentários explicativos
- ✅ Separação de concerns (HTML, CSS, JS)

## 🎯 Critérios de Avaliação

| Critério | Descrição | Status |
|----------|-----------|--------|
| **Semântica** | Tags semânticas HTML5 | ✅ Completo |
| **Responsividade** | Layout funcional mobile/desktop | ✅ Completo |
| **Requisitos** | Todas funcionalidades implementadas | ✅ Completo |
| **Boas Práticas** | Código limpo e organizado | ✅ Completo |

## 📝 Observações Técnicas

### JavaScript
- Uso de `const` e `let` (sem `var`)
- Funções puras e reutilizáveis
- Event listeners com arrow functions
- Manipulação segura do DOM
- Validação de dados do formulário

### CSS
- Variáveis CSS para manutenibilidade
- Reset CSS básico
- Transições suaves para interações
- Hover states para melhor UX
- Box-sizing border-box global

### HTML
- Formulário com validação nativa (required)
- Labels implícitos e explícitos
- Estrutura semântica clara
- Meta tags para responsividade

## 🌐 Compatibilidade

A aplicação é compatível com todos os navegadores modernos:

- ✅ Chrome/Edge (versões recentes)
- ✅ Firefox (versões recentes)
- ✅ Safari (versões recentes)
- ✅ Opera (versões recentes)

## 📄 Licença

Este projeto foi desenvolvido como parte do desafio DNC Technologies para fins educacionais.

---

**Desenvolvido com ❤️ seguindo as melhores práticas de desenvolvimento front-end**
