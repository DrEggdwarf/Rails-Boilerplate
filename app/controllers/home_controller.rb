class HomeController < ApplicationController
  def index
    render inertia: "Home", props: {
      stack: [
        { name: "Ruby on Rails", version: "8.1", role: "Backend" },
        { name: "React", version: "18", role: "Frontend" },
        { name: "Inertia.js", version: "2.x", role: "Bridge" },
        { name: "Vite", version: "6.x", role: "Bundler" },
        { name: "SQLite", version: "3", role: "Database (dev)" },
        { name: "Claude Code", version: "-", role: "AI Orchestrator" }
      ],
      agents: {
        build: [
          { name: "pm", model: "haiku" },
          { name: "architect", model: "sonnet" },
          { name: "backend", model: "sonnet" },
          { name: "frontend", model: "haiku" },
          { name: "devops", model: "haiku" },
          { name: "database", model: "sonnet" }
        ],
        review: [
          { name: "security", model: "sonnet" },
          { name: "testing", model: "sonnet" },
          { name: "quality", model: "sonnet" },
          { name: "performance", model: "sonnet" },
          { name: "a11y", model: "sonnet" },
          { name: "pentester", model: "sonnet" }
        ]
      }
    }
  end
end
