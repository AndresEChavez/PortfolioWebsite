const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const button = contactForm.querySelector('.submit-btn');
  button.disabled = true;
  formStatus.textContent = 'Sending...';
  formStatus.className = 'form-status';

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      formStatus.textContent = 'Success! Your message was sent.';
      formStatus.className = 'form-status success';
      contactForm.reset();
    } else {
      throw new Error('Request failed');
    }
  } catch (error) {
    formStatus.textContent = 'Something went wrong. Please try again.';
    formStatus.className = 'form-status error';
  } finally {
    button.disabled = false;
  }
});