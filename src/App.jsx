import { useState } from "react";
import { FOODS, DAILY_TARGET } from "./constants/foods";
import CalorieSummary from "./components/CalorieSummary";
import FoodList from "./components/FoodList";
import theme from "./styles/theme";

/**
 * App – root component.
 * Owns the global calorie state and composes all child components.
 * @returns {JSX.Element}
 */
export default function App() {
  const [calories, setCalories] = useState(0);

  const pct = Math.min(100, Math.round((calories / DAILY_TARGET) * 100));

  function handleAdd(food) {
    setCalories(prev => prev + food.cal);
  }

  function handleReset() {
    setCalories(0);
  }

  return (
    <div style={{
      background: theme.bg,
      minHeight: "100vh",
      color: theme.textMain,
      fontFamily: "system-ui, sans-serif",
      padding: 24,
    }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 4 }}>
        Dhalbhat<span style={{ color: theme.accent }}>Power</span> 💪
      </h1>
      <p style={{ color: theme.textMuted, marginBottom: 24 }}>
        Track your daily calories
      </p>

      <CalorieSummary calories={calories} target={DAILY_TARGET} pct={pct} />

      <FoodList foods={FOODS} onAdd={handleAdd} />

      <button
        onClick={handleReset}
        style={{
          marginTop: 16,
          width: "100%",
          padding: 14,
          background: theme.card,
          border: `1px solid ${theme.border}`,
          borderRadius: 12,
          color: theme.textMuted,
          fontSize: 14,
          cursor: "pointer",
        }}
      >
        ↺ Reset
      </button>
    </div>
  );
}
