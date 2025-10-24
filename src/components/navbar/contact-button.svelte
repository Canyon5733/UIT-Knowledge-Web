<script lang="ts" module>
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  export type ContactButtonProps = HTMLAnchorAttributes & {
    className?: string;
    showIcon?: boolean;
  };
</script>

<script lang="ts">
  import Icon from '@iconify/svelte';

  const {
    class: className,
    showIcon = true,
    ...restProps
  }: ContactButtonProps = $props();
</script>

<a
  href="/contact"
  class={['btn btn-primary font-fold', className]}
  {...restProps}
>
  <span class="relative flex items-center justify-center gap-2">
    Liên hệ
    {#if showIcon}
      <Icon icon="lucide:arrow-up-right" class="text-lg" />
    {/if}
  </span>
</a>
