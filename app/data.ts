import { Budget } from "@/type";

const budgets: Budget[] = [
  {
    id: "1",
    createdAt: new Date("2023-01-10"),
    name: "Alimentation",
    amount: 500000, // Augmenté de trois zéros
    emoji: "🍎",
    transactions: [
      {
        id: "t1",
        amount: 50000, // Augmenté de trois zéros
        emoji: "🍕",
        description: "Pizzeria",
        createdAt: new Date("2023-01-12"),
        budgetName: "Alimentation",
        budgetId: "1",
      },
      {
        id: "t2",
        amount: 30000, // Augmenté de trois zéros
        emoji: "🍞",
        description: "Boulangerie",
        createdAt: new Date("2023-01-15"),
        budgetName: "Alimentation",
        budgetId: "1",
      },
    ],
  },
  {
    id: "2",
    createdAt: new Date("2023-01-05"),
    name: "Transport",
    amount: 300000, // Augmenté de trois zéros
    emoji: "🚗",
    transactions: [
      {
        id: "t3",
        amount: 60000, // Augmenté de trois zéros
        emoji: "⛽",
        description: "Essence",
        createdAt: new Date("2023-01-08"),
        budgetName: "Transport",
        budgetId: "2",
      },
      {
        id: "t4",
        amount: 15000, // Augmenté de trois zéros
        emoji: "🚕",
        description: "Taxi",
        createdAt: new Date("2023-01-20"),
        budgetName: "Transport",
        budgetId: "2",
      },
    ],
  },
  {
    id: "3",
    createdAt: new Date("2023-02-01"),
    name: "Loisirs",
    amount: 200000, // Augmenté de trois zéros
    emoji: "🎉",
    transactions: [
      {
        id: "t5",
        amount: 40000, // Augmenté de trois zéros
        emoji: "🎬",
        description: "Cinéma",
        createdAt: new Date("2023-02-03"),
        budgetName: "Loisirs",
        budgetId: "3",
      },
    ],
  },
  {
    id: "4",
    createdAt: new Date("2023-02-15"),
    name: "Santé",
    amount: 150000, // Augmenté de trois zéros
    emoji: "💊",
    transactions: [
      {
        id: "t6",
        amount: 45000, // Augmenté de trois zéros
        emoji: "🏥",
        description: "Consultation médicale",
        createdAt: new Date("2023-02-17"),
        budgetName: "Santé",
        budgetId: "4",
      },
    ],
  },
  {
    id: "5",
    createdAt: new Date("2023-03-01"),
    name: "Éducation",
    amount: 400000, // Augmenté de trois zéros
    emoji: "📚",
    transactions: [
      {
        id: "t7",
        amount: 100000, // Augmenté de trois zéros
        emoji: "📖",
        description: "Livres scolaires",
        createdAt: new Date("2023-03-05"),
        budgetName: "Éducation",
        budgetId: "5",
      },
    ],
  },
  {
    id: "6",
    createdAt: new Date("2023-04-01"),
    name: "Maison",
    amount: 600000, // Augmenté de trois zéros
    emoji: "🏠",
    transactions: [
      {
        id: "t8",
        amount: 250000, // Augmenté de trois zéros
        emoji: "🛋️",
        description: "Meubles",
        createdAt: new Date("2023-04-10"),
        budgetName: "Maison",
        budgetId: "6",
      },
    ],
  },
];

export default budgets;
