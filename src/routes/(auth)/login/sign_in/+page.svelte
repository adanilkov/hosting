<script lang="ts">
  import { Auth } from "@supabase/auth-ui-svelte"
  import { sharedAppearance, oauthProviders } from "../login_config"
  import { goto } from "$app/navigation"
  import { onMount } from "svelte"
  import { page } from "$app/stores"
  import { ThemeSupa } from "@supabase/auth-ui-shared"

  export let data
  let { supabase } = data

  onMount(() => {
    supabase.auth.onAuthStateChange((event) => {
      // Redirect to account after sucessful login
      if (event == "SIGNED_IN") {
        // Delay needed because order of callback not guaranteed.
        // Give the layout callback priority to update state or
        // we'll just bounch back to login when /account tries to load
        setTimeout(() => {
          goto("/account")
        }, 1)
      }
    })
  })
</script>

<svelte:head>
  <title>Sign in</title>
</svelte:head>

{#if $page.url.searchParams.get("verified") == "true"}
  <div role="alert" class="alert alert-success mb-5">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="stroke-current shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      /></svg
    >
    <span>Email verified! Please sign in.</span>
  </div>
{/if}
<div class="flex flex-col justify-center h-[90vh]">
  <h1 class="text-2xl mb-1 text-left">Welcome back</h1>
  <h2 class="mb-6 text-left opacity-70">Sign in to your account</h2>
  <Auth
    supabaseClient={data.supabase}
    view="sign_in"
    redirectTo={`${data.url}/auth/callback`}
    providers={oauthProviders}
    socialLayout="horizontal"
    showLinks={false}
    appearance={{
      theme: ThemeSupa,
      style: {
        label: "text-align: left; opacity: 0.7;",
      },
    }}
    theme="dark"
    additionalData={undefined}
    localization={{
      variables: {
        sign_in: {
          email_label: "Email",
          email_input_placeholder: "you@example.com",
          password_label: "Password",
          password_input_placeholder: "••••••••",
        },
      },
    }}
  />
  <div
    class="text-l opacity-40 mt-4 hover:opacity-60 transition duration-400 text-left"
  >
    <a class="underline" href="/login/forgot_password">Forgot password?</a>
  </div>
  <div class="text-l mt-3 text-left">
    <span class="opacity-40">Don't have an account?</span>
    <a
      class="text-l opacity-40 hover:opacity-60 transition duration-400 text-left underline"
      href="/login/sign_up">Sign up</a
    ><span class="opacity-40">.</span>
  </div>
</div>
