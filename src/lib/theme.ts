export const toggleTheme = () => {
  const root = document.documentElement;
  const isLight = root.getAttribute('data-theme') === 'light';
  const theme = isLight ? 'dark' : 'light';
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};

export const initializeTheme = () => {
  const localTheme = localStorage.getItem('theme') ?? 'dark';
  document.documentElement.setAttribute('data-theme', localTheme);
};
