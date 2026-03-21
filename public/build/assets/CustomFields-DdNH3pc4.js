import { r as reactExports, a as axios, j as jsxRuntimeExports } from "./app-DITW5dun.js";
import { c as createLucideIcon } from "./createLucideIcon-C6NVuwOJ.js";
import { P as Plus } from "./plus-CGUw857e.js";
import { C as Calendar } from "./calendar-IU5HW2RZ.js";
import { L as List } from "./list-DwDqrTiS.js";
import { P as PenLine } from "./pen-line-CAiPTmku.js";
import { T as Trash2 } from "./trash-2-CVGjSH52.js";
import { X } from "./x-yBa_plo7.js";
import { S as Save } from "./save-TYDEusDj.js";
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
];
const Hash = createLucideIcon("hash", __iconNode$2);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
];
const TextAlignStart = createLucideIcon("text-align-start", __iconNode$1);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6", key: "1528k5" }],
  ["path", { d: "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7", key: "13ksps" }],
  ["path", { d: "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1", key: "1n9rhb" }],
  ["path", { d: "M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1", key: "1mj8rg" }],
  ["path", { d: "M9 6v12", key: "velyjx" }]
];
const TextCursorInput = createLucideIcon("text-cursor-input", __iconNode);
const FIELD_TYPES = [
  { value: "text", label: "Texto livre", icon: TextAlignStart },
  { value: "number", label: "Número", icon: Hash },
  { value: "date", label: "Data", icon: Calendar },
  { value: "select", label: "Lista suspensa", icon: List }
];
const InputClass = "w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent";
function CustomFieldsTab() {
  const [fields, setFields] = reactExports.useState([]);
  const [entityType, setEntityType] = reactExports.useState("contact");
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [editingId, setEditingId] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const emptyForm = { entity_type: "contact", label: "", field_type: "text", options: [], is_required: false };
  const [form, setForm] = reactExports.useState(emptyForm);
  const [newOption, setNewOption] = reactExports.useState("");
  reactExports.useEffect(() => {
    fetchFields();
  }, [entityType]);
  const fetchFields = async () => {
    try {
      const { data } = await axios.get("/api/custom-fields", { params: { entity_type: entityType } });
      setFields(data);
    } catch (e) {
      console.error(e);
    }
  };
  const openCreate = () => {
    setEditingId(null);
    setForm({ ...emptyForm, entity_type: entityType });
    setIsModalOpen(true);
  };
  const openEdit = (f) => {
    setEditingId(f.id);
    setForm({ entity_type: f.entity_type, label: f.label, field_type: f.field_type, options: f.options || [], is_required: f.is_required });
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setForm(emptyForm);
    setNewOption("");
  };
  const handleSubmit = async (e) => {
    var _a, _b;
    e.preventDefault();
    setLoading(true);
    try {
      if (editingId) {
        await axios.put(`/api/custom-fields/${editingId}`, form);
      } else {
        await axios.post("/api/custom-fields", form);
      }
      closeModal();
      fetchFields();
    } catch (er) {
      alert("Erro: " + (((_b = (_a = er.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || er.message));
    } finally {
      setLoading(false);
    }
  };
  const handleDelete = async (id) => {
    if (!confirm("Excluir este campo e todos os seus valores?")) return;
    await axios.delete(`/api/custom-fields/${id}`);
    fetchFields();
  };
  const addOption = () => {
    if (newOption.trim()) {
      setForm((f) => ({ ...f, options: [...f.options, newOption.trim()] }));
      setNewOption("");
    }
  };
  const removeOption = (i) => setForm((f) => ({ ...f, options: f.options.filter((_, idx) => idx !== i) }));
  const TypeIcon = ({ type }) => {
    const t = FIELD_TYPES.find((t2) => t2.value === type);
    const Icon = (t == null ? void 0 : t.icon) || TextAlignStart;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full bg-gray-50 dark:bg-gray-950", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex justify-between items-center flex-shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TextCursorInput, { className: "w-6 h-6 text-indigo-500" }),
          " Campos Customizados"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mt-0.5", children: "Adicione campos extras para seus contatos e negócios." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: openCreate, className: "flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
        " Novo Campo"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-8 flex gap-1 pt-4 flex-shrink-0", children: ["contact", "deal"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setEntityType(t),
        className: `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${entityType === t ? "bg-indigo-600 text-white" : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"}`,
        children: t === "contact" ? "👤 Contatos" : "💼 Negócios (CRM)"
      },
      t
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-8 pt-4", children: fields.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16 bg-white dark:bg-gray-800 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextCursorInput, { className: "w-10 h-10 mx-auto text-gray-300 mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-900 dark:text-white", children: "Nenhum campo criado" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 mt-1", children: [
        "Crie campos extras para enriquecer os dados dos seus ",
        entityType === "contact" ? "contatos" : "negócios",
        "."
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: fields.map((f) => {
      var _a, _b;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TypeIcon, { type: f.field_type }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-900 dark:text-white", children: f.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-400", children: [
              (_a = FIELD_TYPES.find((t) => t.value === f.field_type)) == null ? void 0 : _a.label,
              " ",
              f.is_required ? "• Obrigatório" : ""
            ] }),
            ((_b = f.options) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-400 mt-0.5", children: [
              "Opções: ",
              f.options.join(", ")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => openEdit(f), className: "p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleDelete(f.id), className: "p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }) })
        ] })
      ] }, f.id);
    }) }) }),
    isModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-2xl w-full max-w-lg shadow-2xl border border-gray-200 dark:border-gray-700", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-900 dark:text-white", children: editingId ? "Editar Campo" : "Novo Campo Customizado" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: closeModal, className: "text-gray-400 hover:text-gray-600 text-2xl leading-none", children: "×" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "p-6 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Nome do Campo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              required: true,
              placeholder: "Ex: CPF, Código do Cliente",
              className: InputClass,
              value: form.label,
              onChange: (e) => setForm((f) => ({ ...f, label: e.target.value }))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Tipo do Campo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: InputClass, value: form.field_type, onChange: (e) => setForm((f) => ({ ...f, field_type: e.target.value, options: [] })), children: FIELD_TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: t.value, children: t.label }, t.value)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Entidade" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: InputClass, value: form.entity_type, onChange: (e) => setForm((f) => ({ ...f, entity_type: e.target.value })), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "contact", children: "Contato" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "deal", children: "Negócio (CRM)" })
            ] })
          ] })
        ] }),
        form.field_type === "select" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Opções da Lista" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Ex: Ativo", className: InputClass, value: newOption, onChange: (e) => setNewOption(e.target.value), onKeyDown: (e) => e.key === "Enter" && (e.preventDefault(), addOption()) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: addOption, className: "px-3 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium", children: "Adicionar" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: form.options.map((o, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-2.5 py-1 rounded-lg text-xs font-medium", children: [
            o,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => removeOption(i), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" }) })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", id: "is_required", className: "rounded", checked: form.is_required, onChange: (e) => setForm((f) => ({ ...f, is_required: e.target.checked })) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "is_required", className: "text-sm text-gray-700 dark:text-gray-300", children: "Campo obrigatório" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-t border-gray-100 dark:border-gray-700 flex justify-end gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: closeModal, className: "px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg", children: "Cancelar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleSubmit, disabled: loading, className: "flex items-center gap-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium disabled:opacity-50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
          " ",
          loading ? "Salvando..." : "Salvar Campo"
        ] })
      ] })
    ] }) })
  ] });
}
const CustomFields = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CustomFieldsTab
}, Symbol.toStringTag, { value: "Module" }));
export {
  CustomFieldsTab as C,
  TextCursorInput as T,
  CustomFields as a
};
