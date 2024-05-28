<script>
  import "../../app.css"
</script>

<div class="sticky-header">
  <div class="navbar bg-base-100 container mx-auto">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case" href="/">MC Hosting</a>
      <!-- TODO: Change to logo -->
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1 hidden sm:flex font-bold text-sm">
        <!-- <li class="md:mx-4">
          <a
            href="https://github.com/CriticalMoments/CMSaasStarter"
            class="border border-primary">★ us on Github</a
          >
        </li> -->
        <li class="md:mx-2"><a href="/FAQ">FAQ</a></li>
        <li class="md:mx-2"><a href="/pricing">Pricing</a></li>
        <li class="md:mx-2"><a href="/account">Sign In</a></li>
      </ul>
      <div class="dropdown dropdown-end sm:hidden">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul
          tabindex="0"
          class="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a href="/FAQ">FAQ</a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/account">Account</a></li>
          <!-- <li>
            <a
              href="https://github.com/CriticalMoments/CMSaasStarter"
              class="border border-primary">★ us on Github</a
            >
          </li> -->
        </ul>
      </div>
    </div>
  </div>
</div>

<div class="">
  <slot />
</div>

<!-- Spacer grows so the footer can be at bottom on short pages -->
<div class="flex-grow"></div>
<div class="">
  <div class="border-t max-w-[1000px] mx-auto"></div>
  <footer
    class="max-w-[1000px] mx-auto footer pt-10 gap-x-48 lg:gap-x-64 xl:gap-x-96 text-base flex justify-between"
  >
    <nav>
      <span class="footer-title opacity-80">Explore</span>
      <a class="link link-hover mb-1" href="/">Overview</a>
      <a class="link link-hover my-1" href="/pricing">Pricing</a>
      <a class="link link-hover my-1" href="/FAQ">FAQ</a>
      <a class="link link-hover my-1" href="/contact_us">Contact Us</a>
      <a
        class="link link-hover my-1"
        href="https://github.com/CriticalMoments/CMSaasStarter">Github</a
      >
    </nav>
    <aside>
      <span class="footer-title opacity-80">Legal</span>
      <a class="link link-hover my-1" href="/terms">Terms</a>
      <a class="link link-hover my-1" href="/privacy">Privacy</a>
    </aside>
  </footer>
</div>

<style>
  .sticky-header {
    position: sticky;
    top: 0;
    z-index: 1000; /* Ensure the header appears above other content */
    border-bottom: 1px solid rgb(42, 42, 42);
  }

  .menu-horizontal li a {
    font-size: 0.875rem; /* Adjust the font size as needed */
  }
</style>
