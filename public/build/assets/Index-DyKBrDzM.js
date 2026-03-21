import { u as useForm, j as jsxRuntimeExports, r as reactExports, H as Head_default, a as axios, b as router3 } from "./app-hrHU2Rta.js";
import { A as AuthenticatedLayout, S as SquareCheckBig } from "./AuthenticatedLayout-DNHfWTVk.js";
import { X } from "./x-CQd1WFjO.js";
import { T as Type } from "./type-DkWBVgyT.js";
import { C as Calendar } from "./calendar-Re6Vc4Ka.js";
import { B as Building2 } from "./building-2-BuoqzRAB.js";
import { U as User } from "./user-D_LfolUy.js";
import { C as Clock } from "./clock-BEY-bFY8.js";
import { C as CircleAlert } from "./circle-alert-hd7n0vbN.js";
import { C as CircleCheck } from "./circle-check-CYpsSuWg.js";
import { P as Plus } from "./plus-txLQSEPe.js";
import { L as LoaderCircle } from "./loader-circle-NUlByOb8.js";
import { c as createLucideIcon } from "./createLucideIcon-Cs3ft1Gr.js";
import { E as EllipsisVertical } from "./ellipsis-vertical-BAUZi6vy.js";
import "./transition-Txhu5uZW.js";
import "./search-C_4m6HXm.js";
import "./mail-CZ3lwBn3.js";
import "./users-yMgWY2wd.js";
import "./settings-Ubvud4p3.js";
import "./chevron-right-DgBPBSsd.js";
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
];
const CalendarDays = createLucideIcon("calendar-days", __iconNode);
function CreateTaskModal({ isOpen, onClose, deals = [], contacts = [] }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    title: "",
    due_date: "",
    deal_id: "",
    contact_id: ""
  });
  if (!isOpen) return null;
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("tasks.store_global"), {
      onSuccess: () => {
        reset();
        onClose();
      }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-900/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-900 dark:text-white", children: "Agendar Tarefa" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "text-gray-400 hover:text-gray-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "p-6 space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Título da Tarefa *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Type, { className: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: data.title,
              onChange: (e) => setData("title", e.target.value),
              className: "w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white",
              placeholder: "Ex: Ligar para confirmar proposta",
              required: true
            }
          )
        ] }),
        errors.title && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Data de Vencimento" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "date",
              value: data.due_date,
              onChange: (e) => setData("due_date", e.target.value),
              className: "w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white"
            }
          )
        ] }),
        errors.due_date && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.due_date })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-gray-100 dark:border-gray-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Negócio Vinculado (Opcional)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: data.deal_id,
              onChange: (e) => setData("deal_id", e.target.value),
              className: "w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white appearance-none",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Nenhum" }),
                deals.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: d.id, children: d.title }, d.id))
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Contato Vinculado (Opcional)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: data.contact_id,
              onChange: (e) => setData("contact_id", e.target.value),
              className: "w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white appearance-none",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Nenhum" }),
                contacts.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c.id, children: c.name }, c.id))
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-6 border-t border-gray-100 dark:border-gray-700 mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: onClose,
            className: "flex-1 px-4 py-2.5 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",
            children: "Cancelar"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            disabled: processing || !data.title,
            className: "flex-1 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl font-medium transition-all shadow-sm shadow-indigo-200",
            children: processing ? "Salvando..." : "Criar Tarefa"
          }
        )
      ] })
    ] })
  ] }) });
}
function TasksIndex({ tasks = [], deals = [], contacts = [] }) {
  const [isCreateModalOpen, setIsCreateModalOpen] = reactExports.useState(false);
  const [togglingTaskId, setTogglingTaskId] = reactExports.useState(null);
  const sidebarMenuItems = [
    { label: "Painel Visão Geral", icon: Clock, active: true }
  ];
  const sidebarAction = {
    label: "Nova Tarefa",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-5 h-5" }),
    onClick: () => setIsCreateModalOpen(true)
  };
  const today = /* @__PURE__ */ new Date();
  today.setHours(0, 0, 0, 0);
  const isToday = (dateString) => {
    if (!dateString) return false;
    const d = new Date(dateString);
    return d.getDate() === today.getDate() && d.getMonth() === today.getMonth() && d.getFullYear() === today.getFullYear();
  };
  const isOverdue = (dateString) => {
    if (!dateString) return false;
    const d = new Date(dateString);
    return d < today && !isToday(dateString);
  };
  const isUpcoming = (dateString) => {
    if (!dateString) return true;
    const d = new Date(dateString);
    return d > today && !isToday(dateString);
  };
  const overdueTasks = tasks.filter((t) => !t.is_completed && isOverdue(t.due_date));
  const todayTasks = tasks.filter((t) => !t.is_completed && isToday(t.due_date));
  const upcomingTasks = tasks.filter((t) => !t.is_completed && isUpcoming(t.due_date));
  const completedTasks = tasks.filter((t) => t.is_completed);
  const toggleTask = (task) => {
    setTogglingTaskId(task.id);
    axios.put(route("api.tasks.toggle", task.id)).then(() => {
      router3.reload({ preserveScroll: true, preserveState: true });
    }).finally(() => {
      setTogglingTaskId(null);
    });
  };
  const TaskCard = ({ task, late = false }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-xl border transition-all hover:shadow-md bg-white dark:bg-gray-800 flex items-start gap-4 group ${task.is_completed ? "opacity-60 border-gray-100 dark:border-gray-800" : late ? "border-red-100 dark:border-red-900/40 bg-red-50/30" : "border-gray-200 dark:border-gray-700"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => toggleTask(task),
        disabled: togglingTaskId === task.id,
        className: `w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${task.is_completed ? "bg-green-500 border-green-500 text-white" : "border-gray-300 hover:border-indigo-500 text-transparent hover:text-indigo-100"}`,
        children: togglingTaskId === task.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3 h-3 animate-spin text-indigo-500" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: `w-3.5 h-3.5 ${task.is_completed ? "opacity-100" : "opacity-0"}` })
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: `text-sm font-semibold truncate ${task.is_completed ? "line-through text-gray-500 dark:text-gray-400" : "text-gray-900 dark:text-gray-100"}`, children: task.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex flex-wrap items-center gap-2 text-xs", children: [
        task.due_date && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1 font-medium ${task.is_completed ? "text-gray-400" : late ? "text-red-600 dark:text-red-400" : "text-gray-500 dark:text-gray-400"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-3.5 h-3.5" }),
          new Date(task.due_date).toLocaleDateString()
        ] }),
        task.deal && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 truncate max-w-[150px]", children: [
          "💼 ",
          task.deal.title
        ] }),
        task.contact && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 truncate max-w-[150px]", children: [
          "👤 ",
          task.contact.name
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { className: "w-4 h-4" }) }) })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    AuthenticatedLayout,
    {
      activeModule: "tasks",
      sidebarMenuItems,
      sidebarAction,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Head_default, { title: "Tarefas Globais" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gray-50/50 dark:bg-gray-900/20 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto p-6 lg:p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8 flex justify-between items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "w-8 h-8 text-indigo-600 dark:text-indigo-500" }),
              "Minhas Tarefas"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-gray-500 dark:text-gray-400", children: "Acompanhe seus follow-ups e ligações diárias para nunca perder um negócio." })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-2 border-b-2 border-red-500/20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 text-red-500" }),
                  "Atrasadas"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 py-0.5 px-2 rounded-full text-xs font-bold", children: overdueTasks.length })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                overdueTasks.map((task) => /* @__PURE__ */ jsxRuntimeExports.jsx(TaskCard, { task, late: true }, task.id)),
                overdueTasks.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-400 dark:text-gray-500 italic text-center py-4", children: "Nenhuma tarefa atrasada! 🎉" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-2 border-b-2 border-emerald-500/20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-emerald-500" }),
                  "Para Hoje"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 py-0.5 px-2 rounded-full text-xs font-bold", children: todayTasks.length })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                todayTasks.map((task) => /* @__PURE__ */ jsxRuntimeExports.jsx(TaskCard, { task }, task.id)),
                todayTasks.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-400 dark:text-gray-500 italic text-center py-4", children: "Tudo limpo por hoje." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-2 border-b-2 border-indigo-500/20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 text-indigo-500" }),
                  "Próximas"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 py-0.5 px-2 rounded-full text-xs font-bold", children: upcomingTasks.length })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                upcomingTasks.map((task) => /* @__PURE__ */ jsxRuntimeExports.jsx(TaskCard, { task }, task.id)),
                upcomingTasks.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-400 dark:text-gray-500 italic text-center py-4", children: "Nenhuma tarefa agendada." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-2 border-b-2 border-gray-500/20 opacity-70", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-gray-500" }),
                  "Concluídas"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 py-0.5 px-2 rounded-full text-xs font-bold", children: completedTasks.length })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: completedTasks.map((task) => /* @__PURE__ */ jsxRuntimeExports.jsx(TaskCard, { task }, task.id)) })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CreateTaskModal,
          {
            isOpen: isCreateModalOpen,
            onClose: () => setIsCreateModalOpen(false),
            deals,
            contacts
          }
        )
      ]
    }
  );
}
export {
  TasksIndex as default
};
