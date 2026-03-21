import { r as reactExports, a as axios, j as jsxRuntimeExports } from "./app-D5XQWmF0.js";
import { Z as Zap } from "./zap-De3QCcMM.js";
import { P as Plus } from "./plus-BDBsIk0S.js";
import { c as createLucideIcon } from "./createLucideIcon-C7XOQWLe.js";
import { A as Activity } from "./activity-B08C8SwV.js";
import { C as ChevronRight } from "./chevron-right-DdVteP0R.js";
import { T as Trash2 } from "./trash-2-ByWBfHPu.js";
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M12 2v10", key: "mnfbl" }],
  ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]
];
const Power = createLucideIcon("power", __iconNode$1);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
];
const Settings2 = createLucideIcon("settings-2", __iconNode);
const TRIGGER_OPTIONS = [
  { value: "new_chat", label: "💬 Nova Conversa / Ticket Iniciado" },
  { value: "new_message", label: "📩 Nova Mensagem do Cliente" },
  { value: "stage_changed", label: "🔄 Negociação Movida de Estágio (CRM)" },
  { value: "deal_closed", label: "🏆 Negócio Marcado como Ganho ou Perdido" },
  { value: "tag_added", label: "🏷️ Etiqueta Adicionada à Conversa" }
];
const ACTION_OPTIONS = [
  { value: "send_message", label: "💬 Enviar Mensagem Automática ao Cliente" },
  { value: "assign_user", label: "👤 Atribuir Atendimento a um Usuário" },
  { value: "transfer_group", label: "📂 Transferir para Fila / Setor" },
  { value: "change_deal_stage", label: "🔄 Mover Negócio para outro Estágio" }
];
const getTriggerLabel = (type) => {
  var _a;
  return ((_a = TRIGGER_OPTIONS.find((o) => o.value === type)) == null ? void 0 : _a.label) || type;
};
const getActionLabel = (type) => {
  var _a;
  return ((_a = ACTION_OPTIONS.find((o) => o.value === type)) == null ? void 0 : _a.label) || type;
};
const InputClass = "w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent";
const SelectClass = InputClass;
const LabelClass = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1";
function AutomationsSettings() {
  const [automations, setAutomations] = reactExports.useState([]);
  const [users, setUsers] = reactExports.useState([]);
  const [groups, setGroups] = reactExports.useState([]);
  const [stages, setStages] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [editingId, setEditingId] = reactExports.useState(null);
  const emptyForm = { name: "", trigger_type: "", trigger_conditions: {}, action_type: "", action_payload: {} };
  const [form, setForm] = reactExports.useState(emptyForm);
  reactExports.useEffect(() => {
    fetchAll();
  }, []);
  const fetchAll = async () => {
    try {
      const { data } = await axios.get("/api/automations");
      setAutomations(data.automations ?? data);
      setUsers(data.users ?? []);
      setGroups(data.groups ?? []);
      setStages(data.stages ?? []);
    } catch (e) {
      console.error("Erro ao buscar automações:", e);
    }
  };
  const handleToggle = async (id) => {
    try {
      const { data } = await axios.post(`/api/automations/${id}/toggle`);
      setAutomations((prev) => prev.map((a) => a.id === id ? data : a));
    } catch {
      alert("Falha ao alternar status.");
    }
  };
  const handleDelete = async (id) => {
    if (!confirm("Deseja realmente apagar esta regra de automação?")) return;
    try {
      await axios.delete(`/api/automations/${id}`);
      fetchAll();
    } catch {
      alert("Falha ao excluir.");
    }
  };
  const openEdit = (automation) => {
    setEditingId(automation.id);
    setForm({
      name: automation.name,
      trigger_type: automation.trigger_type,
      trigger_conditions: typeof automation.trigger_conditions === "string" ? JSON.parse(automation.trigger_conditions) : automation.trigger_conditions || {},
      action_type: automation.action_type,
      action_payload: typeof automation.action_payload === "string" ? JSON.parse(automation.action_payload) : automation.action_payload || {}
    });
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
    if (!form.trigger_type || !form.action_type) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }
    setLoading(true);
    try {
      const payload = {
        ...form,
        trigger_conditions: Object.keys(form.trigger_conditions).length > 0 ? form.trigger_conditions : null,
        action_payload: Object.keys(form.action_payload).length > 0 ? form.action_payload : null,
        priority: 0,
        is_active: true
      };
      if (editingId) {
        await axios.put(`/api/automations/${editingId}`, payload);
      } else {
        await axios.post("/api/automations", payload);
      }
      closeModal();
      fetchAll();
    } catch (e2) {
      alert("Falha ao salvar: " + (((_b = (_a = e2.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || e2.message));
    } finally {
      setLoading(false);
    }
  };
  const setTrigger = (val) => setForm((f) => ({ ...f, trigger_type: val, trigger_conditions: {} }));
  const setAction = (val) => setForm((f) => ({ ...f, action_type: val, action_payload: {} }));
  const setTC = (key, val) => setForm((f) => ({ ...f, trigger_conditions: { ...f.trigger_conditions, [key]: val } }));
  const setAP = (key, val) => setForm((f) => ({ ...f, action_payload: { ...f.action_payload, [key]: val } }));
  const resolveLabel = (type, payload = {}) => {
    if (!payload || Object.keys(payload).length === 0) return "";
    if (type === "assign_user") {
      const u = users.find((u2) => u2.id == payload.user_id);
      return u ? `→ ${u.name}` : `ID ${payload.user_id}`;
    }
    if (type === "transfer_group") {
      const g = groups.find((g2) => g2.id == payload.group_id);
      return g ? `→ ${g.name}` : `ID ${payload.group_id}`;
    }
    if (type === "change_deal_stage") {
      const s = stages.find((s2) => s2.id == payload.stage_id);
      return s ? `→ ${s.name}` : `ID ${payload.stage_id}`;
    }
    if (type === "send_message") return `"${(payload.message || "").substring(0, 50)}${(payload.message || "").length > 50 ? "…" : ""}"`;
    return "";
  };
  const resolveTriggerLabel = (type, cond = {}) => {
    if (!cond || Object.keys(cond).length === 0) return "";
    if (type === "stage_changed") {
      const s = stages.find((s2) => s2.id == cond.stage_id);
      return s ? `→ ${s.name}` : "";
    }
    if (type === "new_message") return cond.content ? `"${cond.content}"` : "";
    if (type === "deal_closed") return cond.outcome ? `Resultado: ${cond.outcome === "won" ? "Ganho" : "Perdido"}` : "";
    return "";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full bg-gray-50 dark:bg-gray-900/50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex justify-between items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-bold text-gray-900 dark:text-white flex items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "mr-3 w-6 h-6 text-yellow-500" }),
          " Automações IF-THIS-THEN-THAT"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400 mt-1", children: "Crie lógicas de auto-atendimento baseadas em eventos do CRM e do chat." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setIsModalOpen(true), className: "flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-2" }),
        " Criar Automação"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-8", children: automations.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20 bg-white dark:bg-gray-800 rounded-xl border border-dashed border-gray-300 dark:border-gray-700", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { className: "w-12 h-12 mx-auto text-gray-300 mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-900 dark:text-white mb-2", children: "Sem Regras Ativas" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 max-w-sm mx-auto text-sm", children: "O CRM ainda não está automatizando nenhuma tarefa. Crie a primeira regra!" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: automations.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `bg-white dark:bg-gray-800 rounded-xl border p-5 flex items-center justify-between shadow-sm transition-all ${a.is_active ? "border-indigo-200 dark:border-indigo-900" : "border-gray-200 dark:border-gray-700 opacity-60"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-1 p-2 rounded-lg flex-shrink-0 ${a.is_active ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400" : "bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-gray-900 dark:text-white", children: a.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center flex-wrap gap-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-gray-500 text-xs uppercase tracking-wide", children: "SE:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gray-100 dark:bg-gray-700 px-2.5 py-1 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300", children: getTriggerLabel(a.trigger_type) }),
            resolveTriggerLabel(a.trigger_type, a.trigger_conditions) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400 italic", children: resolveTriggerLabel(a.trigger_type, a.trigger_conditions) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3 text-gray-300" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-gray-500 text-xs uppercase tracking-wide", children: "ENTÃO:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-2.5 py-1 rounded-lg border border-indigo-100 dark:border-indigo-800 text-xs font-medium", children: getActionLabel(a.action_type) }),
            resolveLabel(a.action_type, a.action_payload) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400 italic", children: resolveLabel(a.action_type, a.action_payload) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 ml-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => openEdit(a), className: "p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg transition-colors", title: "Editar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { className: "w-4 h-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleToggle(a.id), className: `p-2 rounded-lg transition-colors ${a.is_active ? "text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/30" : "text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"}`, title: a.is_active ? "Desativar" : "Ativar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Power, { className: "w-4 h-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-5 bg-gray-200 dark:bg-gray-700" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleDelete(a.id), className: "p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors", title: "Excluir", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }) })
      ] })
    ] }, a.id)) }) }),
    isModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-2xl w-full max-w-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col max-h-[92vh]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-900/50 rounded-t-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-bold text-gray-900 dark:text-white flex items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 mr-2 text-yellow-500" }),
          editingId ? "Editar Regra de Automação" : "Criar Nova Regra"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: closeModal, className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-2xl leading-none", children: "×" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "p-6 overflow-y-auto flex-1 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: LabelClass, children: "Nome da Automação" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              required: true,
              placeholder: "Ex: Boas-vindas para novos leads",
              className: InputClass,
              value: form.name,
              onChange: (e) => setForm((f) => ({ ...f, name: e.target.value }))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-950/30 rounded-xl p-4 space-y-4 border border-blue-100 dark:border-blue-900", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400", children: "1. Gatilho — Quando isso acontecer..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: LabelClass, children: "Evento Disparador" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, className: SelectClass, value: form.trigger_type, onChange: (e) => setTrigger(e.target.value), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Selecione o Gatilho" }),
              TRIGGER_OPTIONS.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: o.value, children: o.label }, o.value))
            ] })
          ] }),
          form.trigger_type === "stage_changed" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: LabelClass, children: "E o Estágio de Destino for..." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: SelectClass, value: form.trigger_conditions.stage_id || "", onChange: (e) => setTC("stage_id", e.target.value), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Qualquer estágio" }),
              stages.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s.id, children: s.name }, s.id))
            ] })
          ] }),
          form.trigger_type === "new_message" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: LabelClass, children: "E o texto da mensagem for exatamente:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "Ex: 1",
                className: InputClass,
                value: form.trigger_conditions.content || "",
                onChange: (e) => setTC("content", e.target.value)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Só acionará se o cliente digitar exatamente este texto." })
          ] }),
          form.trigger_type === "deal_closed" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: LabelClass, children: "Com o resultado..." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: SelectClass, value: form.trigger_conditions.outcome || "", onChange: (e) => setTC("outcome", e.target.value), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Qualquer (Ganho ou Perdido)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "won", children: "🏆 Apenas Ganhos" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "lost", children: "❌ Apenas Perdidos" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 dark:bg-green-950/30 rounded-xl p-4 space-y-4 border border-green-100 dark:border-green-900", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold uppercase tracking-wider text-green-600 dark:text-green-400", children: "2. Ação — Então o sistema deve..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: LabelClass, children: "Ação a Executar" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, className: SelectClass, value: form.action_type, onChange: (e) => setAction(e.target.value), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Selecione a Ação" }),
              ACTION_OPTIONS.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: o.value, children: o.label }, o.value))
            ] })
          ] }),
          form.action_type === "send_message" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: LabelClass, children: "Texto da Mensagem" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                required: true,
                rows: "4",
                placeholder: "Ex: Olá! Bem-vindo. Em que posso ajudar?",
                className: InputClass,
                value: form.action_payload.message || "",
                onChange: (e) => setAP("message", e.target.value)
              }
            )
          ] }),
          form.action_type === "assign_user" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: LabelClass, children: "Atribuir ao Usuário" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, className: SelectClass, value: form.action_payload.user_id || "", onChange: (e) => setAP("user_id", e.target.value), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Selecione um usuário" }),
              users.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: u.id, children: u.name }, u.id))
            ] })
          ] }),
          form.action_type === "transfer_group" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: LabelClass, children: "Transferir para a Fila" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, className: SelectClass, value: form.action_payload.group_id || "", onChange: (e) => setAP("group_id", e.target.value), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Selecione um setor" }),
              groups.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: g.id, children: g.name }, g.id))
            ] })
          ] }),
          form.action_type === "change_deal_stage" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: LabelClass, children: "Mover para o Estágio" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, className: SelectClass, value: form.action_payload.stage_id || "", onChange: (e) => setAP("stage_id", e.target.value), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Selecione um estágio" }),
              stages.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s.id, children: s.name }, s.id))
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-t border-gray-100 dark:border-gray-700 flex justify-end gap-3 bg-white dark:bg-gray-800 rounded-b-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: closeModal, className: "px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm font-medium", children: "Cancelar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleSubmit, disabled: loading, className: "px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-sm font-medium text-sm disabled:opacity-50 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4" }),
          loading ? "Salvando..." : "Salvar Automação"
        ] })
      ] })
    ] }) })
  ] });
}
export {
  AutomationsSettings as default
};
