import { c as usePage, r as reactExports, a as axios, j as jsxRuntimeExports, H as Head_default } from "./app-Bog6UFGg.js";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-D5ArjXwT.js";
import AutomationsSettings from "./Automations-hrjcEZ7R.js";
import ProfileTab from "./Profile-BFTypNVt.js";
import { C as CustomFieldsTab, T as TextCursorInput } from "./CustomFields-ChZRTmC5.js";
import { Q as QuickRepliesTab, M as MessageSquareQuote } from "./QuickReplies-CxnsPttC.js";
import { O as OrganizationTab, S as Shield } from "./Organization-CW7jFjYW.js";
import GeneralTab from "./General-DdlXS_MC.js";
import { U as User } from "./user-CAdaE3pj.js";
import { S as Settings } from "./settings-6QJv9DpG.js";
import { S as Share2 } from "./share-2-B6oEE7X6.js";
import { Z as Zap } from "./zap-CvyrfOw6.js";
import { c as createLucideIcon } from "./createLucideIcon-BtfvjG5O.js";
import { P as Plus } from "./plus-B7b3pnHM.js";
import "./transition-Cf76lwyn.js";
import "./search-C019foUc.js";
import "./mail-DVpZ3ipl.js";
import "./users-BQdyuWS6.js";
import "./calendar-Q2nOf-8T.js";
import "./chevron-right-BTtjm_y1.js";
import "./activity-CflkkQMZ.js";
import "./trash-2-CVmGGD9b.js";
import "./save-CVvnHa_F.js";
import "./circle-check-big-BMaGOYIW.js";
import "./list-DSVlUSjI.js";
import "./pen-line-Bc23wE8O.js";
import "./x-DTcNAY8X.js";
import "./globe-BAgVrHS5.js";
import "./square-pen-BTLf6mY8.js";
import "./check-GVHJGIyL.js";
import "./building-2-BkOqMn-n.js";
import "./upload-A10f5Dw0.js";
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
];
const Bot = createLucideIcon("bot", __iconNode$2);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja"
    }
  ],
  ["path", { d: "M9 13a4.5 4.5 0 0 0 3-4", key: "10igwf" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M12 13h4", key: "1ku699" }],
  ["path", { d: "M12 18h6a2 2 0 0 1 2 2v1", key: "105ag5" }],
  ["path", { d: "M12 8h8", key: "1lhi5i" }],
  ["path", { d: "M16 8V5a2 2 0 0 1 2-2", key: "u6izg6" }],
  ["circle", { cx: "16", cy: "13", r: ".5", key: "ry7gng" }],
  ["circle", { cx: "18", cy: "3", r: ".5", key: "1aiba7" }],
  ["circle", { cx: "20", cy: "21", r: ".5", key: "yhc1fs" }],
  ["circle", { cx: "20", cy: "8", r: ".5", key: "1e43v0" }]
];
const BrainCircuit = createLucideIcon("brain-circuit", __iconNode$1);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
];
const Smartphone = createLucideIcon("smartphone", __iconNode);
function SettingsIndex({ orgUsers = [], orgGroups = [], orgRoles = [] }) {
  const { auth, flash } = usePage().props;
  const { user } = auth;
  const [activeTab, setActiveTab] = reactExports.useState("canais");
  const settingsMenu = [
    { label: "Perfil Mestre", icon: User, active: activeTab === "perfil", id: "perfil" },
    { label: "Geral", icon: Settings, active: activeTab === "geral", id: "geral" },
    { label: "Organização (Acessos)", icon: Shield, active: activeTab === "org", id: "org" },
    { label: "Canais", icon: Share2, active: activeTab === "canais", id: "canais" },
    { label: "Campos Customizados", icon: TextCursorInput, active: activeTab === "campos", id: "campos" },
    { label: "Frases Rápidas", icon: MessageSquareQuote, active: activeTab === "frases", id: "frases" },
    { label: "Automações", icon: Zap, active: activeTab === "automacoes", id: "automacoes" },
    { label: "Bot / Fluxos", icon: Bot, active: activeTab === "bots", id: "bots" }
  ];
  const [channels, setChannels] = reactExports.useState([]);
  const [isAddRouteOpen, setIsAddRouteOpen] = reactExports.useState(false);
  const [editingChannelId, setEditingChannelId] = reactExports.useState(null);
  const [newChannelForm, setNewChannelForm] = reactExports.useState({
    name: "",
    api_url: "https://api.elitesuporte.com.br",
    api_key: "",
    instance_name: ""
  });
  const [qrCodeData, setQrCodeData] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [isAiSettingsOpen, setIsAiSettingsOpen] = reactExports.useState(null);
  const [aiForm, setAiForm] = reactExports.useState({ ai_enabled: false, ai_prompt: "" });
  const [aiSaving, setAiSaving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (activeTab === "canais") {
      fetchChannels();
    }
  }, [activeTab]);
  const fetchChannels = async () => {
    try {
      const { data } = await axios.get("/api/channels");
      setChannels(data);
    } catch (error) {
      console.error(error);
    }
  };
  const openEditChannel = (channel) => {
    var _a, _b;
    setEditingChannelId(channel.id);
    setNewChannelForm({
      name: channel.name,
      api_url: ((_a = channel.credentials) == null ? void 0 : _a.evolution_url) || "https://api.elitesuporte.com.br",
      api_key: ((_b = channel.credentials) == null ? void 0 : _b.api_key) || "",
      instance_name: channel.identifier || ""
    });
    setIsAddRouteOpen(true);
  };
  const closeChannelModal = () => {
    setIsAddRouteOpen(false);
    setEditingChannelId(null);
    setNewChannelForm({ name: "", api_url: "https://api.elitesuporte.com.br", api_key: "", instance_name: "" });
  };
  const handleCreateChannel = async (e) => {
    var _a, _b;
    e.preventDefault();
    setLoading(true);
    try {
      if (editingChannelId) {
        const { data } = await axios.put(`/api/channels/${editingChannelId}`, newChannelForm);
        setChannels(channels.map((c) => c.id === editingChannelId ? data.channel : c));
        alert("Canal de Atendimento atualizado com sucesso!");
        closeChannelModal();
      } else {
        const { data } = await axios.post("/api/channels", newChannelForm);
        setChannels([data.channel, ...channels]);
        closeChannelModal();
        if (data.channel.status === "connected") {
          alert(`Canal conectado com sucesso! O Webhook que você precisa caso deseje apontar manualmente é:

${data.webhook_url}`);
        } else {
          showQrCode(data.channel);
        }
      }
    } catch (error) {
      alert("Erro ao configurar canal com servidor Evolution: " + (((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.error) || error.message));
    } finally {
      setLoading(false);
    }
  };
  const showQrCode = async (channel) => {
    var _a, _b;
    setQrCodeData({ channel, loading: true });
    try {
      const { data } = await axios.get(`/api/channels/${channel.id}/qrcode`);
      if (((_a = data == null ? void 0 : data.instance) == null ? void 0 : _a.state) === "open") {
        alert("Este canal já está devidamente conectado!");
        setQrCodeData(null);
        fetchChannels();
      } else if ((_b = data == null ? void 0 : data.qrcode) == null ? void 0 : _b.base64) {
        setQrCodeData({ channel, base64: data.qrcode.base64, loading: false });
      } else {
        setTimeout(() => showQrCode(channel), 3e3);
      }
    } catch (error) {
      setQrCodeData(null);
      alert("Falha ao conectar na Evolution API para pegar o QRCode.");
    }
  };
  const handleDeleteChannel = async (channel) => {
    if (!confirm("Tem certeza? Isso irá desconectar o seu número e deletar a instância.")) return;
    try {
      await axios.delete(`/api/channels/${channel.id}`);
      fetchChannels();
    } catch (error) {
      console.error(error);
    }
  };
  const openAiSettings = (channel) => {
    setIsAiSettingsOpen(channel);
    setAiForm({
      ai_enabled: channel.ai_enabled || false,
      ai_prompt: channel.ai_prompt || "Você é um consultor premium de vendas online. Trate o cliente com gentileza e seja persuasivo."
    });
  };
  const handleSaveAiSettings = async (e) => {
    e.preventDefault();
    setAiSaving(true);
    try {
      await axios.put(`/api/channels/${isAiSettingsOpen.id}/ai`, aiForm);
      alert("Inteligência Artificial configurada e ativa neste canal!");
      setIsAiSettingsOpen(null);
      fetchChannels();
    } catch (error) {
      alert("Falha ao salvar as instruções: " + error.message);
    } finally {
      setAiSaving(false);
    }
  };
  const renderCanais = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full bg-gray-50 dark:bg-gray-900/50 relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex justify-between items-center z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: "Canais de Atendimento" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400 mt-1", children: "Conecte os canais Omnichannel por onde sua equipe receberá mensagens." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex space-x-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setIsAddRouteOpen(true),
          className: "flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-2" }),
            "Conectar Canal"
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-8", children: channels.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-20 text-gray-500 dark:text-gray-400", children: 'Nenhum canal conectado ainda. Clique em "Conectar Canal" acima.' }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: channels.map((channel) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-3 rounded-lg bg-green-100 dark:bg-green-900/40`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: `w-6 h-6 text-green-500` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-1 text-xs font-bold uppercase rounded ${channel.status === "connected" ? "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400" : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-400"}`, children: channel.status })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-900 dark:text-white mb-1", children: channel.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400 mb-2 truncate", title: channel.identifier, children: channel.identifier }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-end space-x-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => {
                const webhook = `${window.location.origin}/api/webhooks/evolution`;
                navigator.clipboard.writeText(webhook);
                alert(`Endereço do Webhook copiado:
${webhook}

Se preferir, cole este link na sua Evolution para receber as mensagens.`);
              },
              className: "px-3 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded transition-colors",
              children: "Copiar Webhook"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => openEditChannel(channel), className: "px-3 py-1.5 text-sm font-medium text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/30 rounded transition-colors flex items-center", title: "Editar Credenciais", children: "Editar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => openAiSettings(channel), className: "px-3 py-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded transition-colors flex items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BrainCircuit, { className: "w-4 h-4 mr-1" }),
            " Bot IA"
          ] }),
          channel.status !== "connected" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => showQrCode(channel), className: "px-3 py-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded transition-colors", children: "Ler QR Code" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleDeleteChannel(channel), className: "px-3 py-1.5 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded transition-colors", children: "Remover" })
        ] })
      ] }, channel.id);
    }) }) }),
    isAddRouteOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl w-full max-w-md shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-bold text-gray-900 dark:text-white flex items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-5 h-5 mr-2 text-indigo-500" }),
          editingChannelId ? "Editar Canal" : "Conectar Novo Canal"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: closeChannelModal, className: "text-gray-400 hover:text-gray-600", children: "×" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleCreateChannel, className: "p-6 overflow-y-auto max-h-[70vh]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Nome de Exibição do Setor" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                required: true,
                placeholder: "Ex: Financeiro",
                className: "w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block px-4 py-2.5",
                value: newChannelForm.name,
                onChange: (e) => setNewChannelForm({ ...newChannelForm, name: e.target.value })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "URL Base da Evolution API" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "url",
                required: true,
                placeholder: "https://api.suaevolution.com",
                className: "w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block px-4 py-2.5",
                value: newChannelForm.api_url,
                onChange: (e) => setNewChannelForm({ ...newChannelForm, api_url: e.target.value })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Global API Key (Token)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                required: true,
                placeholder: "Cole a Global API Key aqui",
                className: "w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block px-4 py-2.5",
                value: newChannelForm.api_key,
                onChange: (e) => setNewChannelForm({ ...newChannelForm, api_key: e.target.value })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Nome da Instância (Identifier)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                required: true,
                placeholder: "Ex: vendedora_suely_01",
                disabled: !!editingChannelId,
                className: "w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white disabled:opacity-50 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block px-4 py-2.5",
                value: newChannelForm.instance_name,
                onChange: (e) => setNewChannelForm({ ...newChannelForm, instance_name: e.target.value })
              }
            ),
            !editingChannelId && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-2", children: "Iremos abrir ou configurar os webhooks na instância escolhida automaticamente." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end pt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: closeChannelModal, className: "mr-3 px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm font-medium", children: "Cancelar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: loading, className: "px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-sm font-medium text-sm flex items-center", children: loading ? "Aguarde..." : editingChannelId ? "Salvar Configuração" : "Conectar Via QR Code" })
        ] })
      ] })
    ] }) }),
    qrCodeData && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl w-full max-w-sm shadow-2xl overflow-hidden flex flex-col items-center p-8 text-center border border-gray-200 dark:border-gray-700", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 dark:text-white mb-2", children: "Conectar WhatsApp" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 dark:text-gray-400 mb-6", children: [
        "Escaneie o QR Code abaixo com o seu WhatsApp para vincular a caixa: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: qrCodeData.channel.name })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-100 dark:bg-white p-4 rounded-xl shadow-inner mb-6 flex items-center justify-center size-64", children: qrCodeData.loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-500 animate-pulse text-sm", children: "Carregando instância na Evolution..." }) : qrCodeData.base64 ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: qrCodeData.base64, alt: "Evolution API QR Code", className: "w-full h-full object-contain" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-500 text-sm", children: "Nenhum QR base64 retornado." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        setQrCodeData(null);
        fetchChannels();
      }, className: "w-full px-4 py-2 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white rounded-lg shadow-sm font-medium transition-colors", children: "Concluído / Fechar" })
    ] }) }),
    isAiSettingsOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl w-full max-w-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-900/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-bold text-gray-900 dark:text-white flex items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BrainCircuit, { className: "w-5 h-5 mr-2 text-emerald-500" }),
          "Inteligência Artificial: ",
          isAiSettingsOpen.name
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsAiSettingsOpen(null), className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300", children: "×" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSaveAiSettings, className: "p-6 flex-1 overflow-y-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-900 dark:text-white text-sm", children: "Habilitar Robô Vendedor" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400 mt-1", children: "A IA só começará a conversar sozinha se não houver um corretor humano atribuído àquele cliente." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "sr-only peer", checked: aiForm.ai_enabled, onChange: (e) => setAiForm({ ...aiForm, ai_enabled: e.target.checked }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-500" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: aiForm.ai_enabled ? "opacity-100 transition-opacity" : "opacity-50 pointer-events-none transition-opacity", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-semibold text-gray-900 dark:text-white mb-2", children: "Comando Mestre de Personalidade (Prompt)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400 mb-3", children: 'Defina o comportamento do bot, regras de simulação de consórcio, tom de voz, e restrições (ex: "Nunca crie preços").' }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                className: "w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block px-4 py-3 h-64 text-sm",
                placeholder: "Você atua no setor x... Seja amigável...",
                value: aiForm.ai_prompt,
                onChange: (e) => setAiForm({ ...aiForm, ai_prompt: e.target.value }),
                required: aiForm.ai_enabled
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end pt-6 border-t border-gray-100 dark:border-gray-700 mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setIsAiSettingsOpen(null), className: "mr-3 px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm font-medium", children: "Cancelar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: aiSaving, className: "px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg shadow-sm font-medium text-sm flex items-center", children: [
            aiSaving ? "Injetando Instruções..." : "Salvar Personalidade",
            /* @__PURE__ */ jsxRuntimeExports.jsx(BrainCircuit, { className: "w-4 h-4 ml-2" })
          ] })
        ] })
      ] })
    ] }) })
  ] });
  const renderBotBuilderMockup = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full bg-gray-100 dark:bg-gray-950", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex justify-between items-center z-10 shadow-sm relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: "Editor de Fluxo (Bot)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400 mt-1", children: "Node-based builder (React Flow Canvas Mockup)." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium transition-colors shadow-sm", children: "Salvar e Publicar" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 relative overflow-hidden flex items-center justify-center p-8 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-20 left-40 bg-white dark:bg-gray-800 border-l-4 border-indigo-500 p-4 rounded shadow-lg w-64 z-10 border dark:border-gray-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm mb-2 text-gray-800 dark:text-gray-200", children: "Gatilho: Início" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Qualquer mensagem nova." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-48 left-96 bg-white dark:bg-gray-800 border-l-4 border-green-500 p-4 rounded shadow-lg w-64 z-10 border dark:border-gray-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm mb-2 text-gray-800 dark:text-gray-200", children: "Enviar Mensagem" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: '"Olá! Escolha uma opção..."' })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "absolute inset-0 pointer-events-none w-full h-full z-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 400 120 C 450 120, 420 230, 480 230", fill: "none", stroke: "#6366F1", strokeWidth: "2", strokeDasharray: "5,5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-8 top-8 bottom-8 w-64 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col z-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-800 dark:text-white text-sm", children: "Paleta de Nós" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-3 flex-1 overflow-y-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded cursor-grab flex items-center text-sm font-medium text-gray-700 dark:text-gray-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquareQuote, { className: "w-4 h-4 mr-2 text-blue-500" }),
            " Mensagem"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded cursor-grab flex items-center text-sm font-medium text-gray-700 dark:text-gray-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-4 h-4 mr-2 text-purple-500" }),
            " Ramificação"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded cursor-grab flex items-center text-sm font-medium text-gray-700 dark:text-gray-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 mr-2 text-yellow-500" }),
            " Requisição HTTP"
          ] })
        ] })
      ] })
    ] })
  ] });
  const renderPlaceholder = (title, desc) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-full text-center p-8 bg-gray-50 dark:bg-gray-950", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 dark:text-gray-400 max-w-md mx-auto", children: desc })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    AuthenticatedLayout,
    {
      activeModule: "settings",
      sidebarMenuItems: settingsMenu.map((item) => ({
        ...item,
        onClick: item.onClick ? item.onClick : () => setActiveTab(item.id)
      })),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Head_default, { title: `Configurações - ${activeTab}` }),
        activeTab === "canais" && renderCanais(),
        activeTab === "bots" && renderBotBuilderMockup(),
        activeTab === "perfil" && /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileTab, { user }),
        activeTab === "geral" && /* @__PURE__ */ jsxRuntimeExports.jsx(GeneralTab, {}),
        activeTab === "org" && /* @__PURE__ */ jsxRuntimeExports.jsx(OrganizationTab, { users: orgUsers, groups: orgGroups, roles: orgRoles, flash }),
        activeTab === "membros" && renderPlaceholder("Gerenciamento de Equipe", "Tabela de agentes e botão Cadastrar Operador."),
        activeTab === "permissoes" && renderPlaceholder("Permissões RBAC", "Toggles lógicos sobre restrições de Caixa de Entrada e Negócios."),
        activeTab === "grupos" && renderPlaceholder("Grupos de Departamentos", "Vendas / Suporte / Onboarding para roteamento."),
        activeTab === "campos" && /* @__PURE__ */ jsxRuntimeExports.jsx(CustomFieldsTab, {}),
        activeTab === "frases" && /* @__PURE__ */ jsxRuntimeExports.jsx(QuickRepliesTab, {}),
        activeTab === "automacoes" && /* @__PURE__ */ jsxRuntimeExports.jsx(AutomationsSettings, {})
      ]
    }
  );
}
export {
  SettingsIndex as default
};
