<script lang="ts">
  interface FooterSectionProps {
    title: string;
  }

  const { title }: FooterSectionProps = $props();
</script>

<div>
  <h3 class="font-bold text-slate-900 mb-4">{title}</h3>
</div>
