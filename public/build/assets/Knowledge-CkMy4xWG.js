import { r as reactExports, u as useForm, j as jsxRuntimeExports, H as Head_default, a as axios } from "./app-hrHU2Rta.js";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-DNHfWTVk.js";
import { c as createLucideIcon } from "./createLucideIcon-Cs3ft1Gr.js";
import { L as LoaderCircle } from "./loader-circle-NUlByOb8.js";
import { P as Plus } from "./plus-txLQSEPe.js";
import { X } from "./x-CQd1WFjO.js";
import { T as Trash2 } from "./trash-2-D8Auhn5Q.js";
import { F as FileText } from "./file-text-DcBMXBjb.js";
import "./transition-Txhu5uZW.js";
import "./search-C_4m6HXm.js";
import "./mail-CZ3lwBn3.js";
import "./users-yMgWY2wd.js";
import "./settings-Ubvud4p3.js";
import "./calendar-Re6Vc4Ka.js";
import "./chevron-right-DgBPBSsd.js";
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M12 18V5", key: "adv99a" }],
  ["path", { d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4", key: "1e3is1" }],
  ["path", { d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5", key: "1gqd8o" }],
  ["path", { d: "M17.997 5.125a4 4 0 0 1 2.526 5.77", key: "iwvgf7" }],
  ["path", { d: "M18 18a4 4 0 0 0 2-7.464", key: "efp6ie" }],
  ["path", { d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517", key: "1gq6am" }],
  ["path", { d: "M6 18a4 4 0 0 1-2-7.464", key: "k1g0md" }],
  ["path", { d: "M6.003 5.125a4 4 0 0 0-2.526 5.77", key: "q97ue3" }]
];
const Brain = createLucideIcon("brain", __iconNode$2);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
const Link = createLucideIcon("link", __iconNode$1);
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
      d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
      key: "ul74o6"
    }
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M5 6v4", key: "ilb8ba" }],
  ["path", { d: "M19 14v4", key: "blhpug" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M7 8H3", key: "zfb6yr" }],
  ["path", { d: "M21 16h-4", key: "1cnmox" }],
  ["path", { d: "M11 3H9", key: "1obp7u" }]
];
const WandSparkles = createLucideIcon("wand-sparkles", __iconNode);
function Knowledge({ knowledgeItems = [] }) {
  const [isAdding, setIsAdding] = reactExports.useState(false);
  const [isImporting, setIsImporting] = reactExports.useState(false);
  const [suggestions, setSuggestions] = reactExports.useState([]);
  const [loadingSuggestions, setLoadingSuggestions] = reactExports.useState(false);
  const { data, setData, post, delete: destroy, processing, reset } = useForm({
    question: "",
    answer: "",
    keywords: "",
    // Para importação
    import_type: "link",
    import_url: "",
    import_file: null
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
  const handleImport = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("type", data.import_type);
    if (data.import_type === "link") formData.append("url", data.import_url);
    if (data.import_type === "file") formData.append("file", data.import_file);
    post(route("settings.knowledge.import"), {
      onSuccess: () => {
        setIsImporting(false);
        reset();
      }
    });
  };
  const fetchSuggestions = async () => {
    setLoadingSuggestions(true);
    try {
      const { data: data2 } = await axios.get(route("settings.knowledge.suggestions"));
      setSuggestions(data2);
    } catch (error) {
      alert("Falha ao obter sugestões da IA.");
    } finally {
      setLoadingSuggestions(false);
    }
  };
  const acceptSuggestion = (suggestion) => {
    setData({
      ...data,
      question: suggestion.question,
      answer: suggestion.answer
    });
    setIsAdding(true);
    setSuggestions(suggestions.filter((s) => s !== suggestion));
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg border border-gray-200 dark:border-gray-700 p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-5 h-5 text-indigo-500" }),
                "Itens de Conhecimento"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: fetchSuggestions,
                    disabled: loadingSuggestions,
                    className: "px-4 py-2 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-lg hover:bg-emerald-100 transition flex items-center gap-2 border border-emerald-200 dark:border-emerald-800",
                    children: [
                      loadingSuggestions ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(WandSparkles, { className: "w-4 h-4" }),
                      "Sugerir com IA"
                    ]
                  }
                ),
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
              ] })
            ] }),
            suggestions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 p-4 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-900/30 rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-bold text-emerald-800 dark:text-emerald-400", children: "Sugestões Geradas pela IA (Clique para Revisar e Salvar)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSuggestions([]), className: "text-emerald-600 hover:text-emerald-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: suggestions.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg border border-emerald-100 dark:border-emerald-900/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-700 dark:text-gray-300", children: s.question }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => acceptSuggestion(s), className: "text-xs bg-emerald-600 text-white px-2 py-1 rounded hover:bg-emerald-700 transition", children: "Usar" })
              ] }, i)) })
            ] }),
            isAdding && /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "mb-8 p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-indigo-100 dark:border-indigo-900/30 animate-in slide-in-from-top-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Pergunta ou Tópico" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: data.question, onChange: (e) => setData("question", e.target.value), required: true, className: "mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-md shadow-sm sm:text-sm" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Resposta da IA" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: data.answer, onChange: (e) => setData("answer", e.target.value), rows: 4, required: true, className: "mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-md shadow-sm sm:text-sm" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: processing, className: "px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50", children: "Salvar Item" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
                  setIsAdding(false);
                  reset();
                }, className: "px-4 py-2 text-gray-600 dark:text-gray-400", children: "Cancelar" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              knowledgeItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border border-gray-100 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-900 dark:text-white", children: item.question }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400 whitespace-pre-wrap", children: item.answer })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleDelete(item.id), className: "p-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }) })
              ] }) }, item.id)),
              knowledgeItems.length === 0 && !isAdding && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12 text-gray-500", children: "Nenhum item cadastrado. Use o botão acima ou importe dados." })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg border border-gray-200 dark:border-gray-700 p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "w-5 h-5 text-blue-500" }),
              "Importação Rápida"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400 mb-6", children: "Importe textos, links ou arquivos para treinar sua IA automaticamente." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleImport, className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-2", children: "Tipo de Fonte" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setData("import_type", "link"),
                      className: `p-2 rounded-lg border text-sm flex items-center justify-center gap-2 ${data.import_type === "link" ? "bg-indigo-50 border-indigo-500 text-indigo-700 dark:bg-indigo-900/30" : "border-gray-200 dark:border-gray-700 dark:text-white"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "w-4 h-4" }),
                        " Link/URL"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setData("import_type", "file"),
                      className: `p-2 rounded-lg border text-sm flex items-center justify-center gap-2 ${data.import_type === "file" ? "bg-indigo-50 border-indigo-500 text-indigo-700 dark:bg-indigo-900/30" : "border-gray-200 dark:border-gray-700 dark:text-white"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4" }),
                        " Arquivo"
                      ]
                    }
                  )
                ] })
              ] }),
              data.import_type === "link" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1", children: "URL Completa" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "url",
                    value: data.import_url,
                    onChange: (e) => setData("import_url", e.target.value),
                    placeholder: "https://exemplo.com/faq",
                    className: "w-full text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-md",
                    required: data.import_type === "link"
                  }
                )
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Upload de Arquivo (TXT, XML, HTML)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "file",
                    onChange: (e) => setData("import_file", e.target.files[0]),
                    accept: ".txt,.xml,.html",
                    className: "w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100",
                    required: data.import_type === "file"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "submit",
                  disabled: processing,
                  className: "w-full py-2.5 bg-gray-900 dark:bg-gray-700 text-white rounded-lg text-sm font-bold hover:bg-black transition disabled:opacity-50",
                  children: processing ? "Processando Fonte..." : "Importar e Treinar"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-900/30 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-yellow-800 dark:text-yellow-400 leading-relaxed uppercase font-bold", children: "Aviso de IA" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-yellow-700 dark:text-yellow-500 mt-1", children: "Nossa IA resumirá o conteúdo da fonte em perguntas e respostas curtas. Revise os itens gerados na lista ao lado." })
            ] })
          ] }) })
        ] }) }) })
      ]
    }
  );
}
export {
  Knowledge as default
};
