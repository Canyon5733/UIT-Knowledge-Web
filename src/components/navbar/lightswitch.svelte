<script lang="ts">
  import { toggleTheme } from '@/lib/theme';
  import Icon from '@iconify/svelte';
</script>

<button class="btn btn-ghost btn-square rounded-full" onclick={toggleTheme}>
  <Icon icon="lucide:sun" class="dark:hidden" />
  <Icon icon="lucide:moon" class="hidden dark:inline" />
</button>
