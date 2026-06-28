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
          class="group text-left p-8 rounded-3xl border border-gray-100 bg-white hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 flex flex-col justify-between"
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

      {#if selectedProject.href}
        <div class="pt-4">
          <a
            href={selectedProject.href}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-8 py-3 bg-accent hover:bg-accent-dark text-white font-bold rounded-full shadow-lg shadow-accent/20 transition-all active:scale-95 group"
          >
            Visit {selectedProject.site}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      {/if}
    </div>
  {/if}
</Modal>
