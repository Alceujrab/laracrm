import { u as useForm, j as jsxRuntimeExports, a as axios, c as usePage, r as reactExports, H as Head_default } from "./app-DITW5dun.js";
import { A as AuthenticatedLayout, a as AtSign, C as Car, b as ChevronDown } from "./AuthenticatedLayout-B6DnBtze.js";
import { M as MessageSquare, C as CreateDealModal } from "./CreateDealModal-bQdVVrrN.js";
import { Z as Zap } from "./zap-ChWtpMBd.js";
import { X } from "./x-yBa_plo7.js";
import { U as User } from "./user-B9LZsL8o.js";
import { I as Inbox, B as Briefcase } from "./inbox-C8pLJ0St.js";
import { S as SquarePen } from "./square-pen-11Sg-IkL.js";
import { E as EllipsisVertical } from "./ellipsis-vertical-CVmWcgJh.js";
import { S as Search } from "./search-D-mc58C7.js";
import { C as Check } from "./check-DWVOlzvz.js";
import { c as createLucideIcon } from "./createLucideIcon-C6NVuwOJ.js";
import { L as List } from "./list-DwDqrTiS.js";
import "./transition-SoJuNQK0.js";
import "./mail-aCxgJQ6o.js";
import "./users-Kv6Gcbr3.js";
import "./settings-CvJvE2as.js";
import "./calendar-IU5HW2RZ.js";
import "./chevron-right-BPfAUUu8.js";
import "./type-BNCScW-u.js";
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
const ChevronUp = createLucideIcon("chevron-up", __iconNode$5);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["rect", { x: "9", y: "9", width: "6", height: "6", rx: "1", key: "1ssd4o" }]
];
const CircleStop = createLucideIcon("circle-stop", __iconNode$4);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
const FileText = createLucideIcon("file-text", __iconNode$3);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = createLucideIcon("info", __iconNode$2);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
];
const Mic = createLucideIcon("mic", __iconNode$1);
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
      d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
      key: "1miecu"
    }
  ]
];
const Paperclip = createLucideIcon("paperclip", __iconNode);
function NewConversationModal({ isOpen, onClose, contacts = [], channels = [], onSuccess }) {
  const { data, setData, processing, errors, reset } = useForm({
    contact_id: "",
    channel_id: ""
  });
  if (!isOpen) return null;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/inbox/conversations", data);
      reset();
      onClose();
      if (onSuccess) onSuccess(response.data);
    } catch (error) {
      alert("Erro ao iniciar a conversa. Verifique se escolheu um contato e um canal ativo.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-900/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-bold text-gray-900 dark:text-white flex items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 mr-2 text-indigo-500" }),
        " Nova Conversa Ativa"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "text-gray-400 hover:text-gray-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "p-6 space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Escolha o Contato *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: data.contact_id,
              onChange: (e) => setData("contact_id", e.target.value),
              className: "w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white appearance-none",
              required: true,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Selecione da Agenda" }),
                contacts.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: c.id, children: [
                  c.name,
                  " (",
                  c.phone,
                  ")"
                ] }, c.id))
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Caminho de Disparo (Canal) *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: data.channel_id,
            onChange: (e) => setData("channel_id", e.target.value),
            className: "w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white appearance-none",
            required: true,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Selecione um Botão de Saída" }),
              channels.map((ch) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: ch.id, children: [
                ch.identifier,
                " (",
                ch.type,
                ")"
              ] }, ch.id))
            ]
          }
        )
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
            disabled: processing || !data.contact_id || !data.channel_id,
            className: "flex-1 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl font-medium transition-all shadow-sm shadow-indigo-200",
            children: processing ? "Iniciando..." : "Iniciar Conversa"
          }
        )
      ] })
    ] })
  ] }) });
}
const EMOJI_LIST = [
  "😀",
  "😊",
  "😁",
  "😍",
  "🥰",
  "😎",
  "🤩",
  "👍",
  "👏",
  "🙏",
  "❤️",
  "🔥",
  "✅",
  "⭐",
  "🎉",
  "💬",
  "😢",
  "😅",
  "🤔",
  "😮",
  "😴",
  "🙄",
  "😤",
  "🤣",
  "😂",
  "🥳",
  "💪",
  "🤝",
  "👋",
  "✌️",
  "🙌",
  "💡",
  "📌",
  "📞",
  "📧",
  "📅",
  "🏠",
  "🏷️",
  "💰",
  "💲",
  "🚗",
  "🚀",
  "⚡",
  "🌟",
  "🎯",
  "📝",
  "💼",
  "🔔"
];
const Accordion = ({ title, icon: Icon, defaultOpen = false, children }) => {
  const [isOpen, setIsOpen] = reactExports.useState(defaultOpen);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-800 mb-4 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: "w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800/80 transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-sm font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider", children: [
            Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 mr-2 text-indigo-500" }),
            " ",
            title
          ] }),
          isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-gray-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-gray-400" })
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-t border-gray-100 dark:border-gray-800", children })
  ] });
};
function InboxIndex({ conversations: initialConversations = [], users = [], deals = [], contacts = [], stages = [], vehicles = [], channels = [] }) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const { auth } = usePage().props;
  const [conversations, setConversations] = reactExports.useState(initialConversations);
  const [isContactPanelOpen, setIsContactPanelOpen] = reactExports.useState(true);
  const [activeConvId, setActiveConvId] = reactExports.useState(conversations.length > 0 ? conversations[0].id : null);
  const [newMessage, setNewMessage] = reactExports.useState("");
  const [sending, setSending] = reactExports.useState(false);
  const [isInternalNote, setIsInternalNote] = reactExports.useState(false);
  const [filter, setFilter] = reactExports.useState("all");
  const [channelFilter, setChannelFilter] = reactExports.useState("all");
  const [statusFilter, setStatusFilter] = reactExports.useState("open");
  const [isCreateDealModalOpen, setIsCreateDealModalOpen] = reactExports.useState(false);
  const [newTag, setNewTag] = reactExports.useState("");
  const [isNewConvOpen, setIsNewConvOpen] = reactExports.useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = reactExports.useState(false);
  const [isMacroOpen, setIsMacroOpen] = reactExports.useState(false);
  const [isEmojiOpen, setIsEmojiOpen] = reactExports.useState(false);
  const [quickReplies, setQuickReplies] = reactExports.useState([]);
  const [qrSearch, setQrSearch] = reactExports.useState("");
  const [vehicleSearch, setVehicleSearch] = reactExports.useState("");
  const [isRecording, setIsRecording] = reactExports.useState(false);
  const [recordingTime, setRecordingTime] = reactExports.useState(0);
  const mediaRecorderRef = reactExports.useRef(null);
  const audioChunksRef = reactExports.useRef([]);
  const fileInputRef = reactExports.useRef(null);
  const [idleAlert, setIdleAlert] = reactExports.useState(null);
  reactExports.useEffect(() => {
    var _a2;
    if (!window.Echo) return;
    const channel = window.Echo.private("inbox");
    channel.listen("NewMessageReceived", (e) => {
      if (!isRecording) {
        axios.get("/api/inbox/refresh").then(({ data }) => setConversations(data));
      }
    });
    axios.get("/api/quick-replies").then(({ data }) => setQuickReplies(data)).catch(() => {
    });
    if ((_a2 = auth == null ? void 0 : auth.user) == null ? void 0 : _a2.id) {
      const myChannel = window.Echo.private(`App.Models.User.${auth.user.id}`);
      myChannel.listen("OperatorIdleWarningEvent", (e) => {
        try {
          const ctx = new (window.AudioContext || window.webkitAudioContext)();
          const os = ctx.createOscillator();
          const gain = ctx.createGain();
          os.connect(gain);
          gain.connect(ctx.destination);
          os.type = "triangle";
          os.frequency.setValueAtTime(600, ctx.currentTime);
          os.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.1);
          gain.gain.setValueAtTime(0.2, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
          os.start();
          os.stop(ctx.currentTime + 0.5);
        } catch (err) {
          console.log("Erro no audio", err);
        }
        setIdleAlert(e);
        setTimeout(() => setIdleAlert(null), 15e3);
      });
    }
    return () => {
      var _a3;
      window.Echo.leave("inbox");
      if ((_a3 = auth == null ? void 0 : auth.user) == null ? void 0 : _a3.id) window.Echo.leave(`App.Models.User.${auth.user.id}`);
    };
  }, [isRecording, auth]);
  reactExports.useEffect(() => {
    let interval;
    if (isRecording) {
      interval = setInterval(() => setRecordingTime((prev) => prev + 1), 1e3);
    } else {
      setRecordingTime(0);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRecording]);
  const sendVehicleMedia = async (v) => {
    if (!activeConvId || sending) return;
    setIsCatalogOpen(false);
    setSending(true);
    try {
      const kmFmt = v.km ? v.km.toLocaleString("pt-BR") : "--";
      const priceFmt = v.price ? parseFloat(v.price).toLocaleString("pt-BR", { minimumFractionDigits: 2 }) : "Sob Consulta";
      const textContent = `🚗 *${v.make} ${v.model}*
📅 Ano: ${v.year} | 🛣️ KM: ${kmFmt}
💰 Preço: R$ ${priceFmt}

Gostou desta oferta?`;
      const images = typeof v.images === "string" ? JSON.parse(v.images) : v.images || [];
      if (images.length === 0) {
        const fd = new FormData();
        fd.append("content", textContent);
        fd.append("type", "text");
        await axios.post(`/api/inbox/${activeConvId}/message`, fd);
      } else {
        await axios.post(`/api/inbox/${activeConvId}/vehicle-media`, {
          caption: textContent,
          images
        });
      }
      const { data } = await axios.get("/api/inbox/refresh");
      setConversations(data);
    } catch (err) {
      alert("Erro ao enviar mídias do veículo: " + err.message);
      console.error(err);
    } finally {
      setSending(false);
    }
  };
  const sendPayload = async (fileObj = null, forcedType = null) => {
    if (!activeConvId || sending) return;
    if (!fileObj && !newMessage.trim()) return;
    setSending(true);
    try {
      const formData = new FormData();
      if (newMessage.trim()) formData.append("content", newMessage);
      let resolvedType = forcedType;
      if (!resolvedType) {
        resolvedType = isInternalNote ? "internal_note" : "text";
      }
      formData.append("type", resolvedType);
      if (fileObj) {
        formData.append("file", fileObj);
      }
      await axios.post(`/api/inbox/${activeConvId}/message`, formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setNewMessage("");
      if (isInternalNote) setIsInternalNote(false);
      const { data } = await axios.get("/api/inbox/refresh");
      setConversations(data);
    } catch (error) {
      alert("Falha ao enviar mensagem ou anexo. Verifique se o tamanho excede o limite (20mb).");
    } finally {
      setSending(false);
    }
  };
  const handleSendMessageText = (e) => {
    e.preventDefault();
    sendPayload();
  };
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) audioChunksRef.current.push(event.data);
      };
      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        const audioFile = new File([audioBlob], `voice_note_${(/* @__PURE__ */ new Date()).getTime()}.webm`, { type: "audio/webm" });
        await sendPayload(audioFile, "audio");
        stream.getTracks().forEach((track) => track.stop());
      };
      mediaRecorder.start();
      setIsRecording(true);
    } catch (e) {
      alert("Microfone bloqueado ou indisponível. Conceda as permissões no seu navegador.");
    }
  };
  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };
  const handleFileSelect = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    let detectedType = "document";
    if (file.type.startsWith("image/")) detectedType = "image";
    if (file.type.startsWith("video/")) detectedType = "video";
    await sendPayload(file, detectedType);
    e.target.value = "";
  };
  const handleAssign = async (userId) => {
    try {
      await axios.put(`/api/inbox/${activeConvId}/assign`, { user_id: userId });
      const { data } = await axios.get("/api/inbox/refresh");
      setConversations(data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleStatus = async (status) => {
    try {
      await axios.put(`/api/inbox/${activeConvId}/status`, { status });
      const { data } = await axios.get("/api/inbox/refresh");
      setConversations(data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleAddTag = async (e) => {
    var _a2;
    e.preventDefault();
    if (!newTag.trim() || !activeConv) return;
    const currentTags = ((_a2 = activeConv.contact) == null ? void 0 : _a2.tags) || [];
    if (currentTags.includes(newTag.trim())) {
      setNewTag("");
      return;
    }
    const updatedTags = [...currentTags, newTag.trim()];
    try {
      await axios.put(`/api/inbox/contact/${activeConv.contact_id}/tags`, { tags: updatedTags });
      setNewTag("");
      const { data } = await axios.get("/api/inbox/refresh");
      setConversations(data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleRemoveTag = async (tagToRemove) => {
    var _a2;
    if (!activeConv) return;
    const currentTags = ((_a2 = activeConv.contact) == null ? void 0 : _a2.tags) || [];
    const updatedTags = currentTags.filter((t) => t !== tagToRemove);
    try {
      await axios.put(`/api/inbox/contact/${activeConv.contact_id}/tags`, { tags: updatedTags });
      const { data } = await axios.get("/api/inbox/refresh");
      setConversations(data);
    } catch (error) {
      console.error(error);
    }
  };
  const filteredConversations = conversations.filter((c) => {
    var _a2;
    if (filter === "mine") {
      if (c.assigned_to !== auth.user.id) return false;
    } else if (filter === "unassigned") {
      if (c.assigned_to) return false;
    }
    if (statusFilter !== "all") {
      if (c.status !== statusFilter) return false;
    }
    if (channelFilter !== "all") {
      if (((_a2 = c.channel) == null ? void 0 : _a2.type) !== channelFilter) return false;
    }
    return true;
  });
  const activeConv = conversations.find((c) => c.id === activeConvId) || filteredConversations[0];
  reactExports.useEffect(() => {
    if (filteredConversations.length > 0 && !filteredConversations.some((c) => c.id === activeConvId)) {
      setActiveConvId(filteredConversations[0].id);
    }
  }, [filteredConversations.length]);
  const messagesEndRef = reactExports.useRef(null);
  const scrollToBottom = () => {
    var _a2;
    (_a2 = messagesEndRef.current) == null ? void 0 : _a2.scrollIntoView({ behavior: "smooth", block: "end" });
  };
  reactExports.useEffect(() => {
    scrollToBottom();
  }, [activeConv == null ? void 0 : activeConv.messages, activeConvId]);
  const getInitials = (name) => {
    if (!name) return "??";
    const parts = name.split(" ");
    return parts.length > 1 ? (parts[0][0] + parts[1][0]).toUpperCase() : parts[0].substring(0, 2).toUpperCase();
  };
  const formatTime = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };
  const formatTimer = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };
  const inboxMenu = [
    { label: "Entrada", icon: Inbox, active: true, badge: conversations.length.toString() }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    AuthenticatedLayout,
    {
      activeModule: "inbox",
      sidebarMenuItems: inboxMenu,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Head_default, { title: "Caixa de Entrada" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", ref: fileInputRef, hidden: true, onChange: handleFileSelect }),
        idleAlert && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed top-6 right-6 z-[100] animate-bounce", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center max-w-sm border-2 border-red-400", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mr-3 bg-red-800 p-2 rounded-full hidden sm:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-8 h-8 text-yellow-300 animate-pulse" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-extrabold text-lg uppercase tracking-wider mb-1", children: "Atraso Crítico!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium leading-snug", children: idleAlert.message })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIdleAlert(null), className: "ml-4 p-1.5 hover:bg-red-700 rounded transition-colors text-red-200 hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-[calc(100vh-4rem)] w-full overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-80 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col flex-shrink-0 z-20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-b border-gray-200 dark:border-gray-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-gray-800 dark:text-gray-100", children: "Conversas" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setIsNewConvOpen(true),
                      className: "p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded bg-indigo-50 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400 transition-colors",
                      title: "Nova Conversa",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-5 h-5" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-gray-500 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { className: "w-5 h-5" }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col space-y-3 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-1 overflow-x-auto pb-1 scrollbar-hide", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter("all"), className: `whitespace-nowrap px-3 py-1 text-[10px] uppercase font-bold rounded-md transition-colors ${filter === "all" ? "bg-indigo-600 text-white shadow-sm" : "bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400"}`, children: "Tudo" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter("mine"), className: `whitespace-nowrap px-3 py-1 text-[10px] uppercase font-bold rounded-md transition-colors ${filter === "mine" ? "bg-indigo-600 text-white shadow-sm" : "bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400"}`, children: "Meus" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter("unassigned"), className: `whitespace-nowrap px-3 py-1 text-[10px] uppercase font-bold rounded-md transition-colors ${filter === "unassigned" ? "bg-indigo-600 text-white shadow-sm" : "bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400"}`, children: "Fila" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex bg-gray-100 dark:bg-gray-800 p-0.5 rounded-lg border border-gray-200 dark:border-gray-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setStatusFilter("open"), className: `px-2 py-1 text-[10px] font-bold rounded-md transition-all ${statusFilter === "open" ? "bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 shadow-sm" : "text-gray-400"}`, children: "ABERTOS" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setStatusFilter("resolved"), className: `px-2 py-1 text-[10px] font-bold rounded-md transition-all ${statusFilter === "resolved" ? "bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 shadow-sm" : "text-gray-400"}`, children: "RESOLVIDOS" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => setChannelFilter("all"),
                        className: `p-1.5 rounded-lg transition-all ${channelFilter === "all" ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-900 border border-indigo-200" : "text-gray-400 opacity-50 hover:opacity-100"}`,
                        title: "Todos os Canais",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { className: "w-4 h-4" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => setChannelFilter("whatsapp"),
                        className: `p-1.5 rounded-lg transition-all ${channelFilter === "whatsapp" ? "bg-green-100 text-green-600 dark:bg-green-900 border border-green-200" : "text-gray-400 opacity-50 hover:opacity-100"}`,
                        title: "WhatsApp",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-4 h-4" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => setChannelFilter("instagram"),
                        className: `p-1.5 rounded-lg transition-all ${channelFilter === "instagram" ? "bg-pink-100 text-pink-600 dark:bg-pink-900 border border-pink-200" : "text-gray-400 opacity-50 hover:opacity-100"}`,
                        title: "Instagram",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AtSign, { className: "w-4 h-4" })
                      }
                    )
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 absolute left-3 top-2.5 text-gray-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Pesquisar...",
                    className: "w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-sm focus:ring-1 focus:ring-indigo-500 dark:text-gray-200"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto", children: filteredConversations.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-sm text-gray-400", children: "Nenhuma conversa encontrada neste filtro." }) : filteredConversations.map((chat) => {
              var _a2, _b2;
              const contact = chat.contact;
              const lastMessage = chat.messages && chat.messages.length > 0 ? chat.messages[chat.messages.length - 1] : null;
              const isActive = (activeConv == null ? void 0 : activeConv.id) === chat.id;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  onClick: () => setActiveConvId(chat.id),
                  className: `p-4 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors ${isActive ? "bg-indigo-50/50 dark:bg-indigo-900/20" : ""}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: (contact == null ? void 0 : contact.photo_url) || `https://ui-avatars.com/api/?name=${encodeURIComponent((contact == null ? void 0 : contact.name) || "C")}&background=6366f1&color=fff&size=80`,
                          alt: contact == null ? void 0 : contact.name,
                          className: "w-10 h-10 rounded-full object-cover bg-indigo-100",
                          onError: (e) => {
                            e.target.onerror = null;
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent((contact == null ? void 0 : contact.name) || "C")}&background=6366f1&color=fff&size=80`;
                          }
                        }
                      ),
                      ((_a2 = chat.channel) == null ? void 0 : _a2.type) === "whatsapp" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full" }),
                      ((_b2 = chat.channel) == null ? void 0 : _b2.type) === "instagram" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 right-0 w-3 h-3 bg-pink-500 border-2 border-white dark:border-gray-900 rounded-full" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-3 flex-1 overflow-hidden", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-baseline", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-gray-900 dark:text-gray-100 truncate", children: (contact == null ? void 0 : contact.name) || "Desconhecido" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-500 dark:text-gray-400", children: formatTime(chat.last_message_at) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `text-sm truncate mt-1 ${(lastMessage == null ? void 0 : lastMessage.type) === "internal_note" ? "text-yellow-600 dark:text-yellow-500" : "text-gray-500 dark:text-gray-400"}`, children: [
                        (lastMessage == null ? void 0 : lastMessage.type) === "internal_note" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-1", children: "🔒" }),
                        lastMessage ? lastMessage.type === "audio" ? "🎵 Mensagem de Voz" : lastMessage.type === "image" ? "📸 Foto" : lastMessage.type === "document" ? "📄 Arquivo" : lastMessage.content : "Nova Conversa"
                      ] }),
                      chat.assignee && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-gray-400 mt-1", children: [
                        "Atribuído a: ",
                        chat.assignee.name.split(" ")[0]
                      ] })
                    ] }),
                    chat.status === "resolved" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center ml-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-green-500" }) })
                  ] })
                },
                chat.id
              );
            }) })
          ] }),
          activeConv ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col bg-[#F9FAFB] dark:bg-[#0B0F19] relative min-w-0 z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center justify-between shadow-sm z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold", children: getInitials((_a = activeConv.contact) == null ? void 0 : _a.name) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-semibold text-gray-800 dark:text-gray-100 flex items-center", children: [
                    ((_b = activeConv.contact) == null ? void 0 : _b.name) || "Desconhecido",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `ml-2 px-2 py-0.5 rounded text-[10px] font-medium ${((_c = activeConv.channel) == null ? void 0 : _c.type) === "whatsapp" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-gray-100 text-gray-800"}`, children: (_d = activeConv.channel) == null ? void 0 : _d.name })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
                    activeConv.status === "open" ? "Aberto" : "Resolvido",
                    " via ",
                    (_e = activeConv.channel) == null ? void 0 : _e.identifier
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    className: "text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md py-1.5 pl-3 pr-8 focus:ring-indigo-500 outline-none",
                    value: activeConv.assigned_to || "",
                    onChange: (e) => handleAssign(e.target.value),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Atribuir a..." }),
                      users.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: u.id, children: u.name }, u.id))
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => handleStatus(activeConv.status === "open" ? "resolved" : "open"),
                    className: `flex items-center px-3 py-1.5 rounded-md transition-colors text-sm font-medium ${activeConv.status === "open" ? "bg-gray-100 hover:bg-green-50 text-gray-700 hover:text-green-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-green-400" : "bg-green-600 hover:bg-green-700 text-white"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 mr-1.5" }),
                      activeConv.status === "open" ? "Resolver" : "Resolvido"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setIsContactPanelOpen(!isContactPanelOpen),
                    className: `p-2 rounded-md transition-colors ${isContactPanelOpen ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400" : "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"}`,
                    title: "Informações",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-5 h-5" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-6 space-y-6", children: [
              activeConv.messages && activeConv.messages.map((message) => {
                var _a2;
                if (message.type === "internal_note") {
                  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center max-w-2xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 dark:bg-[#332a11] border border-yellow-200 dark:border-yellow-900/50 p-3 rounded-xl w-full flex items-start shadow-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-5 h-5 text-yellow-600 dark:text-yellow-500 mt-0.5 mr-3 flex-shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-yellow-800 dark:text-yellow-400 uppercase tracking-widest", children: "Nota Interna Visível Apenas Para a Equipe" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-yellow-900 dark:text-yellow-200 mt-1 whitespace-pre-line", children: message.content })
                    ] })
                  ] }) }, message.id);
                }
                const renderMedia = () => {
                  if (!message.attachment_url) return null;
                  if (message.type === "image") return /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: message.attachment_url, alt: "anexo", className: "rounded-lg max-h-64 object-cover mb-2" });
                  if (message.type === "audio") return /* @__PURE__ */ jsxRuntimeExports.jsx("audio", { controls: true, src: message.attachment_url, className: "mb-2 max-w-full h-10 w-64" });
                  if (message.type === "video") return /* @__PURE__ */ jsxRuntimeExports.jsx("video", { controls: true, src: message.attachment_url, className: "rounded-lg max-h-64 mb-2 max-w-full" });
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: message.attachment_url, target: "_blank", rel: "noreferrer", className: "flex items-center p-3 mb-2 bg-black/10 rounded overflow-hidden", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-5 h-5 mr-2 flex-shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-sm underline", children: "Visualizar Anexo" })
                  ] });
                };
                if (message.sender_type === "contact") {
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-start mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex-shrink-0 flex items-center justify-center text-xs text-indigo-700 dark:text-indigo-300 font-bold mr-2", children: getInitials((_a2 = activeConv.contact) == null ? void 0 : _a2.name) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-3.5 rounded-2xl rounded-bl-sm shadow-sm max-w-[85%] sm:max-w-lg", children: [
                      renderMedia(),
                      message.content && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-800 dark:text-gray-200 whitespace-pre-line leading-relaxed", children: message.content }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-gray-400 dark:text-gray-500 mt-1 block right-0 text-right", children: formatTime(message.created_at) })
                    ] })
                  ] }, message.id);
                }
                return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end justify-end mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#dcf8c6] dark:bg-[#056162] text-gray-900 dark:text-gray-100 p-3.5 rounded-2xl rounded-br-sm shadow-sm border border-[#cfebd6] dark:border-[#044c4d] max-w-[85%] sm:max-w-lg text-left relative", children: [
                  renderMedia(),
                  message.content && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm whitespace-pre-line leading-relaxed", children: message.content }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-gray-500 dark:text-gray-300 mt-1 block right-0 text-right", children: [
                    formatTime(message.created_at),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3 inline-block ml-1 opacity-70" })
                  ] })
                ] }) }, message.id);
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: messagesEndRef })
            ] }),
            isCatalogOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-[90px] left-20 z-50 w-[400px] sm:w-[500px] bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden animate-in slide-in-from-bottom-2 fade-in", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-indigo-50 dark:bg-indigo-900/50 border-b border-indigo-100 dark:border-indigo-800 font-semibold text-sm flex flex-col gap-2 text-indigo-800 dark:text-indigo-200", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Car, { className: "w-4 h-4 mr-2" }),
                    " Inserir Veículo no Chat"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsCatalogOpen(false), className: "text-indigo-400 hover:text-indigo-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 absolute left-2.5 top-2.5 text-indigo-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      autoFocus: true,
                      type: "text",
                      placeholder: "Buscar modelo ou marca...",
                      value: vehicleSearch,
                      onChange: (e) => setVehicleSearch(e.target.value),
                      className: "w-full text-xs pl-8 pr-3 py-2 border-indigo-200 dark:border-indigo-800 rounded-md bg-white dark:bg-gray-800 dark:text-gray-100 focus:ring-1 focus:ring-indigo-500"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-h-80 overflow-y-auto p-3 grid grid-cols-2 gap-3", children: [
                vehicles.filter((v) => vehicleSearch ? (v.make + " " + v.model).toLowerCase().includes(vehicleSearch.toLowerCase()) : true).map((v) => {
                  const parsedImages = v.images && typeof v.images === "string" ? JSON.parse(v.images) : v.images || [];
                  const firstImage = parsedImages.length > 0 ? parsedImages[0] : null;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden group hover:border-indigo-500 cursor-pointer transition-colors bg-white dark:bg-gray-900 flex flex-col",
                      onClick: () => sendVehicleMedia(v),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-28 bg-gray-100 dark:bg-gray-800 w-full flex items-center justify-center relative overflow-hidden", children: firstImage ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: firstImage.startsWith("http") ? firstImage : "/storage/" + firstImage, className: "object-cover w-full h-full transform group-hover:scale-105 transition-transform", alt: "carro" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Car, { className: "w-8 h-8 text-gray-300 dark:text-gray-600" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 flex-1 flex flex-col justify-between", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold text-gray-800 dark:text-gray-200 line-clamp-1", title: `${v.make} ${v.model}`, children: [
                              v.make,
                              " ",
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-normal", children: v.model })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-gray-500 mt-0.5", children: v.year })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-black text-indigo-600 dark:text-indigo-400 mt-1", children: [
                            "R$ ",
                            v.price ? parseFloat(v.price).toLocaleString("pt-BR") : "--"
                          ] })
                        ] })
                      ]
                    },
                    v.id
                  );
                }),
                vehicles.filter((v) => vehicleSearch ? (v.make + " " + v.model).toLowerCase().includes(vehicleSearch.toLowerCase()) : true).length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 text-center text-xs text-gray-400 py-6", children: "Nenhum veículo encontrado." })
              ] })
            ] }),
            !activeConv.assigned_to ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-t z-10 relative bg-white dark:bg-gray-900 border-t-2 border-indigo-100 flex items-center justify-between shadow-inner", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-600 dark:text-gray-300 font-medium", children: "Esta conversa aguarda um atendente." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => handleAssign(auth.user.id),
                  className: "px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-md transition-all flex items-center animate-pulse hover:animate-none",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-5 h-5 mr-2" }),
                    "Aceitar e Iniciar Atendimento"
                  ]
                }
              )
            ] }) : isRecording ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-t z-10 relative bg-white dark:bg-gray-900 flex items-center justify-between border-t-red-500 border-t-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-red-500 animate-pulse", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { className: "w-6 h-6 mr-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold tracking-widest", children: formatTimer(recordingTime) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-3 text-sm text-gray-500", children: "Gravando mensagem de voz..." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    stopRecording();
                  },
                  className: "bg-red-50 text-red-600 px-4 py-2 font-semibold text-sm rounded-lg flex items-center",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleStop, { className: "w-4 h-4 mr-2" }),
                    " Encerrar e Enviar"
                  ]
                }
              ) })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSendMessageText, className: `p-4 border-t z-10 relative transition-colors ${isInternalNote ? "bg-yellow-50 dark:bg-[#332a11] border-yellow-200 dark:border-yellow-900/50" : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex items-end border rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent transition-all ${isInternalNote ? "bg-white dark:bg-gray-800 border-yellow-300 dark:border-yellow-700" : "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  className: "w-full max-h-32 min-h-[50px] bg-transparent border-none focus:ring-0 resize-none py-3 px-4 text-sm dark:text-gray-200",
                  placeholder: isInternalNote ? "Escreva uma nota interna para a equipe..." : "Escreva sua mensagem para o cliente... ('/' p/ Atalhos)",
                  value: newMessage,
                  onChange: (e) => {
                    setNewMessage(e.target.value);
                    if (e.target.value.endsWith("/")) {
                      setIsMacroOpen(true);
                    }
                  },
                  onKeyDown: (e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessageText(e);
                    }
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-2 px-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1 relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
                    setIsEmojiOpen((v) => !v);
                    setIsMacroOpen(false);
                    setIsCatalogOpen(false);
                  }, className: "p-2 rounded-full text-base hover:bg-yellow-50 transition-colors", title: "Emojis", children: "😊" }),
                  isEmojiOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-10 left-0 z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl p-2 w-60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-8 gap-0.5", children: EMOJI_LIST.map((em, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
                    setNewMessage((m) => m + em);
                    setIsEmojiOpen(false);
                  }, className: "text-base hover:bg-gray-100 dark:hover:bg-gray-700 rounded p-0.5", children: em }, idx)) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
                    setIsMacroOpen((v) => !v);
                    setIsCatalogOpen(false);
                    setIsEmojiOpen(false);
                  }, className: `p-2 rounded-full transition-colors ${isMacroOpen ? "text-indigo-600 bg-indigo-50" : "text-gray-500 hover:text-indigo-600"}`, title: "Frases Rápidas", children: /* @__PURE__ */ jsxRuntimeExports.jsx(List, { className: "w-5 h-5" }) }),
                  isMacroOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-10 left-10 z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl p-3 w-80", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-gray-400 uppercase mb-2", children: "Frases Rápidas" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { autoFocus: true, type: "text", placeholder: "Buscar frase...", className: "w-full text-sm border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-1.5 mb-2 dark:bg-gray-900 dark:text-white", value: qrSearch, onChange: (e) => setQrSearch(e.target.value) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-h-52 overflow-y-auto space-y-1", children: [
                      quickReplies.filter((r) => r.title.toLowerCase().includes(qrSearch.toLowerCase()) || r.content.toLowerCase().includes(qrSearch.toLowerCase())).map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
                        setNewMessage(r.content);
                        setIsMacroOpen(false);
                        setQrSearch("");
                      }, className: "w-full text-left px-3 py-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold text-indigo-600 dark:text-indigo-400", children: [
                          "/",
                          r.title
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400 truncate", children: r.content })
                      ] }, r.id)),
                      quickReplies.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 text-center py-3", children: "Cadastre em Configurações → Frases Rápidas" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
                    setIsCatalogOpen((v) => !v);
                    setIsMacroOpen(false);
                    setIsEmojiOpen(false);
                  }, className: `p-2 rounded-full transition-colors ${isCatalogOpen ? "text-indigo-600 bg-indigo-50" : "text-gray-500 hover:text-indigo-600"}`, title: "Catálogo de Veículos", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Car, { className: "w-5 h-5" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-px h-5 bg-gray-300 mx-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: startRecording, className: "p-2 text-gray-500 hover:text-red-600 dark:hover:text-red-400 rounded-full transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { className: "w-5 h-5" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => fileInputRef.current.click(), className: "p-2 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-full transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Paperclip, { className: "w-5 h-5" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer hover:text-gray-900 dark:hover:text-gray-200 ml-4 border-l pl-4 border-gray-300 dark:border-gray-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: isInternalNote,
                        onChange: () => setIsInternalNote(!isInternalNote),
                        className: "rounded border-gray-300 text-yellow-500 shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-xs tracking-wide uppercase", children: "Nota de Equipe" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: sending, className: `flex items-center px-6 py-2 text-white rounded-lg transition-colors font-medium text-sm shadow-sm disabled:opacity-50 ${isInternalNote ? "bg-yellow-600 hover:bg-yellow-700" : "bg-indigo-600 hover:bg-indigo-700"}`, children: [
                  sending ? "Salvando..." : "Enviar",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-4 h-4 ml-2 transform rotate-45 mb-0.5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8" }) })
                ] })
              ] })
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center bg-[#F9FAFB] dark:bg-[#0B0F19]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { className: "w-16 h-16 text-gray-300 dark:text-gray-700 mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-medium text-gray-900 dark:text-gray-300", children: "Nenhuma conversa selecionada" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 mt-2", children: "Escolha na barra lateral ou ajuste os filtros." })
          ] }),
          isContactPanelOpen && activeConv && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-80 border-l border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col flex-shrink-0 z-20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-b border-gray-200 dark:border-gray-800 flex flex-col items-center bg-gray-50/50 dark:bg-gray-900", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-700 dark:text-indigo-300 text-3xl font-bold mb-4 shadow-sm ring-4 ring-white dark:ring-gray-800 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: ((_f = activeConv.contact) == null ? void 0 : _f.photo_url) || `https://ui-avatars.com/api/?name=${encodeURIComponent(((_g = activeConv.contact) == null ? void 0 : _g.name) || "C")}&background=6366f1&color=fff&size=160`,
                  alt: (_h = activeConv.contact) == null ? void 0 : _h.name,
                  className: "w-full h-full object-cover",
                  onError: (e) => {
                    var _a2;
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(((_a2 = activeConv.contact) == null ? void 0 : _a2.name) || "C")}&background=6366f1&color=fff&size=160`;
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-900 dark:text-white mb-1", children: ((_i = activeConv.contact) == null ? void 0 : _i.name) || "Desconhecido" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400 mb-4", children: ((_j = activeConv.contact) == null ? void 0 : _j.phone) || "Sem número" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setIsCreateDealModalOpen(true),
                  className: "w-full flex justify-center items-center py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors text-sm font-semibold shadow-sm",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-4 h-4 mr-2" }),
                    "Transformar em Negócio"
                  ]
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { title: "Contato", icon: User, defaultOpen: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "E-mail" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-800 dark:text-gray-200 font-medium", children: ((_k = activeConv.contact) == null ? void 0 : _k.email) || "--" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400 mb-2", children: "Etiquetas (Tags)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-3", children: ((_l = activeConv.contact) == null ? void 0 : _l.tags) ? activeConv.contact.tags.map((tag, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 text-xs rounded-md font-medium flex items-center", children: [
                    tag,
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleRemoveTag(tag), className: "ml-1 hover:text-red-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" }) })
                  ] }, i)) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400 italic", children: "Nenhuma tag..." }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleAddTag, className: "flex gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        placeholder: "Nova Etiqueta",
                        value: newTag,
                        onChange: (e) => setNewTag(e.target.value),
                        className: "w-full text-xs px-2 py-1.5 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "px-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-300 transition-colors", children: "+" })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { title: "Negociações no CRM", icon: Briefcase, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-500 text-center py-4 italic", children: "Nenhuma negociação aberta identificada diretamente." }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { title: "Arquivo de Notas", icon: FileText, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    className: "w-full text-xs bg-gray-50 border border-gray-200 rounded p-2 focus:ring-indigo-500 focus:border-indigo-500",
                    rows: "4",
                    placeholder: "Anotações fixas do lead..."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-semibold py-1.5 rounded transition", children: "Salvar Anotação" })
              ] }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CreateDealModal,
          {
            isOpen: isCreateDealModalOpen,
            onClose: () => setIsCreateDealModalOpen(false),
            contacts,
            stages
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          NewConversationModal,
          {
            isOpen: isNewConvOpen,
            onClose: () => setIsNewConvOpen(false),
            contacts,
            channels,
            onSuccess: (newConv) => {
              setActiveConvId(newConv.id);
              axios.get("/api/inbox/refresh").then(({ data }) => setConversations(data));
            }
          }
        )
      ]
    }
  );
}
export {
  InboxIndex as default
};
