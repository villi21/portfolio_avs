import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

// 👇 CAMBIO: Añadimos un prop "pending" opcional
export default function SubmitBtn({ pending: manualPending }: { pending?: boolean }) {
  // Obtenemos el pending del hook (para Server Actions directas)
  const { pending: hookPending } = useFormStatus();

  // 👇 CAMBIO: Usamos el pending manual si existe, si no, el del hook
  const isPending = manualPending ?? hookPending;

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      // 👇 CAMBIO: Usamos nuestra variable isPending
      disabled={isPending}
    >
      {isPending ? ( // 👇 CAMBIO: Usamos nuestra variable isPending
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}