# 🥔 Crispy Potato

An AI-powered meal planning and grocery optimization app that uses multi-agent AI to automatically generate healthy meal plans, calculate macronutrients, and create optimized grocery lists — personalized to your health goals, dietary restrictions, and preferences.

## 🎯 Project Vision

Crispy Potato is designed as a learning platform for software engineering fundamentals while building a real-world product. This project will cover:

- **AI Workflows**: Multi-agent AI systems with LangGraph
- **Product Development**: From concept to launch
- **Portfolio Enhancement**: Showcase modern development skills
- **Mobile Development**: React Native implementation

## 🧩 Core Features (Agent-Driven)

| Agent | Function |
| --- | --- |
| 🧠 **Nutritionist Agent** | Analyzes health goals and dietary restrictions, suggests meals that match macro targets |
| 📅 **Meal Scheduler Agent** | Organizes meals for the week based on user time availability and ingredient reuse |
| 🛒 **Grocery Agent** | Extracts ingredients from meals, optimizes them by pantry inventory + price + usage overlap |
| 🧪 **Substitution Agent** | Suggests healthy substitutions if ingredients are unavailable, disliked, or too expensive |
| 📦 **Batch Planner Agent** | Groups meals for prep-efficiency (e.g., shared ingredients, cook-once meals) |

## 🏗️ Architecture

```
[User Input]
⬇
[Prompt → Meal Goal, Preferences, Time, Pantry]
⬇
[Agent Workflow Manager (LangGraph)]
├── 🧠 Nutritionist Agent (LLM)
├── 📅 Meal Scheduler Agent (LLM)
├── 🛒 Grocery Optimizer Agent (LLM + Firebase inventory)
├── 🧪 Substitution Agent (LLM + budget APIs)
└── 📦 Batch Cooking Planner Agent (Logic + heuristics)
⬇
[Final Output]
├── 📆 Weekly Meal Calendar (React Native)
├── 📋 Smart Grocery List
├── 🔔 Daily Meal Notifications
├── 💪 HealthKit Macro Log Integration
```

## 📱 App Pages

### ✅ Completed Pages
- **Onboarding & Personalization Flow** - User diet goals and restrictions
- **Home Dashboard** - Daily snapshot, macro progress, grocery reminders
- **AI Meal Plan Generator** - Curated weekly meal plans
- **Meal Detail View** - Ingredients, prep steps, macros breakdown
- **Smart Grocery List** - Auto-generated, categorized shopping lists
- **Pantry Inventory** - Track available ingredients
- **Notifications & Reminders** - Daily engagement and AI tips
- **Profile & Settings** - User preferences and integrations

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- VS Code (recommended)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd crispy-potato
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Linting**: ESLint + TypeScript ESLint

## 📋 Development Roadmap

### Phase 1: Foundation ✅
- [x] Project setup and configuration
- [x] Basic UI components
- [x] Page structure and routing
- [x] Responsive design with Tailwind

### Phase 2: Core Features (In Progress)
- [ ] User authentication and profiles
- [ ] Data persistence (localStorage/Firebase)
- [ ] Basic meal planning functionality
- [ ] Grocery list generation

### Phase 3: AI Integration
- [ ] Multi-agent AI system setup
- [ ] Nutritionist Agent implementation
- [ ] Meal Scheduler Agent
- [ ] Grocery Optimizer Agent
- [ ] Substitution Agent
- [ ] Batch Planner Agent

### Phase 4: Mobile Development
- [ ] React Native migration
- [ ] Mobile-specific UI/UX
- [ ] Native device integrations
- [ ] App store preparation

### Phase 5: Launch
- [ ] Production deployment
- [ ] App store submission
- [ ] Marketing and user acquisition
- [ ] Analytics and monitoring

## 🤝 Contributing

This is a learning project! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Share your learning journey

## 📄 License

This project is for educational purposes.

---

**Built with ❤️ for learning software engineering fundamentals**
