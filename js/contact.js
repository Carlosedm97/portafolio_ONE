const $form = document.querySelector('.form');
const $buttonMailto = document.querySelector('.mailto');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    $buttonMailto.setAttribute('href', `mailto:carlosedm97@gmail.com?subject=${form.get('asunto')}&body=${form.get('mensaje')}`)
    $buttonMailto.click()
}