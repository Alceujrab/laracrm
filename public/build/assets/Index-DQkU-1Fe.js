import { r as reactExports, a as axios, j as jsxRuntimeExports, b as router3, H as Head_default } from "./app-3e9XK7Ij.js";
import { C as Car, S as SquareCheckBig, A as AuthenticatedLayout } from "./AuthenticatedLayout-hmUmJcX6.js";
import { X } from "./x-DuShSOF2.js";
import { L as LoaderCircle, C as CircleCheck } from "./loader-circle-BUW6aGR0.js";
import { D as DollarSign, M as MessageSquare, C as CreateDealModal } from "./CreateDealModal-DdXNYt0A.js";
import { U as User } from "./user-SLJNh4ye.js";
import { C as Calendar } from "./calendar-DGr312oN.js";
import { c as createLucideIcon } from "./createLucideIcon-B6l4ffqL.js";
import { T as Trophy, L as LayoutDashboard, a as TrendingUp } from "./trophy-BHWGScOO.js";
import { S as Sortable, C as ConfiguracoesFunil } from "./ConfiguracoesFunil-BbU4nG4I.js";
import { C as CircleAlert } from "./circle-alert-tKimglmB.js";
import { S as Settings } from "./settings-D-BYWaUX.js";
import { S as Search } from "./search-HfAQsgG2.js";
import { F as Funnel } from "./funnel-oSOHeEpk.js";
import { E as Ellipsis } from "./ellipsis-CSGoKceu.js";
import { P as Plus } from "./plus-CKsX39Jk.js";
import "./transition-BhKRD75I.js";
import "./mail-CzlcNYbI.js";
import "./users-_hSpNbHy.js";
import "./chevron-right-BkmCI_qK.js";
import "./type-CrdVP9qo.js";
import "./trash-2-B0wWHh0S.js";
import "./check-Ce7Fsqax.js";
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
];
const CircleX = createLucideIcon("circle-x", __iconNode$2);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode$1);
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
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode);
function DealSlideOver({ isOpen, onClose, dealId }) {
  var _a;
  const [deal, setDeal] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [activeTab, setActiveTab] = reactExports.useState("resumo");
  const [isAddingTask, setIsAddingTask] = reactExports.useState(false);
  const [newTaskTitle, setNewTaskTitle] = reactExports.useState("");
  const [newTaskDueDate, setNewTaskDueDate] = reactExports.useState("");
  const [actionLoading, setActionLoading] = reactExports.useState(null);
  const [statusLoading, setStatusLoading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (isOpen && dealId) {
      setLoading(true);
      axios.get(route("api.crm.deals.show", { deal: dealId })).then((response) => setDeal(response.data)).catch((error) => console.error("Error fetching deal details:", error)).finally(() => setLoading(false));
    }
  }, [isOpen, dealId]);
  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    try {
      const response = await axios.post(route("api.tasks.store", { deal: dealId }), {
        title: newTaskTitle,
        due_date: newTaskDueDate || null
      });
      setDeal((prev) => ({ ...prev, tasks: [response.data, ...prev.tasks || []] }));
      setNewTaskTitle("");
      setNewTaskDueDate("");
      setIsAddingTask(false);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };
  const handleToggleTask = async (taskId) => {
    setActionLoading(taskId);
    try {
      const response = await axios.put(route("api.tasks.toggle", { task: taskId }));
      setDeal((prev) => ({ ...prev, tasks: prev.tasks.map((t) => t.id === taskId ? response.data : t) }));
    } catch (error) {
      console.error("Error toggling task:", error);
    } finally {
      setActionLoading(null);
    }
  };
  const handleDeleteTask = async (taskId) => {
    if (!confirm("Excluir esta tarefa?")) return;
    setActionLoading(taskId);
    try {
      await axios.delete(route("api.tasks.destroy", { task: taskId }));
      setDeal((prev) => ({ ...prev, tasks: prev.tasks.filter((t) => t.id !== taskId) }));
    } catch (error) {
      console.error("Error deleting task:", error);
    } finally {
      setActionLoading(null);
    }
  };
  const handleUpdateStatus = (newStatus) => {
    if (!deal) return;
    setStatusLoading(true);
    router3.patch(route("crm.deals.status", { deal: deal.id }), { status: newStatus }, {
      preserveScroll: true,
      onSuccess: () => {
        setDeal((prev) => ({ ...prev, status: newStatus }));
        setStatusLoading(false);
        if (newStatus !== "open") onClose();
      },
      onError: () => setStatusLoading(false)
    });
  };
  const formatCurrency = (value) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value || 0);
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 bg-gray-900 bg-opacity-50 transition-opacity backdrop-blur-sm",
        onClick: onClose
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-y-0 right-0 flex max-w-full pl-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-screen max-w-md transform transition ease-in-out duration-300 sm:duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col bg-white dark:bg-gray-900 shadow-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-6 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/80 flex-shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-gray-900 dark:text-white", children: loading ? "Carregando..." : (deal == null ? void 0 : deal.vehicle) ? `${deal.vehicle.make} ${deal.vehicle.model}` : (deal == null ? void 0 : deal.title) || "Detalhes da Negociação" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: onClose,
              className: "ml-3 flex h-7 w-7 items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
            }
          )
        ] }),
        !loading && deal && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center space-x-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10", children: [
            "Fase: ",
            ((_a = deal.dealStage) == null ? void 0 : _a.name) || "Desconhecido"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${deal.status === "won" ? "bg-green-50 text-green-700 ring-green-600/20" : deal.status === "lost" ? "bg-red-50 text-red-700 ring-red-600/10" : "bg-blue-50 text-blue-700 ring-blue-700/10"}`, children: deal.status === "open" ? "Em Andamento" : deal.status === "won" ? "Ganho" : "Perdido" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-gray-200 dark:border-gray-800 px-6 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "-mb-px flex space-x-6", children: ["resumo", "tarefas", "historico"].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setActiveTab(tab),
          className: `whitespace-nowrap px-1 py-4 border-b-2 font-medium text-sm capitalize ${activeTab === tab ? "border-indigo-500 text-indigo-600 dark:text-indigo-400" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"}`,
          children: tab
        },
        tab
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex-1 overflow-y-auto px-6 py-6", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-8 h-8 text-indigo-500 animate-spin" }) }) : deal ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        activeTab === "resumo" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3", children: "Dados Financeiros" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-between border border-gray-100 dark:border-gray-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-gray-700 dark:text-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-5 h-5 mr-2 text-green-600 dark:text-green-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Valor do Negócio" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold text-gray-900 dark:text-white", children: formatCurrency(deal.value) })
            ] })
          ] }),
          deal.contact && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3", children: "Cliente / Contato" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-gray-900 dark:text-white font-medium text-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-5 h-5 mr-3 text-indigo-500" }),
                deal.contact.name
              ] }),
              (deal.contact.phone || deal.contact.email) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pl-8 space-y-1 text-sm text-gray-500 dark:text-gray-400", children: [
                deal.contact.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  "📞 ",
                  deal.contact.phone
                ] }),
                deal.contact.email && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  "✉️ ",
                  deal.contact.email
                ] })
              ] })
            ] })
          ] }),
          deal.vehicle && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3", children: "Veículo de Interesse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-gray-900 dark:text-white font-medium text-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Car, { className: "w-5 h-5 mr-3 text-indigo-500" }),
                deal.vehicle.make,
                " ",
                deal.vehicle.model
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pl-8 flex space-x-3 text-xs text-gray-500 dark:text-gray-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded", children: deal.vehicle.year }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded", children: [
                  deal.vehicle.mileage,
                  " km"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded", children: deal.vehicle.condition === "new" ? "0km" : "Seminovo" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3", children: "Informações do Sistema" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-2 text-gray-600 dark:text-gray-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 mr-2" }),
                " Criado em ",
                new Date(deal.created_at).toLocaleDateString()
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-4 h-4 mr-2" }),
                " ID do CRM: #",
                deal.id
              ] }),
              deal.assignee && /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 mr-2" }),
                " Vendedor: ",
                deal.assignee.name
              ] })
            ] })
          ] })
        ] }),
        activeTab === "tarefas" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          !isAddingTask ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setIsAddingTask(true),
              className: "w-full flex items-center justify-center px-4 py-2 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "w-4 h-4 mr-2" }),
                "Adicionar Nova Tarefa"
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleAddTask, className: "bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-indigo-100 dark:border-indigo-900/30 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                autoFocus: true,
                type: "text",
                placeholder: "O que precisa ser feito?",
                value: newTaskTitle,
                onChange: (e) => setNewTaskTitle(e.target.value),
                className: "w-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 rounded-md text-sm focus:ring-indigo-500"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "date",
                  value: newTaskDueDate,
                  onChange: (e) => setNewTaskDueDate(e.target.value),
                  className: "flex-1 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 rounded-md text-xs focus:ring-indigo-500"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "px-3 py-1 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700", children: "Salvar" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setIsAddingTask(false), className: "px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium", children: "Cancelar" })
            ] })
          ] }),
          deal.tasks && deal.tasks.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 mt-4", children: deal.tasks.map((task) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start group bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-200 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                className: "mt-1 flex-shrink-0 w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 cursor-pointer",
                checked: task.is_completed,
                onChange: () => handleToggleTask(task.id),
                disabled: actionLoading === task.id
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-3 flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium truncate ${task.is_completed ? "line-through text-gray-400" : "text-gray-900 dark:text-white"}`, children: task.title }),
              task.due_date && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 mt-1 flex items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3 mr-1" }),
                " ",
                new Date(task.due_date).toLocaleDateString()
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleDeleteTask(task.id), className: "opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-500 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }) })
          ] }, task.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "w-6 h-6 text-gray-400" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-gray-900 dark:text-white", children: "Sem tarefas" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1", children: 'Crie tarefas como "Ligar para cliente" ou "Enviar proposta PDF".' })
          ] })
        ] }),
        activeTab === "historico" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-6 h-6 text-gray-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-gray-900 dark:text-white", children: "Histórico e Anotações" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Anotações da negociação aparecerão aqui em breve." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-sm focus:ring-2 focus:ring-indigo-500", rows: "3", placeholder: "Digite uma anotação sobre essa venda..." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-2 w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium text-sm py-2 rounded-lg", children: "Salvar Anotação" })
          ] })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-gray-500 py-10", children: "Negociação não encontrada." }) }),
      !loading && deal && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/80 flex-shrink-0", children: deal.status === "open" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handleUpdateStatus("won"),
            disabled: statusLoading,
            className: "flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl text-sm transition-colors disabled:opacity-50",
            children: [
              statusLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-4 h-4" }),
              "Marcar como Ganho"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handleUpdateStatus("lost"),
            disabled: statusLoading,
            className: "flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl text-sm transition-colors disabled:opacity-50",
            children: [
              statusLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-4 h-4" }),
              "Marcar como Perdido"
            ]
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `flex items-center gap-2 font-bold text-sm ${deal.status === "won" ? "text-green-600 dark:text-green-400" : "text-red-500 dark:text-red-400"}`, children: [
          deal.status === "won" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-4 h-4" }),
          deal.status === "won" ? "Negócio Ganho!" : "Negócio Perdido"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handleUpdateStatus("open"),
            disabled: statusLoading,
            className: "flex items-center gap-1.5 px-3 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg text-xs transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-3.5 h-3.5" }),
              " Reabrir Neg\\u00f3cio"
            ]
          }
        )
      ] }) })
    ] }) }) })
  ] });
}
function CRMIndex({ stages = [], contacts = [], filters = {}, closedDeals = [], closedStats = {} }) {
  const [activeTab, setActiveTab] = reactExports.useState("negociacoes");
  const [selectedDealId, setSelectedDealId] = reactExports.useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = reactExports.useState(false);
  const [searchTerm, setSearchTerm] = reactExports.useState(filters.search || "");
  const [errorToast, setErrorToast] = reactExports.useState(null);
  const [closedFilter, setClosedFilter] = reactExports.useState("all");
  const [closedSearch, setClosedSearch] = reactExports.useState("");
  const containerRefs = reactExports.useRef([]);
  const sortablesRefs = reactExports.useRef([]);
  const crmMenu = [
    { label: "Negociações", icon: LayoutDashboard, active: activeTab === "negociacoes", id: "negociacoes" },
    { label: "Propostas", icon: TrendingUp, active: activeTab === "propostas", id: "propostas" },
    { label: "Ganhos", icon: CircleCheck, active: activeTab === "ganhos", id: "ganhos" },
    { label: "Configurações", icon: Settings, active: activeTab === "configuracoes", id: "configuracoes" }
  ];
  const sidebarAction = {
    label: "+ Novo Negócio",
    icon: null,
    onClick: () => setIsCreateModalOpen(true)
  };
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value || 0);
  };
  reactExports.useEffect(() => {
    if (activeTab !== "negociacoes") return;
    const cleanup = () => {
      if (sortablesRefs.current) {
        sortablesRefs.current.forEach((s) => {
          if (s && typeof s.destroy === "function") {
            try {
              s.destroy();
            } catch (e) {
              console.warn("Sortable cleanup error:", e);
            }
          }
        });
      }
      sortablesRefs.current = [];
    };
    cleanup();
    containerRefs.current.forEach((container, index) => {
      if (container && container.nodeType === 1) {
        try {
          sortablesRefs.current[index] = new Sortable(container, {
            group: "shared-deals",
            animation: 150,
            ghostClass: "opacity-50",
            dragClass: "shadow-2xl",
            onEnd: (evt) => {
              const itemEl = evt.item;
              const dealId = itemEl.dataset.dealId;
              const destStageId = evt.to.dataset.stageId;
              const sourceStageId = evt.from.dataset.stageId;
              if (sourceStageId !== destStageId && dealId && destStageId) {
                router3.put(route("crm.deals.move", { deal: dealId }), {
                  deal_stage_id: destStageId
                }, {
                  preserveScroll: true,
                  preserveState: false,
                  // Força re-render para recuar o card ao lugar certo se falhar
                  onError: (errors) => {
                    if (errors.message) {
                      setErrorToast(errors.message);
                      setTimeout(() => setErrorToast(null), 6e3);
                    }
                  }
                });
              }
            }
          });
        } catch (err) {
          console.error("Sortable init error at index " + index, err);
        }
      }
    });
    return cleanup;
  }, [stages, activeTab]);
  reactExports.useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      router3.get(
        route("crm.index"),
        { search: searchTerm },
        {
          preserveState: true,
          replace: true,
          preserveScroll: true
        }
      );
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);
  const renderNegociacoes = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full bg-gray-50 dark:bg-gray-900/50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex justify-between items-center z-10 w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: "Funil de Vendas" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400 mt-1", children: "Gerencie suas negociações arrastando os cards pelos estágios." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "Buscar negócio...",
              className: "pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 w-64 dark:text-gray-200 transition-all font-medium",
              value: searchTerm,
              onChange: (e) => setSearchTerm(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "w-4 h-4 mr-2" }),
          " Filtros"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab("configuracoes"), className: "flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "w-4 h-4 mr-2" }),
          " Configurar Funil"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-x-auto overflow-y-hidden p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-6 h-full items-start", children: [
      stages.map((stage, index) => {
        var _a, _b, _c;
        const stageTotal = ((_a = stage.deals) == null ? void 0 : _a.reduce((acc, deal) => acc + parseFloat(deal.value || 0), 0)) || 0;
        const dealCount = ((_b = stage.deals) == null ? void 0 : _b.length) || 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 w-80 flex flex-col max-h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-white dark:bg-gray-800 p-4 rounded-t-xl border-t-4 shadow-sm mb-3 relative",
              style: { borderTopColor: stage.color || "#e5e7eb" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-800 dark:text-white", children: stage.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { className: "w-5 h-5" }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-sm text-gray-500 dark:text-gray-400", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: formatCurrency(stageTotal) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full text-xs font-medium", children: [
                    dealCount,
                    " Negócios"
                  ] })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              ref: (el) => containerRefs.current[index] = el,
              "data-stage-id": stage.id,
              className: "flex-1 overflow-y-auto space-y-3 pb-4 pr-1 scrollbar-hide min-h-[150px]",
              children: (_c = stage.deals) == null ? void 0 : _c.map((deal) => {
                var _a2;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    "data-deal-id": deal.id,
                    onClick: () => setSelectedDealId(deal.id),
                    className: "bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 cursor-grab active:cursor-grabbing hover:shadow-md hover:border-indigo-300 transition-all group",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-1 text-[10px] font-bold uppercase rounded tracking-wider ${deal.status === "won" ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400" : deal.status === "lost" ? "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400" : "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400"}`, children: deal.status === "open" ? "Aberto" : deal.status }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-gray-400 hover:text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { className: "w-4 h-4" }) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-900 dark:text-white text-sm mb-1 text-balance", children: deal.vehicle ? `${deal.vehicle.make} ${deal.vehicle.model}` : deal.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 dark:text-gray-400 mb-2 truncate", children: [
                        "👥 ",
                        ((_a2 = deal.contact) == null ? void 0 : _a2.name) || "Sem contato"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold text-gray-800 dark:text-gray-200 mb-3", children: formatCurrency(deal.value) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-3 pt-3 border-t border-gray-100 dark:border-gray-700", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-xs text-gray-500 dark:text-gray-400", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3 mr-1" }),
                          " ",
                          new Date(deal.created_at).toLocaleDateString()
                        ] }),
                        deal.assignee && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-[10px] font-bold text-indigo-700 dark:text-indigo-300 ring-2 ring-white", children: deal.assignee.name.charAt(0) })
                      ] })
                    ]
                  },
                  deal.id
                );
              })
            }
          )
        ] }, stage.id);
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-80 flex flex-col pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setActiveTab("configuracoes"),
          className: "flex items-center justify-center w-full py-4 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl text-gray-500 hover:text-indigo-600 hover:border-indigo-400 hover:bg-indigo-50/50 transition-all font-medium",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-5 h-5 mr-2" }),
            " Adicionar Estágio"
          ]
        }
      ) })
    ] }) })
  ] });
  const renderPropostas = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-full text-center p-8 bg-gray-50 dark:bg-gray-950", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2", children: "Módulo de Propostas" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 dark:text-gray-400 max-w-md mx-auto", children: "Em breve: crie e gerencie propostas comerciais integradas ao funil." })
  ] });
  const renderConfiguracoes = () => /* @__PURE__ */ jsxRuntimeExports.jsx(ConfiguracoesFunil, { stages });
  const renderGanhos = () => {
    const fmt = (v) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v || 0);
    const { wonTotal = 0, lostTotal = 0, wonCount = 0, lostCount = 0, winRate = 0 } = closedStats;
    const filtered = closedDeals.filter((d) => closedFilter === "all" || d.status === closedFilter).filter((d) => {
      var _a;
      if (!closedSearch) return true;
      const term = closedSearch.toLowerCase();
      return (d.title || "").toLowerCase().includes(term) || (((_a = d.contact) == null ? void 0 : _a.name) || "").toLowerCase().includes(term) || (d.vehicle ? `${d.vehicle.make} ${d.vehicle.model}`.toLowerCase().includes(term) : false);
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full bg-gray-50 dark:bg-gray-950", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex justify-between items-center shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: "Negócios Encerrados" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400 mt-0.5", children: "Histórico de negociações ganhas e perdidas." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 absolute left-3 top-2.5 text-gray-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "Buscar negócio ou contato...",
                className: "pl-9 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 w-56 dark:text-gray-200",
                value: closedSearch,
                onChange: (e) => setClosedSearch(e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden text-sm bg-white dark:bg-gray-800", children: [["all", "Todos"], ["won", "🏆 Ganhos"], ["lost", "❌ Perdidos"]].map(([val, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setClosedFilter(val),
              className: `px-3 py-1.5 font-medium transition-colors text-xs ${closedFilter === val ? val === "won" ? "bg-green-600 text-white" : val === "lost" ? "bg-red-500 text-white" : "bg-indigo-600 text-white" : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"}`,
              children: label
            },
            val
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-6 xl:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1", children: "Negócios Ganhos" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-green-600 dark:text-green-400", children: wonCount }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1", children: fmt(wonTotal) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1", children: "Negócios Perdidos" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-red-500 dark:text-red-400", children: lostCount }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1", children: fmt(lostTotal) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1", children: "Taxa de Vitória" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `text-2xl font-black ${winRate >= 50 ? "text-green-600 dark:text-green-400" : "text-yellow-600 dark:text-yellow-400"}`, children: [
              winRate,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 mt-1", children: [
              wonCount + lostCount,
              " negócios avaliados"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1", children: "Receita Gerada" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-black text-indigo-600 dark:text-indigo-400", children: fmt(wonTotal) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Total acumulado" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-baseline mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-800 dark:text-white text-sm", children: "Proporção Ganhos vs. Perdidos" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-gray-500", children: [
              wonCount,
              " ganhos · ",
              lostCount,
              " perdidos"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-4 rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-700 rounded-l-full",
                style: { width: `${winRate}%` }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-full bg-gradient-to-r from-red-400 to-red-500 transition-all duration-700 rounded-r-full",
                style: { width: `${100 - winRate}%` }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mt-2 text-xs text-gray-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-green-500 rounded-full inline-block" }),
              " Ganhos (",
              winRate,
              "%)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-red-500 rounded-full inline-block" }),
              " Perdidos (",
              100 - winRate,
              "%)"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-800 dark:text-white", children: "Histórico de Negócios" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full font-medium", children: [
              filtered.length,
              " registros"
            ] })
          ] }),
          filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-16 text-center text-gray-400 dark:text-gray-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-12 h-12 mx-auto mb-3 text-gray-200 dark:text-gray-700" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "Nenhum negócio encerrado encontrado." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1", children: "Marque negócios como Ganhos ou Perdidos no funil." })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-50 dark:bg-gray-900/50 text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider", children: "Negócio" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider", children: "Contato" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider", children: "Estágio" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider", children: "Valor" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider", children: "Responsável" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider", children: "Encerrado em" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-gray-100 dark:divide-gray-700", children: filtered.map((deal) => {
              var _a, _b, _c;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  onClick: () => setSelectedDealId(deal.id),
                  className: "hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer transition-colors group",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-6 py-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors", children: deal.vehicle ? `${deal.vehicle.make} ${deal.vehicle.model}` : deal.title }),
                      deal.vehicle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 mt-0.5", children: deal.title })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-gray-600 dark:text-gray-400", children: ((_a = deal.contact) == null ? void 0 : _a.name) || "—" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md font-medium", children: ((_b = deal.stage) == null ? void 0 : _b.name) || "—" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 font-bold text-gray-900 dark:text-white", children: fmt(deal.value) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold uppercase ${deal.status === "won" ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300" : "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300"}`, children: deal.status === "won" ? "✓ Ganho" : "✗ Perdido" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-gray-600 dark:text-gray-400", children: ((_c = deal.assignee) == null ? void 0 : _c.name) || "—" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-gray-500 dark:text-gray-400 text-xs", children: deal.closed_at || "—" })
                  ]
                },
                deal.id
              );
            }) })
          ] }) })
        ] })
      ] })
    ] });
  };
  const renderContent = () => {
    switch (activeTab) {
      case "negociacoes":
        return renderNegociacoes();
      case "propostas":
        return renderPropostas();
      case "configuracoes":
        return renderConfiguracoes();
      case "ganhos":
        return renderGanhos();
      default:
        return renderNegociacoes();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    AuthenticatedLayout,
    {
      activeModule: "crm",
      sidebarMenuItems: crmMenu.map((item) => ({ ...item, onClick: () => setActiveTab(item.id) })),
      sidebarAction,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Head_default, { title: `CRM - ${activeTab}` }),
        errorToast && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed top-4 right-4 z-[100] animate-in slide-in-from-top-2 fade-in duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-900/50 border-l-4 border-red-500 p-4 rounded-r-lg shadow-xl flex items-center max-w-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-6 h-6 text-red-500 mr-3 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-red-800 dark:text-red-200 leading-tight", children: errorToast }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setErrorToast(null), className: "ml-3 text-red-500 hover:text-red-700 bg-red-100 dark:bg-red-900 rounded-full p-1 opacity-80 hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }) })
        ] }) }),
        renderContent(),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          DealSlideOver,
          {
            isOpen: !!selectedDealId,
            dealId: selectedDealId,
            onClose: () => setSelectedDealId(null)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CreateDealModal,
          {
            isOpen: isCreateModalOpen,
            onClose: () => setIsCreateModalOpen(false),
            stages,
            contacts
          }
        )
      ]
    }
  );
}
export {
  CRMIndex as default
};
