<script lang="ts" module>
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  export type ContactButtonProps = HTMLAnchorAttributes & {
    className?: string;
    showIcon?: boolean;
  };
</script>

<script lang="ts">
  import { cn } from '@/lib/utils';
  import Icon from '@iconify/svelte';

  const {
    class: className,
    showIcon = true,
    ...restProps
  }: ContactButtonProps = $props();
</script>

<a
  href="/contact"
  class={cn(
    'group text-slate-900 relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold transition-transform ease-out hover:scale-105',
    className
  )}
  {...restProps}
>
  <span
    class="absolute inset-0 z-0 h-full rounded bg-purple-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-9"
  ></span>
  <span class="relative flex items-center justify-center gap-2">
    Liên hệ
    {#if showIcon}
      <Icon icon="lucide:arrow-up-right" class="size-6" />
    {/if}
  </span>
</a>
