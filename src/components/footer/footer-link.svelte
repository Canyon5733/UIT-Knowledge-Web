<script lang="ts" module>
  export type FooterLinkProps = {
    href: string;
    label: string;
  };
</script>

<script lang="ts">
  const { href, label }: FooterLinkProps = $props();
</script>

<a
  {href}
  class="group relative inline-block overflow-hidden text-sm text-base-content/70 hover:text-base-content transition-colors"
>
  <span class="relative">
    {label}
    <span
      class="absolute bottom-0 left-0 h-0.5 w-0 bg-primary/40 transition-all duration-300 ease-in-out group-hover:w-full"
    ></span>
  </span>
</a>
