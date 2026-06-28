<script lang="ts">
  import { projects, type Project } from "$lib/projects";
  import Modal from "$lib/components/Modal.svelte";

  let isModalOpen = $state(false);
  let selectedProject = $state<Project | null>(null);

  function openModal(project: Project) {
    selectedProject = project;
    isModalOpen = true;
  }

  const siteUrl = "https://jpadams.xyz";
  const title = "John Adams — Full-Stack & Mobile Developer";
  const description =
    "Math-CS major from UCSD building full-stack web apps and unique mobile experiences, with a focus on local-first design and user privacy.";
  const ogImage = `${siteUrl}/images/og-image.jpg`;

  const socials = [
    { label: "GitHub", url: "https://github.com/jpaoad31", kind: "github" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/john-p-adams",
      kind: "linkedin",
    },
  ];

  const experience = [
    { name: "Full-Stack", detail: "PostgreSQL, C#, React" },
    {
      name: "Web",
      detail: "SvelteKit, Tailwind, Deno, Supabase, React, TypeScript",
    },
    { name: "Mobile", detail: "SwiftUI, Core Bluetooth, Concurrency, Core ML" },
    {
      name: "AI Accelerated Development",
      detail: "Claude Code, LLM Prompt Engineering, Agentic Workflows",
    },
  ];
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={siteUrl} />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="John Adams" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={siteUrl} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:image:alt" content="John Adams" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />
</svelte:head>

<div class="max-w-4xl mx-auto px-6 py-12 sm:py-24">
  <!-- Hero Section -->
  <header class="flex flex-col sm:flex-row items-center gap-8 mb-24">
    <div class="relative group">
      <div
        class="absolute -inset-1 bg-accent rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"
      ></div>
      <img
        src="/images/john-portrait.jpeg"
        alt="John Adams"
        class="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border-4 border-white shadow-xl"
      />
    </div>
    <div class="text-center sm:text-left">
      <h1
        class="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight"
      >
        John Adams
      </h1>
      <p class="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
        A Math-CS major from UCSD working on <span class="text-accent font-bold"
          >full-stack</span
        >
        web apps and unique <span class="text-accent font-bold">mobile</span> experiences.
        Passionate about local-first design and protecting user privacy.
      </p>
      <div class="flex gap-3 mt-6 justify-center sm:justify-start">
        {#each socials as social}
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            class="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-gray-500 hover:border-accent/40 hover:text-accent transition-colors"
          >
            {@render linkIcon(social.kind)}
          </a>
        {/each}
      </div>
    </div>
  </header>

  <!-- Experience Section -->
  <section class="mb-24">
    <div class="flex items-center gap-4 mb-10">
      <h2 class="text-sm font-bold text-gray-900 uppercase tracking-widest">
        Experience
      </h2>
      <div class="h-px flex-1 bg-gray-100"></div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {#each experience as item}
        <div
          class="p-6 rounded-3xl border border-gray-100 bg-gray-50/30 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500"
        >
          <h3 class="font-bold text-gray-900 mb-1">{item.name}</h3>
          <p class="text-sm text-gray-500">{item.detail}</p>
        </div>
      {/each}
    </div>
  </section>

  <!-- Projects Section -->
  <section>
    <div class="flex items-center gap-4 mb-10">
      <h2 class="text-sm font-bold text-gray-900 uppercase tracking-widest">
        Projects
      </h2>
      <div class="h-px flex-1 bg-gray-100"></div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {#each projects as project}
        <button
          onclick={() => openModal(project)}
          class="group text-left p-8 rounded-3xl border border-gray-100 bg-white hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 flex flex-col justify-between cursor-pointer"
        >
          <div>
            <h3
              class="font-bold text-xl text-gray-900 mb-3 group-hover:text-accent transition-colors flex items-center gap-2"
            >
              {project.name}
              {#if project.isInDevelopment}
                <span
                  class="text-[10px] uppercase tracking-wider bg-accent/10 text-accent px-2 py-0.5 rounded-full"
                  >In Dev</span
                >
              {/if}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-6">
              {project.desc}
            </p>
          </div>
          <div
            class="flex items-center text-xs font-bold text-accent uppercase tracking-wider group-hover:translate-x-1 transition-transform"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </button>
      {/each}
    </div>
  </section>

  <!-- Footer -->
  <footer class="mt-32 pt-12 border-t border-gray-100 text-center">
    <p class="text-gray-400 text-sm">
      &copy; {new Date().getFullYear()} John Adams. Built with SvelteKit & Tailwind
      CSS.
    </p>
  </footer>
</div>

<Modal bind:isOpen={isModalOpen} title={selectedProject?.name}>
  {#if selectedProject}
    <div class="space-y-8">
      <p class="text-gray-600 text-lg leading-relaxed">
        {selectedProject.detailedDesc}
      </p>

      {#if selectedProject.links?.length}
        <div class="flex flex-wrap gap-3 pt-4">
          {#each selectedProject.links as link, i}
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-6 py-3 font-bold rounded-full transition-all active:scale-95 {i === 0
                ? 'bg-accent hover:bg-accent-dark text-white shadow-lg shadow-accent/20'
                : 'border border-gray-200 text-gray-700 hover:border-accent/40 hover:text-accent'}"
            >
              {@render linkIcon(link.kind)}
              {link.label}
            </a>
          {/each}
        </div>
      {/if}
    </div>
  {/if}
</Modal>

{#snippet linkIcon(kind: string | undefined)}
  {#if kind === 'youtube'}
    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2C0 8.09 0 12 0 12s0 3.91.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14C24 15.91 24 12 24 12s0-3.91-.5-5.8zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"
      />
    </svg>
  {:else if kind === 'github'}
    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.21 11.19.6.11.82-.25.82-.56 0-.28-.01-1.02-.02-2-3.34.71-4.04-1.59-4.04-1.59-.55-1.36-1.33-1.73-1.33-1.73-1.09-.73.08-.72.08-.72 1.2.08 1.84 1.21 1.84 1.21 1.07 1.8 2.81 1.28 3.49.98.11-.76.42-1.28.76-1.57-2.67-.3-5.47-1.31-5.47-5.83 0-1.29.47-2.34 1.24-3.17-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.21.96-.26 1.98-.39 3-.4 1.02.01 2.04.14 3 .4 2.29-1.53 3.3-1.21 3.3-1.21.66 1.64.24 2.86.12 3.16.77.83 1.24 1.88 1.24 3.17 0 4.53-2.81 5.53-5.49 5.82.43.36.81 1.09.81 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.22.68.83.56C20.56 21.92 24 17.5 24 12.29 24 5.78 18.63.5 12 .5z"
      />
    </svg>
  {:else if kind === 'linkedin'}
    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"
      />
    </svg>
  {:else}
    <svg
      class="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  {/if}
{/snippet}
