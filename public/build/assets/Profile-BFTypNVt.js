import { r as reactExports, j as jsxRuntimeExports, b as router3 } from "./app-Bog6UFGg.js";
import { c as createLucideIcon } from "./createLucideIcon-BtfvjG5O.js";
import { U as User } from "./user-CAdaE3pj.js";
import { S as Save } from "./save-CVvnHa_F.js";
import { C as CircleCheckBig } from "./circle-check-big-BMaGOYIW.js";
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
      d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
      key: "18u6gg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
];
const Camera = createLucideIcon("camera", __iconNode$1);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode);
const InputClass = "w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors";
const LabelClass = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5";
function SectionCard({ title, icon: Icon, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-indigo-600 dark:text-indigo-400" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-900 dark:text-white", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", children })
  ] });
}
function Toast({ message, onClose }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-6 right-6 z-50 bg-green-600 text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 animate-in slide-in-from-bottom-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-sm", children: message }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "ml-2 text-green-200 hover:text-white", children: "✕" })
  ] });
}
function ProfileTab({ user }) {
  const [profileForm, setProfileForm] = reactExports.useState({ name: (user == null ? void 0 : user.name) || "", email: (user == null ? void 0 : user.email) || "" });
  const [passwordForm, setPasswordForm] = reactExports.useState({ current_password: "", password: "", password_confirmation: "" });
  const [toast, setToast] = reactExports.useState(null);
  const [avatarPreview, setAvatarPreview] = reactExports.useState(null);
  const [profileLoading, setProfileLoading] = reactExports.useState(false);
  const [passwordLoading, setPasswordLoading] = reactExports.useState(false);
  const fileRef = reactExports.useRef(null);
  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 4e3);
  };
  const avatarUrl = avatarPreview || ((user == null ? void 0 : user.avatar_url) ?? `https://ui-avatars.com/api/?name=${encodeURIComponent((user == null ? void 0 : user.name) || "U")}&background=6366f1&color=fff&size=128`);
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setAvatarPreview(URL.createObjectURL(file));
    const formData = new FormData();
    formData.append("avatar", file);
    router3.post(route("settings.profile.avatar"), formData, {
      forceFormData: true,
      preserveScroll: true,
      onSuccess: () => showToast("Foto de perfil atualizada!"),
      onError: (e2) => console.error(e2)
    });
  };
  const handleProfileSave = (e) => {
    e.preventDefault();
    setProfileLoading(true);
    router3.patch(route("settings.profile.update"), profileForm, {
      preserveScroll: true,
      onSuccess: () => {
        showToast("Perfil atualizado!");
        setProfileLoading(false);
      },
      onError: () => setProfileLoading(false)
    });
  };
  const handlePasswordSave = (e) => {
    e.preventDefault();
    setPasswordLoading(true);
    router3.patch(route("settings.profile.password"), passwordForm, {
      preserveScroll: true,
      onSuccess: () => {
        showToast("Senha alterada com sucesso!");
        setPasswordForm({ current_password: "", password: "", password_confirmation: "" });
        setPasswordLoading(false);
      },
      onError: () => setPasswordLoading(false)
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full bg-gray-50 dark:bg-gray-950 overflow-y-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex-shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: "Meu Perfil" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400 mt-0.5", children: "Gerencie suas informações pessoais e senha da conta." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-6 xl:p-8 space-y-6 max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Foto de Perfil", icon: Camera, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: avatarUrl, alt: "Avatar", className: "w-24 h-24 rounded-full object-cover ring-4 ring-indigo-100 dark:ring-indigo-900" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => {
                var _a;
                return (_a = fileRef.current) == null ? void 0 : _a.click();
              },
              className: "absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-6 h-6 text-white" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: fileRef, type: "file", accept: "image/*", className: "hidden", onChange: handleAvatarChange })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-900 dark:text-white", children: user == null ? void 0 : user.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mt-0.5", children: user == null ? void 0 : user.email }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            var _a;
            return (_a = fileRef.current) == null ? void 0 : _a.click();
          }, className: "mt-2 text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-medium", children: "Alterar foto" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 mt-0.5", children: "JPG, PNG ou GIF. Máximo 2 MB." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Informações Pessoais", icon: User, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleProfileSave, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: LabelClass, children: "Nome completo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, className: InputClass, value: profileForm.name, onChange: (e) => setProfileForm((f) => ({ ...f, name: e.target.value })) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: LabelClass, children: "Endereço de email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, className: InputClass, value: profileForm.email, onChange: (e) => setProfileForm((f) => ({ ...f, email: e.target.value })) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: profileLoading, className: "flex items-center gap-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
          profileLoading ? "Salvando..." : "Salvar Informações"
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Segurança — Alterar Senha", icon: Lock, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handlePasswordSave, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: LabelClass, children: "Senha atual" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", required: true, className: InputClass, value: passwordForm.current_password, onChange: (e) => setPasswordForm((f) => ({ ...f, current_password: e.target.value })) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: LabelClass, children: "Nova senha" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", required: true, className: InputClass, value: passwordForm.password, onChange: (e) => setPasswordForm((f) => ({ ...f, password: e.target.value })) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: LabelClass, children: "Confirmar nova senha" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", required: true, className: InputClass, value: passwordForm.password_confirmation, onChange: (e) => setPasswordForm((f) => ({ ...f, password_confirmation: e.target.value })) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: passwordLoading, className: "flex items-center gap-2 px-5 py-2 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-lg text-sm font-medium transition-colors disabled:opacity-50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4" }),
          passwordLoading ? "Alterando..." : "Alterar Senha"
        ] }) })
      ] }) })
    ] }),
    toast && /* @__PURE__ */ jsxRuntimeExports.jsx(Toast, { message: toast, onClose: () => setToast(null) })
  ] });
}
export {
  ProfileTab as default
};
