<script lang="ts">
  export type SocialLinkProps = {
    href: string;
    label: string;
    icon: 'facebook' | 'youtube';
  };

  const { href, label, icon }: SocialLinkProps = $props();
</script>

<a
  {href}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={label}
  class="text-base-content hover:text-primary transition-colors duration-300 w-10 h-10 inline-block"
>
  {#if icon === 'facebook'}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 256 256"
      fill="currentColor"
    >
      <path
        fill="#1877f2"
        d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
      />
      <path
        fill="#fff"
        d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
      />
    </svg>
  {:else if icon === 'youtube'}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 256 180"
      fill="currentColor"
    >
      <path
        fill="#f00"
        d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"
      />
      <path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z" />
    </svg>
  {/if}
</a>
