import { r as reactExports, u as useForm, j as jsxRuntimeExports, b as router3 } from "./app-D5XQWmF0.js";
import { c as createLucideIcon } from "./createLucideIcon-C7XOQWLe.js";
import { U as Users } from "./users-CLBoGBX-.js";
import { P as Plus } from "./plus-BDBsIk0S.js";
import { S as SquarePen } from "./square-pen-CoSA66VP.js";
import { T as Trash2 } from "./trash-2-ByWBfHPu.js";
import { X } from "./x-BenSGx-0.js";
import { C as Check } from "./check-ikG3hKy3.js";
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M6 21V9a9 9 0 0 0 9 9", key: "7kw0sc" }]
];
const GitMerge = createLucideIcon("git-merge", __iconNode$2);
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
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
];
const ShieldAlert = createLucideIcon("shield-alert", __iconNode$1);
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
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode);
function OrganizationTab({ users = [], groups = [], roles = [], flash = {} }) {
  const [activeTab, setActiveTab] = reactExports.useState("members");
  const [isMemberModalOpen, setIsMemberModalOpen] = reactExports.useState(false);
  const [editingUser, setEditingUser] = reactExports.useState(null);
  const { data: memberData, setData: setMemberData, post: postMember, put: putMember, processing: memberProcessing, reset: resetMember } = useForm({
    name: "",
    email: "",
    password: "",
    role: "agente",
    groups: []
  });
  const [isGroupModalOpen, setIsGroupModalOpen] = reactExports.useState(false);
  const [editingGroup, setEditingGroup] = reactExports.useState(null);
  const { data: groupData, setData: setGroupData, post: postGroup, put: putGroup, processing: groupProcessing, reset: resetGroup } = useForm({
    name: "",
    description: "",
    is_active: true
  });
  const openNewMember = () => {
    setEditingUser(null);
    resetMember();
    setIsMemberModalOpen(true);
  };
  const openEditMember = (u) => {
    setEditingUser(u);
    setMemberData({
      name: u.name,
      email: u.email,
      password: "",
      // não preencher
      role: u.roles && u.roles.length > 0 ? u.roles[0].name : "agente",
      groups: u.groups ? u.groups.map((g) => g.id) : []
    });
    setIsMemberModalOpen(true);
  };
  const submitMember = (e) => {
    e.preventDefault();
    if (editingUser) {
      putMember(route("settings.members.update", editingUser.id), {
        onSuccess: () => setIsMemberModalOpen(false)
      });
    } else {
      postMember(route("settings.members.store"), {
        onSuccess: () => setIsMemberModalOpen(false)
      });
    }
  };
  const toggleGroupSelection = (groupId) => {
    const current = [...memberData.groups];
    if (current.includes(groupId)) {
      setMemberData("groups", current.filter((id) => id !== groupId));
    } else {
      setMemberData("groups", [...current, groupId]);
    }
  };
  const openNewGroup = () => {
    setEditingGroup(null);
    resetGroup();
    setIsGroupModalOpen(true);
  };
  const openEditGroup = (g) => {
    setEditingGroup(g);
    setGroupData({
      name: g.name,
      description: g.description || "",
      is_active: !!g.is_active
    });
    setIsGroupModalOpen(true);
  };
  const submitGroup = (e) => {
    e.preventDefault();
    if (editingGroup) {
      putGroup(route("settings.groups.update", editingGroup.id), {
        onSuccess: () => setIsGroupModalOpen(false)
      });
    } else {
      postGroup(route("settings.groups.store"), {
        onSuccess: () => setIsGroupModalOpen(false)
      });
    }
  };
  const deleteGroup = (id) => {
    if (confirm("Atenção: Destruir uma Fila de Atendimento é uma ação drástica. Os membros dessa fila serão deslocados da atribuição. Continuar?")) {
      router3.delete(route("settings.groups.destroy", id));
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full overflow-y-auto bg-gray-50 dark:bg-gray-950", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-8 h-8 mr-3 text-indigo-600 dark:text-indigo-400" }),
          "Gestão de Equipe e Permissões"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-gray-500 dark:text-gray-400", children: "Central de comando (RBAC) para delegar Acessos (Administrativo x Operacional) e Filas Setoriais (Ex: Vendas, Suporte)." })
      ] }),
      (flash == null ? void 0 : flash.success) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-green-800", children: flash.success }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 border-b border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "-mb-px flex space-x-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setActiveTab("members"),
            className: `${activeTab === "members" ? "border-indigo-500 text-indigo-600 dark:text-indigo-400 font-bold" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 font-medium"} whitespace-nowrap py-4 px-1 border-b-2 text-sm flex items-center transition-colors`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 mr-2" }),
              "Lista de Atendentes"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setActiveTab("groups"),
            className: `${activeTab === "groups" ? "border-indigo-500 text-indigo-600 dark:text-indigo-400 font-bold" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 font-medium"} whitespace-nowrap py-4 px-1 border-b-2 text-sm flex items-center transition-colors`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(GitMerge, { className: "w-4 h-4 mr-2" }),
              "Setores & Filas"
            ]
          }
        )
      ] }) }),
      activeTab === "members" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: "Controles de Acesso (Login)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: openNewMember, className: "inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md shadow-sm transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-2" }),
            " Adicionar Conta"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-50 dark:bg-gray-900/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider", children: "Identidade" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider", children: "Cargo de Acesso" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider", children: "Setores Puxados" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "relative px-6 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Ações" }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700", children: (users || []).map((user) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center font-bold text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800", children: ((user == null ? void 0 : user.name) || "?").charAt(0).toUpperCase() }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-gray-900 dark:text-white", children: user.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400", children: user.email })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: ((user == null ? void 0 : user.roles) || []).map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold leading-5 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300", children: [
              r.name === "admin" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-3 h-3 mr-1" }) : null,
              ((r == null ? void 0 : r.name) || "Vazio").toUpperCase()
            ] }, r.id)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: (user == null ? void 0 : user.groups) && user.groups.length > 0 ? user.groups.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300", children: (g == null ? void 0 : g.name) || "Desconhecido" }, g.id)) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 italic text-xs", children: "Sem Fila Fixa" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => openEditMember(user), className: "text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300", children: "Configurar" }) })
          ] }, user.id)) })
        ] }) })
      ] }),
      activeTab === "groups" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: "Setores Puxados pelo Bot" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: openNewGroup, className: "inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md shadow-sm transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-2" }),
            " Novo Setor"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
          (groups || []).map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 relative group overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => openEditGroup(g), className: "text-gray-400 hover:text-indigo-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-4 h-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => deleteGroup(g.id), className: "text-gray-400 hover:text-red-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg mr-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GitMerge, { className: "w-6 h-6 text-indigo-600 dark:text-indigo-400" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-lg font-bold text-gray-900 dark:text-white flex items-center", children: [
                  g.name,
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-3 font-mono text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded border border-gray-200 dark:border-gray-600", children: [
                    "ID: ",
                    g.id
                  ] }),
                  !g.is_active && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-[10px] bg-red-100 text-red-800 px-2 py-0.5 rounded uppercase font-bold tracking-widest", children: "Inativo" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2", children: g.description || "Sem descrição." })
              ] })
            ] })
          ] }, g.id)),
          groups.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full text-center py-12 text-gray-500 bg-white dark:bg-gray-800 rounded-xl border border-dashed border-gray-300 dark:border-gray-700", children: "Nenhuma fila de setor foi arquitetada ainda. Construa grupos para dividir o fluxo do WhatsApp." })
        ] })
      ] })
    ] }) }),
    isMemberModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-xl overflow-hidden animate-in zoom-in-95 duration-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-800/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-900 dark:text-white", children: editingUser ? "Credenciais e Atribuições" : "Novo Assinante da Plataforma" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsMemberModalOpen(false), className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submitMember, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold uppercase text-gray-700 dark:text-gray-300", children: "Nome Oficial" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: memberData.name, onChange: (e) => setMemberData("name", e.target.value), required: true, className: "mt-1 w-full text-sm rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold uppercase text-gray-700 dark:text-gray-300", children: "Email de Login" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: memberData.email, onChange: (e) => setMemberData("email", e.target.value), disabled: !!editingUser, required: true, className: "mt-1 w-full text-sm rounded-lg border-gray-300 disabled:opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold uppercase text-gray-700 dark:text-gray-300", children: "Senha Padrão" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", value: memberData.password, onChange: (e) => setMemberData("password", e.target.value), required: !editingUser, placeholder: editingUser ? "Deixe em branco para manter" : "Min. 6 caracteres", className: "mt-1 w-full text-sm rounded-lg border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-gray-100 dark:border-gray-700 pt-4 mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4 mr-2 text-indigo-500" }),
              " Privilégio de Sistema (Cargo)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: `cursor-pointer border-2 rounded-xl p-4 flex items-start ${memberData.role === "admin" ? "border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20" : "border-gray-200 dark:border-gray-700"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "radio", name: "role", value: "admin", checked: memberData.role === "admin", onChange: (e) => setMemberData("role", e.target.value), className: "sr-only" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sm font-bold text-gray-900 dark:text-white uppercase", children: "Gestor / Admin" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs text-gray-500 mt-1 leading-relaxed", children: "Pode destruir canais, montar funis e deletar usuários." })
                ] }),
                memberData.role === "admin" && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-5 h-5 text-indigo-600 ml-2" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: `cursor-pointer border-2 rounded-xl p-4 flex items-start ${memberData.role === "agente" ? "border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20" : "border-gray-200 dark:border-gray-700"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "radio", name: "role", value: "agente", checked: memberData.role === "agente", onChange: (e) => setMemberData("role", e.target.value), className: "sr-only" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sm font-bold text-gray-900 dark:text-white uppercase", children: "Operacional / Agente" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs text-gray-500 mt-1 leading-relaxed", children: "Fica focado na Inbox e Kanbans de trabalho apenas." })
                ] }),
                memberData.role === "agente" && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-5 h-5 text-indigo-600 ml-2" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-gray-100 dark:border-gray-700 pt-4 mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-bold text-gray-900 dark:text-white mb-2 flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(GitMerge, { className: "w-4 h-4 mr-2 text-indigo-500" }),
              " Filas Alocadas (Participação)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mb-3", children: "Marque as filas que esta pessoa vai receber as mensagens." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: (groups || []).map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => toggleGroupSelection(g.id),
                className: `px-3 py-1.5 rounded-md text-sm font-medium border transition-colors ${((memberData == null ? void 0 : memberData.groups) || []).includes(g.id) ? "bg-indigo-600 border-indigo-600 text-white shadow-sm" : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"}`,
                children: (g == null ? void 0 : g.name) || "Fila sem nome"
              },
              g.id
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 bg-gray-50 dark:bg-gray-800/80 border-t border-gray-100 dark:border-gray-700 flex justify-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setIsMemberModalOpen(false), className: "mr-3 text-sm px-4 py-2 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300", children: "Cancelar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: memberProcessing, className: "px-6 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm", children: memberProcessing ? "Comitando..." : "Salvar Arquitetura do Membro" })
        ] })
      ] })
    ] }) }),
    isGroupModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-800/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-900 dark:text-white", children: editingGroup ? "Gerenciar Fila Base" : "Abraçar Novo Setor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsGroupModalOpen(false), className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submitGroup, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold uppercase text-gray-700 dark:text-gray-300", children: "Nome da Fila (Tag)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: groupData.name, onChange: (e) => setGroupData("name", e.target.value), required: true, placeholder: "Ex: Financeiro", className: "mt-1 w-full text-sm rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold uppercase text-gray-700 dark:text-gray-300", children: "Descrição (Uso Opcional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: groupData.description, onChange: (e) => setGroupData("description", e.target.value), rows: "2", className: "mt-1 w-full text-sm rounded-lg border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white" })
          ] }),
          editingGroup && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-sm text-gray-700 dark:text-gray-300 flex items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: groupData.is_active, onChange: (e) => setGroupData("is_active", e.target.checked), className: "mr-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" }),
            "Manter esta Fila ativa no roteador base."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 bg-gray-50 dark:bg-gray-800/80 border-t border-gray-100 dark:border-gray-700 flex justify-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setIsGroupModalOpen(false), className: "mr-3 text-sm px-4 py-2 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300", children: "Cancelar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: groupProcessing, className: "px-6 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm", children: groupProcessing ? "Construindo Fila..." : "Registrar Setor" })
        ] })
      ] })
    ] }) })
  ] });
}
const Organization = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: OrganizationTab
}, Symbol.toStringTag, { value: "Module" }));
export {
  OrganizationTab as O,
  Shield as S,
  Organization as a
};
