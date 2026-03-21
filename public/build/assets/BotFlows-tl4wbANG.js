import { r as reactExports, a as axios, j as jsxRuntimeExports } from "./app-BHvocwkH.js";
import { M as MessageSquare } from "./message-square-D9nsWpoQ.js";
import { c as createLucideIcon } from "./createLucideIcon-ClSosjIo.js";
import { S as ShieldAlert } from "./shield-alert-B3yJMyqi.js";
import { L as LoaderCircle } from "./loader-circle-DfHQSA1C.js";
import { S as Save } from "./save-DcecdVbZ.js";
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
];
const ArrowDown = createLucideIcon("arrow-down", __iconNode$1);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
];
const Bot = createLucideIcon("bot", __iconNode);
function BotFlows() {
  const [automations, setAutomations] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const [groups, setGroups] = reactExports.useState([]);
  const [stages, setStages] = reactExports.useState([]);
  reactExports.useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/api/automations");
      setAutomations(data.automations || []);
      setGroups(data.groups || []);
      setStages(data.stages || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  automations.find((a) => a.trigger_type === "new_message" && (a.name || "").includes("Cérebro"));
  const handoverAutomation = automations.find((a) => a.action_type === "transfer_group" && (a.name || "").includes("Transbordo"));
  const [handoverData, setHandoverData] = reactExports.useState({
    group_id: "",
    message: "Um momento, vou chamar um especialista..."
  });
  reactExports.useEffect(() => {
    if (handoverAutomation) {
      const payload = typeof handoverAutomation.action_payload === "string" ? JSON.parse(handoverAutomation.action_payload) : handoverAutomation.action_payload || {};
      setHandoverData({
        group_id: payload.group_id || "",
        message: payload.message || "Um momento, vou chamar um especialista..."
      });
    }
  }, [handoverAutomation]);
  const saveHandover = async () => {
    setLoading(true);
    try {
      const payload = {
        name: "Transbordo Automático (Bot)",
        trigger_type: "new_message",
        trigger_conditions: { content: "atendimento" },
        // Gatilho padrão
        action_type: "transfer_group",
        action_payload: handoverData,
        is_active: true,
        priority: 10
      };
      if (handoverAutomation) {
        await axios.put(`/api/automations/${handoverAutomation.id}`, payload);
      } else {
        await axios.post("/api/automations", payload);
      }
      alert("Jornada do Bot salva com sucesso!");
      fetchData();
    } catch (error) {
      alert("Erro ao salvar fluxo.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col h-full bg-gray-50 dark:bg-gray-950 p-8 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto w-full space-y-8 pb-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-extrabold text-gray-900 dark:text-white", children: "Jornada do Atendimento" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-gray-500 dark:text-gray-400", children: "Configure o caminho que o seu cliente percorre ao entrar em contato." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border-2 border-indigo-100 dark:border-indigo-900/50 flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-6 h-6 text-indigo-600 dark:text-indigo-400" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-900 dark:text-white text-lg", children: "Gatilho de Entrada" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "Toda nova mensagem recebida via WhatsApp, Instagram ou Messenger." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-1 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-xs font-bold rounded-full uppercase", children: "Ativo" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "w-8 h-8 text-gray-300 my-4" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border-2 border-emerald-100 dark:border-emerald-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-emerald-100 dark:bg-emerald-900/40 rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-6 h-6 text-emerald-600 dark:text-emerald-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-900 dark:text-white text-lg", children: "Inteligência Artificial (Bot)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "O robô analisa a mensagem e consulta sua base de conhecimento." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-full uppercase", children: "Automático" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-400", children: "Treinamento Atual:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-emerald-600 dark:text-emerald-400", children: "Ativado" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "w-8 h-8 text-gray-300 my-4" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border-2 border-orange-100 dark:border-orange-900/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-orange-100 dark:bg-orange-900/40 rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-6 h-6 text-orange-600 dark:text-orange-400" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-900 dark:text-white text-lg", children: "Regra de Transbordo (Humano)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "Acionada quando o robô identifica uma solicitação de atendimento humano." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 bg-orange-50/50 dark:bg-orange-900/10 rounded-xl border border-orange-100 dark:border-orange-900/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-gray-700 dark:text-gray-300", children: "Setor de Destino" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "Para onde enviar o cliente." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              className: "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 rounded-lg text-sm",
              value: handoverData.group_id,
              onChange: (e) => setHandoverData({ ...handoverData, group_id: e.target.value }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Selecione um Setor" }),
                groups.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: g.id, children: g.name }, g.id))
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col p-4 bg-orange-50/50 dark:bg-orange-900/10 rounded-xl border border-orange-100 dark:border-orange-900/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-gray-700 dark:text-gray-300 mb-2", children: "Mensagem de Transbordo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              className: "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 rounded-lg text-sm w-full",
              placeholder: "Ex: Um momento, vou chamar um especialista...",
              value: handoverData.message,
              onChange: (e) => setHandoverData({ ...handoverData, message: e.target.value })
            }
          )
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center pt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: saveHandover,
        disabled: loading,
        className: "flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold shadow-lg shadow-indigo-200 dark:shadow-none transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50",
        children: [
          loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-5 h-5 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-5 h-5" }),
          "Salvar Jornada do Bot"
        ]
      }
    ) })
  ] }) });
}
const BotFlows$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: BotFlows
}, Symbol.toStringTag, { value: "Module" }));
export {
  BotFlows as B,
  Bot as a,
  BotFlows$1 as b
};
