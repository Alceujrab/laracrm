import { c as createLucideIcon } from "./createLucideIcon-uxZSl1sR.js";
import { u as useForm, r as reactExports, j as jsxRuntimeExports } from "./app-y-n9EzWq.js";
import { X } from "./x-C8RDGkNZ.js";
import { T as Type } from "./type-Bb504kNC.js";
import { U as User } from "./user-D1cwl11O.js";
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
];
const DollarSign = createLucideIcon("dollar-sign", __iconNode$1);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
];
const MessageSquare = createLucideIcon("message-square", __iconNode);
function CreateDealModal({ isOpen, onClose, stages = [], contacts = [] }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    title: "",
    value: "",
    deal_stage_id: "",
    contact_id: "",
    status: "open"
  });
  reactExports.useEffect(() => {
    if (isOpen && !data.deal_stage_id && stages.length > 0) {
      setData("deal_stage_id", stages[0].id);
    }
  }, [isOpen, stages]);
  if (!isOpen) return null;
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("crm.deals.store"), {
      onSuccess: () => {
        reset();
        onClose();
      }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-900 dark:text-white", children: "Novo Negócio" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "text-gray-400 hover:text-gray-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "p-6 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Título da Negociação *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Type, { className: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: data.title,
              onChange: (e) => setData("title", e.target.value),
              className: "w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white",
              placeholder: "Ex: Venda Honda Civic",
              required: true
            }
          )
        ] }),
        errors.title && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Contato Associado *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: data.contact_id,
              onChange: (e) => setData("contact_id", e.target.value),
              className: "w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white appearance-none",
              required: true,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Selecione um Cliente" }),
                contacts.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c.id, children: c.name }, c.id))
              ]
            }
          )
        ] }),
        errors.contact_id && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.contact_id })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Valor Previsto (R$)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "number",
              step: "0.01",
              value: data.value,
              onChange: (e) => setData("value", e.target.value),
              className: "w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white",
              placeholder: "Ex: 85000.00"
            }
          )
        ] }),
        errors.value && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.value })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Estágio Inicial *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: data.deal_stage_id,
            onChange: (e) => setData("deal_stage_id", e.target.value),
            className: "w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white",
            required: true,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Selecione um Estágio" }),
              stages.map((stage) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: stage.id, children: stage.name }, stage.id))
            ]
          }
        ),
        errors.deal_stage_id && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.deal_stage_id })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: onClose,
            className: "flex-1 px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",
            children: "Cancelar"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            disabled: processing || !data.title || !data.deal_stage_id || !data.contact_id,
            className: "flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl font-medium transition-all shadow-sm shadow-indigo-200",
            children: processing ? "Criando..." : "Criar Negócio"
          }
        )
      ] })
    ] })
  ] }) });
}
export {
  CreateDealModal as C,
  DollarSign as D,
  MessageSquare as M
};
