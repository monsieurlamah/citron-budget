import { Transaction } from "@/type";
import React from "react";
import { formatAmount } from "../utils";
import Link from "next/link";
interface TransactionItemProps {
  transaction: Transaction;
}
const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  return (
    <li key={transaction.id} className="flex justify-between items-center">
      <div className="my-4">
        <button className="btn">
          <div className="badge badge-accent">
            - {formatAmount(transaction.amount)} GNF
          </div>
          {transaction.budgetName}
        </button>
      </div>
      <div className="md:hidden flex flex-col items-end">
        <span className="font-bold text-sm">{transaction.description}</span>
        <span className="text-sm">
          {transaction.createdAt.toLocaleDateString("fr-FR")} à
          {transaction.createdAt.toLocaleTimeString("fr-FR", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>

      <div className="hidden md:flex">
        <span className="font-bold text-sm">{transaction.description}</span>
      </div>
      <div className="hidden md:flex">
        {transaction.createdAt.toLocaleDateString("fr-FR")} à
        {transaction.createdAt.toLocaleTimeString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>

      <div className="hidden md:flex">
        <Link href={`/manage/${transaction.budgetId}`} className="btn">Voir plus</Link>
      </div>
    </li>
  );
};

export default TransactionItem;
