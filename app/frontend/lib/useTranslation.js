import { usePage } from "@inertiajs/react";

export function useTranslation() {
  const { translations } = usePage().props;

  function t(key) {
    return key.split(".").reduce((obj, k) => obj?.[k], translations) ?? key;
  }

  return { t };
}
