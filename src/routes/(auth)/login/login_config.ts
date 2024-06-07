import { ThemeSupa } from "@supabase/auth-ui-shared";
import type { Provider } from "@supabase/supabase-js";

export const oauthProviders = ["google"] as Provider[];

// use the css variables from DaisyUI to style Supabase auth template
export const sharedAppearance = {
  theme: ThemeSupa,
  variables: {
    default: {
      colors: {
        brand: "#4CAF50",
        brandAccent: "oklch(var(--ac-dark))",
        inputText: "oklch(var(--n-dark))",
        brandButtonText: "oklch(var(--pc-dark))",
        messageText: "oklch(var(--b-dark))",
        dividerBackground: "oklch(var(--n-dark))",
        inputLabelText: "oklch(var(--n-dark))",
        defaultButtonText: "oklch(var(--n-dark))",
        anchorTextColor: "oklch(var(--p-dark))",
      },
      fontSizes: {
        baseInputSize: "16px",
      },
    },
  },
  className: {
    button: "authBtn",
  },

};

