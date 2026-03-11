import { usePage, router } from "@inertiajs/react";

export default function LocaleSwitcher() {
  const { locale, available_locales } = usePage().props;

  function switchLocale(newLocale) {
    router.get(window.location.pathname, { locale: newLocale }, { preserveScroll: true });
  }

  return (
    <div style={styles.container}>
      {available_locales.map((l) => (
        <button
          key={l}
          onClick={() => switchLocale(l)}
          style={{ ...styles.btn, ...(l === locale ? styles.active : {}) }}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "0.5rem",
  },
  btn: {
    padding: "0.25rem 0.6rem",
    border: "1px solid #ccc",
    borderRadius: 4,
    background: "transparent",
    cursor: "pointer",
    fontSize: "0.8rem",
    color: "#666",
  },
  active: {
    background: "#16213e",
    color: "#fff",
    borderColor: "#16213e",
  },
};
