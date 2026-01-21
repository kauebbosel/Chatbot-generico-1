function renderToast(data) {
    const wrapper = document.getElementById('toast-wrapper');
    const toast = document.createElement('div');
    toast.className = 'procel-toast';
    
    // Mapeia a cor do CSS
    const cores = { humor: 'var(--humor)', tecnico: 'var(--tecnico)', alerta: 'var(--alerta)' };
    toast.style.setProperty('--cor', cores[data.categoria] || '#2ecc71');

    toast.innerHTML = `
        <div style="font-weight:bold">${data.titulo}</div>
        <p style="font-size:14px; color:#555">${data.mensagem}</p>
        <div class="toast-actions">
            ${data.acoes.map(acao => `
                <button class="btn-toast ${acao.primary ? 'btn-primary' : ''}" 
                        onclick="this.parentElement.parentElement.remove()">
                    ${acao.label}
                </button>
            `).join('')}
        </div>
    `;

    wrapper.appendChild(toast);
    // Auto-remove após 8 segundos
    setTimeout(() => { if(toast) toast.remove(); }, 8000);
}