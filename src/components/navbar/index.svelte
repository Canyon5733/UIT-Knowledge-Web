<script lang="ts">
  import { links } from '@/lib/constants';
  import Icon from '@iconify/svelte';
  import NavBarLink from './navbar-link.svelte';
  import ContactButton from './contact-button.svelte';
  import Lightswitch from './lightswitch.svelte';

  let open = $state(false);
  let { currentPathname }: { currentPathname: string } = $props();

  function onLinkClick() {
    open = false;
  }
</script>

<header class="top-0 z-50 p-4 relative">
  <nav class="max-w-7xl mx-auto">
    <div
      class="flex bg-base-100 items-center gap-4 text-base-content flex-row md:items-center md:rounded-xl"
    >
      <a
        href="/"
        aria-label="Homepage"
        class="text-xl flex-1 font-extrabold tracking-tighter"
      >
        UIT Knowledge
      </a>

      <Lightswitch />

      <button
        aria-expanded={open}
        aria-label="Open Menu"
        class="text-lg md:hidden"
        onclick={() => (open = true)}
      >
        <Icon icon="lucide:menu" />
      </button>

      <!-- Mobile NavBar -->
      <ul
        class={[
          'fixed inset-0 z-50 flex flex-col items-end gap-4 bg-base-200/90 backdrop-blur-xl text-base-content pr-4 pt-14 transition-transform duration-300 ease-in-out md:hidden',
          open ? 'translate-x-0' : 'translate-x-full',
        ]}
      >
        <li>
          <button
            aria-expanded={open}
            aria-label="Close Menu"
            class="fixed right-4 top-3 block p-2 text-2xl md:hidden"
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
