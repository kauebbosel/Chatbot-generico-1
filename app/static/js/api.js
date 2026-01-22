// app/static/js/api.js

async function checkNewToasts() {
    try {
        // Ajustado para bater exatamente com a rota definida no FastAPI
        const response = await fetch('/toasts/pendentes');
        
        if (response.ok) {
            const toastData = await response.json();
            
            // Verificação de segurança: só chama se houver dados e a função existir
            if (toastData && window.showToast) {
                window.showToast(toastData);
            }
        }
    } catch (err) {
        console.debug("Verificação de toasts: servidor não disponível");
    }
}

// Verifica a cada 10 segundos
setInterval(checkNewToasts, 10000);