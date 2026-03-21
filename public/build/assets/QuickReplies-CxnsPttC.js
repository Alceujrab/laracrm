import { r as reactExports, a as axios, j as jsxRuntimeExports } from "./app-Bog6UFGg.js";
import { c as createLucideIcon } from "./createLucideIcon-BtfvjG5O.js";
import { P as Plus } from "./plus-B7b3pnHM.js";
import { S as Search } from "./search-C019foUc.js";
import { G as Globe } from "./globe-BAgVrHS5.js";
import { U as User } from "./user-CAdaE3pj.js";
import { P as PenLine } from "./pen-line-Bc23wE8O.js";
import { T as Trash2 } from "./trash-2-CVmGGD9b.js";
import { S as Save } from "./save-CVvnHa_F.js";
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M14 14a2 2 0 0 0 2-2V8h-2", key: "1r06pg" }],
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ],
  ["path", { d: "M8 14a2 2 0 0 0 2-2V8H8", key: "1jzu5j" }]
];
const MessageSquareQuote = createLucideIcon("message-square-quote", __iconNode);
const InputClass = "w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent";
function QuickRepliesTab() {
  const [replies, setReplies] = reactExports.useState([]);
  const [search, setSearch] = reactExports.useState("");
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [editingId, setEditingId] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [fetching, setFetching] = reactExports.useState(true);
  const [apiError, setApiError] = reactExports.useState(null);
  const emptyForm = { title: "", content: "", category: "", is_global: false };
  const [form, setForm] = reactExports.useState(emptyForm);
  reactExports.useEffect(() => {
    fetchReplies();
  }, []);
  const fetchReplies = async () => {
    var _a, _b;
    setFetching(true);
    setApiError(null);
    try {
      const { data } = await axios.get("/api/quick-replies");
      setReplies(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error(e);
      setApiError(((_b = (_a = e.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || e.message || "Erro ao carregar frases rápidas. Verifique se as migrações foram executadas no servidor.");
    } finally {
      setFetching(false);
    }
  };
  const openCreate = () => {
    setEditingId(null);
    setForm(emptyForm);
    setIsModalOpen(true);
  };
  const openEdit = (r) => {
    setEditingId(r.id);
    setForm({ title: r.title, content: r.content, category: r.category || "", is_global: r.user_id === null });
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setForm(emptyForm);
  };
  const handleSubmit = async (e) => {
    var _a, _b;
    e.preventDefault();
    setLoading(true);
    try {
      if (editingId) {
        await axios.put(`/api/quick-replies/${editingId}`, form);
      } else {
        await axios.post("/api/quick-replies", form);
      }
      closeModal();
      fetchReplies();
    } catch (er) {
      alert("Erro: " + (((_b = (_a = er.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || er.message));
    } finally {
      setLoading(false);
    }
  };
  const handleDelete = async (id) => {
    if (!confirm("Excluir esta frase rápida?")) return;
    await axios.delete(`/api/quick-replies/${id}`);
    fetchReplies();
  };
  const filtered = replies.filter(
    (r) => r.title.toLowerCase().includes(search.toLowerCase()) || r.content.toLowerCase().includes(search.toLowerCase())
  );
  const grouped = filtered.reduce((acc, r) => {
    const cat = r.category || "Sem categoria";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(r);
    return acc;
  }, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full bg-gray-50 dark:bg-gray-950", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex justify-between items-center flex-shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquareQuote, { className: "w-6 h-6 text-indigo-500" }),
          " Frases Rápidas"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mt-0.5", children: "Respostas prontas que os operadores podem inserir no chat com um clique." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: openCreate, className: "flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
        " Nova Frase"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-8 pt-4 pb-2 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Buscar por título ou conteúdo...", className: InputClass + " pl-10", value: search, onChange: (e) => setSearch(e.target.value) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-8 pt-4 space-y-6", children: fetching ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-3 text-gray-500 text-sm", children: "Carregando frases..." })
    ] }) : apiError ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-700 dark:text-red-400 font-medium text-sm", children: "⚠️ Erro ao carregar frases rápidas" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 dark:text-red-500 text-xs mt-2", children: apiError }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-500 text-xs mt-3", children: [
        "Execute no servidor: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "font-mono bg-gray-100 px-1 rounded", children: "git pull && php artisan migrate" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: fetchReplies, className: "mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700", children: "Tentar novamente" })
    ] }) : Object.keys(grouped).length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16 bg-white dark:bg-gray-800 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquareQuote, { className: "w-10 h-10 mx-auto text-gray-300 mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-900 dark:text-white", children: "Nenhuma frase cadastrada" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mt-1", children: "Crie respostas prontas para agilizar o atendimento no inbox." })
    ] }) : Object.entries(grouped).map(([category, items]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 h-px bg-gray-200 dark:bg-gray-700" }),
        category,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 h-px bg-gray-200 dark:bg-gray-700" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: items.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 flex items-start justify-between shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 mr-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-indigo-700 dark:text-indigo-400 text-sm", children: [
              "/",
              r.title
            ] }),
            r.user_id === null ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-1.5 py-0.5 rounded", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-3 h-3" }),
              " Global"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-1.5 py-0.5 rounded", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3 h-3" }),
              " Minha"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mt-1 truncate", children: r.content })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => openEdit(r), className: "p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleDelete(r.id), className: "p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }) })
        ] })
      ] }, r.id)) })
    ] }, category)) }),
    isModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-2xl w-full max-w-lg shadow-2xl border border-gray-200 dark:border-gray-700", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-900 dark:text-white", children: editingId ? "Editar Frase Rápida" : "Nova Frase Rápida" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: closeModal, className: "text-gray-400 hover:text-gray-600 text-2xl leading-none", children: "×" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "p-6 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Atalho (sem espaço)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold", children: "/" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  required: true,
                  placeholder: "saudacao",
                  className: InputClass + " pl-6",
                  value: form.title,
                  onChange: (e) => setForm((f) => ({ ...f, title: e.target.value.replace(/\s/g, "_") }))
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Categoria (opcional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "Ex: Vendas, Suporte",
                className: InputClass,
                value: form.category,
                onChange: (e) => setForm((f) => ({ ...f, category: e.target.value }))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Conteúdo da Mensagem" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              required: true,
              rows: "5",
              placeholder: "Olá! Seja bem-vindo à Elite Veículos. Como posso ajudá-lo hoje?",
              className: InputClass,
              value: form.content,
              onChange: (e) => setForm((f) => ({ ...f, content: e.target.value }))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", id: "is_global", className: "rounded accent-green-600 w-4 h-4", checked: form.is_global, onChange: (e) => setForm((f) => ({ ...f, is_global: e.target.checked })) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "is_global", className: "text-sm text-gray-700 dark:text-gray-300 cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "inline w-3.5 h-3.5 text-green-600 mr-1" }),
            "Compartilhar com toda a equipe (Global)"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-t border-gray-100 dark:border-gray-700 flex justify-end gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: closeModal, className: "px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg", children: "Cancelar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleSubmit, disabled: loading, className: "flex items-center gap-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium disabled:opacity-50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
          " ",
          loading ? "Salvando..." : "Salvar Frase"
        ] })
      ] })
    ] }) })
  ] });
}
const QuickReplies = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: QuickRepliesTab
}, Symbol.toStringTag, { value: "Module" }));
export {
  MessageSquareQuote as M,
  QuickRepliesTab as Q,
  QuickReplies as a
};
