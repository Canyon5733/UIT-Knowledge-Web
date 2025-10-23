<script lang="ts">
  import { links } from '@/lib/constants';
  import { cn } from '@/lib/utils';
  import Icon from '@iconify/svelte';
  import NavBarLink from './navbar-link.svelte';
  import ContactButton from './contact-button.svelte';

  let open = $state<boolean>(false);
  const { currentPathname }: { currentPathname: string } = $props();

  function onLinkClick() {
    open = false;
  }
</script>

<header class="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4 relative">
  <nav>
    <div
      class="flex flex-col justify-between rounded-b-lg bg-slate-50 px-4 py-2 md:flex-row md:items-center md:rounded-xl"
    >
      <div class="flex items-center justify-between">
        <a
          href="/"
          aria-label="Homepage"
          class="text-xl font-extrabold tracking-tighter text-slate-900 font-jb"
        >
          UIT Knowledge
        </a>
        <button
          aria-expanded={open}
          aria-label="Open Menu"
          class="block p-2 text-2xl text-slate-800 md:hidden"
          onclick={() => (open = true)}
        >
          <Icon icon="lucide:menu" />
        </button>
      </div>

      <!-- Mobile NavBar -->
      <ul
        class={cn(
          'fixed inset-0 z-50 flex flex-col items-end gap-4 bg-slate-50 pr-4 pt-14 transition-transform duration-300 ease-in-out md:hidden',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <li>
          <button
            aria-expanded={open}
            aria-label="Close Menu"
            class="fixed right-4 top-3 block p-2 text-2xl text-slate-800 md:hidden"
            onclick={() => (open = false)}
          >
            <Icon icon="lucide:x" />
          </button>
        </li>
        {#each links as item (item.label)}
          <li class="first:mt-8">
            <NavBarLink
              href={item.url}
              label={item.label}
              {currentPathname}
              {onLinkClick}
              type="mobile"
            />
          </li>
        {/each}
        <ContactButton />
      </ul>

      <!-- Desktop NavBar -->
      <ul
        class="relative z-50 hidden flex-row items-center gap-1 bg-transparent py-0 md:flex"
      >
        {#each links as item (item.label)}
          <li>
            <NavBarLink
              href={item.url}
              label={item.label}
              {currentPathname}
              {onLinkClick}
              type="desktop"
            />
          </li>
        {/each}
        <ContactButton class="ml-3" />
      </ul>
    </div>
  </nav>
</header>
