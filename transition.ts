// Selecionando os elementos do DOM
const body = document.body as HTMLBodyElement;
const btnTheme = document.querySelector<HTMLElement>('#btnTheme')!;
const sectionOne = document.querySelector<HTMLElement>('.section-one')!;
const sectionTwo = document.querySelector<HTMLElement>('.section-two')!;
const modalBackground = document.querySelector<HTMLImageElement>('#modalBackground')!;
const btnTransition = document.querySelector<HTMLElement>('#buttons')!;
const inputEmail = document.querySelector<HTMLInputElement>('#email')!;
const inputPassword = document.querySelector<HTMLInputElement>('#password')!;
const bgSelect = document.querySelector<HTMLElement>('#bgSelect')!;
const btnLogin = document.querySelector<HTMLElement>('#btnLogin')!;
const btnRegister = document.querySelector<HTMLElement>('#btnRegister')!;
const formLogin = document.querySelector<HTMLFormElement>('#formLogin')!;
const formRegister = document.querySelector<HTMLFormElement>('#formRegister')!;
const btnForgotPassword = document.querySelector<HTMLElement>('#btnForgotPassword')!;

// Função para alternar classes
const toggleClass = (element: HTMLElement, ...classNames: string[]): void => {
    classNames.forEach(className => element.classList.toggle(className));
};

// Alterna o tema
btnTheme.addEventListener('click', (): void => {
    toggleClass(body, 'dark');
    toggleClass(btnTheme, 'fa-moon', 'fa-sun');
});

// Efeito de transição no botão
const toggleHover = (): void => toggleClass(bgSelect, 'select-hover');
btnTransition.addEventListener('mouseover', toggleHover);
btnTransition.addEventListener('mouseout', toggleHover);

// Lógica de mudança de background e transições
btnTransition.addEventListener('click', (): void => {
    toggleClass(bgSelect, 'active');
    toggleClass(btnLogin, 'active');
    toggleClass(formLogin, 'transition');
    toggleClass(btnRegister, 'active');
    toggleClass(formRegister, 'transition');

    const currentBackground = modalBackground.getAttribute('alt');
    const newBackground = currentBackground === 'Rayquaza' ? 'Pokeball' : 'Rayquaza';
    const newSrc = `./assets/${newBackground.toLowerCase()}.gif`;

    modalBackground.src = newSrc;
    modalBackground.alt = newBackground;
});

// Esqueci a senha
btnForgotPassword.addEventListener('click', (e: Event): void => {
    e.preventDefault();
    toggleClass(sectionOne, 'hidden');
    toggleClass(sectionTwo, 'hidden');
});

// Submissão do formulário de login
formLogin.addEventListener('submit', (e: Event): void => {
    e.preventDefault();
    alert(`Email: ${inputEmail.value}\nSenha: ${inputPassword.value}`);
});