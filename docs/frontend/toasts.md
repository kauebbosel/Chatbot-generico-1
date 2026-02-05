## Toasts dinâmicos (notificações) 

### Objetivo
Exibir notificações (toasts) dinâmicas na interface, buscando periodicamente mensagens pendentes no backend e renderizando-as com estilos diferenciados por categoria.

### Arquivos envolvidos
- `app/static/js/api.js` (funções `checkNewToasts` e `renderToast`)
- `app/static/css/toasts.css` (variáveis CSS, layout e animações dos toasts)
- Elemento HTML `#toast-wrapper` (container onde os toasts são inseridos)

### Fluxo de funcionamento

1. A função `checkNewToasts` é chamada a cada 10 segundos via `setInterval`.
2. Ela faz um `fetch` para o endpoint `/toasts/pendentes`.
3. Se a resposta for `200 OK`, converte o JSON e, se houver dados e a função global `window.showToast` existir, chama `window.showToast(toastData)`.
4. A função `renderToast(data)` cria dinamicamente um `div` com a classe `procel-toast`, preenchendo:
   - título (`data.titulo`)
   - mensagem (`data.mensagem`)
   - botões (`data.acoes`, com propriedade opcional `primary`)
5. Cada toast é adicionado dentro do wrapper `#toast-wrapper` e removido automaticamente após 10 segundos.

### Estrutura de dados esperada

O objeto `data` esperado em `renderToast(data)` segue o formato:
{
  categoria: "humor" | "tecnico" | "alerta",
  titulo: "Texto em negrito no topo",
  mensagem: "Texto descritivo do toast",
  acoes: [
    {
      label: "Texto do botão",
      primary: true | false
    },
    // ...
  ]
}