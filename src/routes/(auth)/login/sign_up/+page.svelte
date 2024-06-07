<script lang="ts">
  import { Auth } from "@supabase/auth-ui-svelte"
  import { sharedAppearance, oauthProviders } from "../login_config"
  import { ThemeSupa } from "@supabase/auth-ui-shared"

  export let data
</script>

<svelte:head>
  <title>Sign up</title>
</svelte:head>

<div class="flex flex-col justify-center h-[90vh]">
  <h1 class="text-2xl mb-1 text-left">Get Started</h1>
  <h2 class="mb-6 text-left opacity-70">Create an account.</h2>
  <Auth
    supabaseClient={data.supabase}
    view="sign_up"
    redirectTo={`${data.url}/auth/callback`}
    showLinks={false}
    providers={oauthProviders}
    socialLayout="horizontal"
    theme="dark"
    appearance={{
      theme: ThemeSupa,
      style: {
        label: "text-align: left; opacity: 0.7;",
      },
    }}
    additionalData={undefined}
    localization={{
      variables: {
        sign_up: {
          email_label: "Email",
          email_input_placeholder: "you@example.com",
          password_label: "Password",
          password_input_placeholder: "••••••••",
        },
      },
    }}
  />
  <div class="text-l mt-4 text-left">
    <span class="opacity-40">Have an account?</span>
    <a
      class="opacity-40 hover:opacity-60 transition duration-400 underline"
      href="/login/sign_in">Sign in</a
    ><span class="opacity-40">.</span>
  </div>
</div>
