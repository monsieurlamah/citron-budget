"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import { useUser } from "@clerk/nextjs";
import EmojiPicker from "emoji-picker-react";
import { addBudget, getBudgetByUser } from "../actions";
import Notification from "../components/Notification";
import { Budget } from "@/type";
import Link from "next/link";
import BudgetItem from "../components/BudgetItem";
import { Landmark } from "lucide-react";

const page = () => {
  const { user } = useUser();
  const [budgetName, setBudgetName] = useState<string>("");
  const [budgetAmount, setBudgeAmount] = useState<string>("");
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
  const [selectedEmoji, setSelectedEmoji] = useState<string>("");
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [notification, setNotification] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false); // État pour le chargement

  const closeNotification = () => {
    setNotification("");
  };

  const handleEmojiSelect = (emojiObject: { emoji: string }) => {
    setSelectedEmoji(emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  const handleAddBudget = async () => {
    try {
      setIsLoading(true); // Début du chargement
      const amount = parseFloat(budgetAmount);
      if (isNaN(amount) || amount <= 0) {
        throw new Error("Le montant doit être un nombre positif");
      }
      await addBudget(
        user?.primaryEmailAddress?.emailAddress as string,
        budgetName,
        amount,
        selectedEmoji
      );
      fetchBudgets();

      const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
      if (modal) {
        modal.close();
      }

      setNotification("Nouveau budget créé avec succès !");
      setBudgetName("");
      setBudgeAmount("");
      setSelectedEmoji("");
      setShowEmojiPicker(false);
    } catch (error) {
      setNotification(`Erreur: ${error}`);
    } finally {
      setIsLoading(false); // Fin du chargement
    }
  };

  const fetchBudgets = async () => {
    if (user?.primaryEmailAddress?.emailAddress) {
      try {
        setIsLoading(true); // Début du chargement
        const userBudgets = await getBudgetByUser(
          user?.primaryEmailAddress?.emailAddress as string
        );
        setBudgets(userBudgets);
      } catch (error) {
        setNotification(`Erreur lors de la récupération des budgets: ${error}`);
      } finally {
        setIsLoading(false); // Fin du chargement
      }
    }
  };

  useEffect(() => {
    fetchBudgets();
  }, [user?.primaryEmailAddress?.emailAddress]);

  return (
    <Wrapper>
      {notification && (
        <Notification message={notification} onclose={closeNotification} />
      )}

      {isLoading && (
        <div className="flex justify-center items-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}

      <button
        className="btn mb-4"
        onClick={() =>
          (
            document.getElementById("my_modal_3") as HTMLDialogElement
          ).showModal()
        }
      >
        Nouveau Budget <Landmark className="w-4" />
      </button>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Création d'un budget</h3>
          <p className="py-4 text-sm">
            Appuyez sur la touche ESC ou cliquez sur le bouton ✕ pour fermer
          </p>
          <div className="w-full flex flex-col">
            <input
              type="text"
              value={budgetName}
              placeholder="Nom du budget"
              onChange={(e) => setBudgetName(e.target.value)}
              className="input input-bordered mb-3"
              required
            />
            <input
              type="number"
              value={budgetAmount}
              placeholder="Budget"
              onChange={(e) => setBudgeAmount(e.target.value)}
              className="input input-bordered mb-3"
              required
            />
            <button
              className="btn mb-3"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            >
              {selectedEmoji || "Selectionnez un emoji 👈"}
            </button>
            {showEmojiPicker && (
              <div className="flex justify-center items-center my-4">
                <EmojiPicker onEmojiClick={handleEmojiSelect} />
              </div>
            )}

            <button onClick={handleAddBudget} className="btn">
              Ajouter le Budget
            </button>
          </div>
        </div>
      </dialog>

      <ul className="grid md:grid-cols-3 gap-4">
        {budgets.map((budget) => (
          <Link href={`/manage/${budget.id}`} key={budget.id}>
            <BudgetItem budget={budget} enableHover={1}></BudgetItem>
          </Link>
        ))}
      </ul>
    </Wrapper>
  );
};

export default page;
