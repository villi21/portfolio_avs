// types/grecaptcha.d.ts

interface GReCaptcha {
  execute(siteKey: string, options: { action: string }): Promise<string>;
}

interface Window {
  grecaptcha: GReCaptcha;
}