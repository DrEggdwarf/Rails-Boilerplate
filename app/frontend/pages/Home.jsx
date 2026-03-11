import { useTranslation } from "../lib/useTranslation";
import LocaleSwitcher from "../components/LocaleSwitcher";

export default function Home({ stack, agents }) {
  const { t } = useTranslation();

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.headerTop}>
          <div />
          <LocaleSwitcher />
        </div>
        <h1 style={styles.title}>{t("app.name")}</h1>
        <p style={styles.subtitle}>{t("app.tagline")}</p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>{t("home.stack_title")}</h2>
        <div style={styles.grid}>
          {stack.map(({ name, version, role }) => (
            <div key={name} style={styles.card}>
              <strong>{name}</strong>
              <span style={styles.version}>{version}</span>
              <span style={styles.role}>{role}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>{t("home.agents_build_title")}</h2>
        <div style={styles.grid}>
          {agents.build.map(({ name, model }) => (
            <div key={name} style={styles.card}>
              <strong>@{name}</strong>
              <span style={styles.model}>{model}</span>
              <span style={styles.role}>{t(`agents.${name}`)}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>{t("home.agents_review_title")}</h2>
        <div style={styles.grid}>
          {agents.review.map(({ name, model }) => (
            <div key={name} style={styles.card}>
              <strong>@{name}</strong>
              <span style={styles.model}>{model}</span>
              <span style={styles.role}>{t(`agents.${name}`)}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>{t("home.getting_started_title")}</h2>
        <ol style={styles.steps}>
          {t("home.getting_started_steps").map((step, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: step.replace(/`([^`]+)`/g, "<code>$1</code>") }} />
          ))}
        </ol>
      </section>

      <footer style={styles.footer}>
        <p>{t("home.footer")}</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 900,
    margin: "0 auto",
    padding: "2rem",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    color: "#1a1a2e",
  },
  header: {
    marginBottom: "3rem",
    paddingBottom: "2rem",
    borderBottom: "2px solid #e0e0e0",
  },
  headerTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  },
  title: {
    fontSize: "2.5rem",
    margin: 0,
    color: "#16213e",
    textAlign: "center",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#666",
    marginTop: "0.5rem",
    textAlign: "center",
  },
  section: { marginBottom: "2.5rem" },
  sectionTitle: {
    fontSize: "1.4rem",
    marginBottom: "1rem",
    color: "#16213e",
    borderBottom: "1px solid #eee",
    paddingBottom: "0.5rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "1rem",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    gap: "0.3rem",
    padding: "1rem",
    borderRadius: 8,
    backgroundColor: "#f8f9fa",
    border: "1px solid #e9ecef",
  },
  version: { fontSize: "0.85rem", color: "#0a9396", fontFamily: "monospace" },
  model: { fontSize: "0.8rem", color: "#e76f51", fontWeight: 600, textTransform: "uppercase" },
  role: { fontSize: "0.85rem", color: "#888" },
  steps: { lineHeight: 2, fontSize: "1.05rem" },
  footer: {
    textAlign: "center",
    color: "#aaa",
    fontSize: "0.9rem",
    marginTop: "3rem",
    paddingTop: "1.5rem",
    borderTop: "1px solid #eee",
  },
};
