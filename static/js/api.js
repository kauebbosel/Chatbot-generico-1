async function checkNewToasts() {
    try {
        // GET: Pedindo dados ao servidor
        const response = await fetch('http://localhost:8000/api/v1/toasts/check'); 
        if (response.ok) {
            const toastData = await response.json();
            showToast(toastData);
        }
    } catch (err) {
        console.log("Servidor ainda não tem a rota de toasts...");
    }
}

// Verifica a cada 10 segundos
setInterval(checkNewToasts, 10000);