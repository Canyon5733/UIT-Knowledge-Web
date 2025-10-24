<script lang="ts">
  import { cn } from '@/lib/utils';
  import FooterLink from './footer-link.svelte';
  import SocialLink from './social-link.svelte';
  import { sections, socialLinks } from '@/lib/constants';

  interface FooterProps {
    class?: string;
  }

  const { class: className }: FooterProps = $props();
</script>

<footer
  class={cn(
    'mt-20 border-t-2 border-base-content/20 bg-base-100 py-12 text-base-content',
    className
  )}
>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <!-- Main Footer Content -->
    <div class="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-12 mb-12">
      <!-- Brand Section -->
      <div class="md:col-span-1">
        <a href="/" class="inline-block">
          <span
            class="text-2xl font-extrabold tracking-tighter font-jb text-base-content"
          >
            UIT Knowledge
          </span>
        </a>
        <p class="mt-4 text-sm text-base-content/70">
          Tài liệu học tập cho sinh viên UIT.
        </p>
        <!-- Social Links (Refactored) -->
        <div class="mt-6 flex gap-4">
          {#each socialLinks as social (social.label)}
            <SocialLink
              href={social.href}
              label={social.label}
              icon={social.icon}
            />
          {/each}
        </div>
      </div>

      <!-- Footer Sections -->
      {#each sections as section (section.title)}
        <div>
          <h3 class="font-bold text-base-content mb-4">{section.title}</h3>
          <ul class="space-y-3">
            {#each section.links as link (link.label)}
              <li>
                <FooterLink href={link.href} label={link.label} />
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>

    <!-- Newsletter Section -->
    <div
      class="rounded-lg border-2 border-base-content/20 bg-base-200 px-6 py-8 md:px-8"
    >
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 items-center">
        <div>
          <h3 class="text-xl font-bold mb-2 text-base-content">
            Đăng ký nhận tin
          </h3>
          <p class="text-sm text-base-content/70">
            Nhận thông tin về tài liệu học tập mới nhất.
          </p>
        </div>
        <form
          class="flex flex-col md:flex-row gap-2"
          onsubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Email của bạn"
            class="flex-1 rounded border-2 border-base-content/20 bg-base-100 px-4 py-2 text-base-content placeholder-base-content/50 focus:outline-none focus:border-primary focus:bg-base-100"
            required
          />
          <button
            type="submit"
            class="group relative flex items-center justify-center overflow-hidden rounded border-2 border-base-content/20 bg-base-100 px-4 py-2 font-bold text-base-content transition-transform ease-out hover:scale-105"
          >
            <span
              class="absolute inset-0 z-0 h-full rounded bg-primary/30 transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-9"
            ></span>
            <span class="relative">Đăng ký</span>
          </button>
        </form>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div
      class="mt-12 border-t-2 border-base-content/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
    >
      <p class="text-sm text-base-content/70">
        © 2025 UIT Knowledge. Tất cả quyền được bảo lưu.
      </p>
      <div class="flex gap-6">
        <a
          href="/privacy"
          class="text-sm text-base-content/70 hover:text-base-content transition-colors"
        >
          Chính sách bảo mật
        </a>
        <a
          href="/terms"
          class="text-sm text-base-content/70 hover:text-base-content transition-colors"
        >
          Điều khoản sử dụng
        </a>
      </div>
    </div>
  </div>
</footer>
