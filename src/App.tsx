import { useState } from "react";
import ExpenseList from "./Components/ExpenseList/ExpenseList";
import ExpenseFilter from "./Components/ExpenseFilter/ExpenseFilter";
import ExpenseForm from "./Components/ExpenseForm/ExpenseForm";

type Expense = {
  id: number;
  description: string;
  amount: number;
  category: "Groceries" | "Utilities" | "Entertainment";
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
