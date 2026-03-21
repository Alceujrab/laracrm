import { r as reactExports, u as useForm, j as jsxRuntimeExports, H as Head_default } from "./app-y-n9EzWq.js";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-BbRtMTUL.js";
import { c as createLucideIcon } from "./createLucideIcon-uxZSl1sR.js";
import { P as Plus } from "./plus-mkZL2i_h.js";
import { T as Trash2 } from "./trash-2-DAGLT6OE.js";
import "./transition-DODoSbji.js";
import "./search-Cgyv8K65.js";
import "./mail-BHgWiUW-.js";
import "./users-cXdFXwWm.js";
import "./settings-D5_0T45O.js";
import "./calendar-CRqyN6uS.js";
import "./chevron-right-D-W6fJrd.js";
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 18V5", key: "adv99a" }],
  ["path", { d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4", key: "1e3is1" }],
  ["path", { d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5", key: "1gqd8o" }],
  ["path", { d: "M17.997 5.125a4 4 0 0 1 2.526 5.77", key: "iwvgf7" }],
  ["path", { d: "M18 18a4 4 0 0 0 2-7.464", key: "efp6ie" }],
  ["path", { d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517", key: "1gq6am" }],
  ["path", { d: "M6 18a4 4 0 0 1-2-7.464", key: "k1g0md" }],
  ["path", { d: "M6.003 5.125a4 4 0 0 0-2.526 5.77", key: "q97ue3" }]
];
const Brain = createLucideIcon("brain", __iconNode);
function Knowledge({ knowledgeItems = [] }) {
  const [isAdding, setIsAdding] = reactExports.useState(false);
  const { data, setData, post, delete: destroy, processing, reset } = useForm({
    question: "",
    answer: "",
    keywords: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("settings.knowledge.store"), {
      onSuccess: () => {
        setIsAdding(false);
        reset();
      }
    });
  };
  const handleDelete = (id) => {
    if (confirm("Excluir este item de conhecimento?")) {
      destroy(route("settings.knowledge.destroy", { id }));
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    AuthenticatedLayout,
    {
      header: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-white leading-tight", children: "Treinamento do Chatbot (IA)" }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Head_default, { title: "Base de Conhecimento" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg border border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-5 h-5 text-indigo-500" }),
                "Base de Conhecimento"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "Cadastre informações sobre sua loja para que o robô responda corretamente." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setIsAdding(true),
                className: "px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
                  " Novo Item"
                ]
              }
            )
          ] }),
          isAdding && /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "mb-8 p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-indigo-100 dark:border-indigo-900/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Tópico ou Pergunta Comum" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    value: data.question,
                    onChange: (e) => setData("question", e.target.value),
                    placeholder: "Ex: Qual o horário de atendimento?",
                    className: "mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Resposta da IA (Informação Base)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    value: data.answer,
                    onChange: (e) => setData("answer", e.target.value),
                    rows: 4,
                    placeholder: "Ex: Funcionamos de segunda a sexta das 08h às 18h e aos sábados das 09h às 13h.",
                    className: "mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                    required: true
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "submit",
                  disabled: processing,
                  className: "px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50",
                  children: "Salvar Item"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setIsAdding(false),
                  className: "px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700",
                  children: "Cancelar"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            knowledgeItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border border-gray-100 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-900 dark:text-white", children: item.question }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400 whitespace-pre-wrap", children: item.answer })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => handleDelete(item.id),
                  className: "p-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
                }
              )
            ] }) }, item.id)),
            knowledgeItems.length === 0 && !isAdding && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12 text-gray-500", children: "Nenhum item de conhecimento cadastrado. Adicione informações para o bot aprender." })
          ] })
        ] }) }) }) })
      ]
    }
  );
}
export {
  Knowledge as default
};
