document.getElementById("ContactForm").addEventListener("submit", async (event) => 
{
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
        const response = await fetch('https://formsubmit.co/xtaketb@gmail.com', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

    
        if (response.ok) {
            form.reset();
            const successModal = new bootstrap.Modal(document.getElementById('successModal'));
            document.getElementById('successModalLabel').innerHTML = `Enviado`;
            document.getElementById('response-message').innerHTML = `✅ Mensaje enviado con éxito.`;
            successModal.show(); 
        } else {
            const successModal = new bootstrap.Modal(document.getElementById('successModal'));
            document.getElementById('successModalLabel').innerHTML = `Error`;
            document.getElementById('response-message').innerHTML = `❌ Error al enviar: ` + (result.message || 'Inténtalo de nuevo.');
            successModal.show(); 
        }
    } catch (error) {
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
        document.getElementById('successModalLabel').innerHTML = `Error`;
        document.getElementById('response-message').innerHTML = `❌ Error de red: ` + error.message;
        successModal.show(); 
    }
});