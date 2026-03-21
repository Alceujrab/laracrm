import { c as usePage, r as reactExports, u as useForm, j as jsxRuntimeExports } from "./app-CpdAeTN9.js";
import { B as Building2 } from "./building-2-CX6v7pnX.js";
import { G as Globe } from "./globe-CQUByw2b.js";
import { I as Image, U as Upload } from "./upload-B-x9zcLR.js";
import { S as Save } from "./save-DHopUfPz.js";
import "./createLucideIcon-UsPif6H6.js";
function GeneralTab() {
  const { app_settings, flash } = usePage().props;
  const [logoPreview, setLogoPreview] = reactExports.useState(app_settings.app_logo);
  const { data, setData, post, processing, errors } = useForm({
    app_name: app_settings.app_name || "",
    app_logo: null
  });
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setData("app_logo", file);
      setLogoPreview(URL.createObjectURL(file));
    }
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("settings.general.update"), {
      forceFormData: true,
      preserveScroll: true
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-5 h-5 text-indigo-500" }),
        "Identidade Visual"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400 mt-1", children: "Personalize o nome e a logomarca que aparecem no sistema." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-4 h-4 text-gray-400" }),
              "Nome da Empresa / Workspace"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: data.app_name,
                onChange: (e) => setData("app_name", e.target.value),
                className: "w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all shadow-sm",
                placeholder: "Ex: CF Auto CRM"
              }
            ),
            errors.app_name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-xs text-red-500 font-medium", children: errors.app_name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-widest mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-3.5 h-3.5" }),
              "Visibilidade Global"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-indigo-600/80 dark:text-indigo-400/70 leading-relaxed", children: "Este nome aparecerá na barra de título do navegador, no cabeçalho do sistema e em notificações enviadas aos clientes." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-4 h-4 text-gray-400" }),
            "Logomarca do Sistema"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-2xl bg-gray-50/50 dark:bg-gray-900/30 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all group relative overflow-hidden", children: [
            logoPreview ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: logoPreview,
                  alt: "Logo Preview",
                  className: "h-24 object-contain transition-transform group-hover:scale-105 duration-300"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-xs font-bold", children: "Trocar Logo" }) })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-8 h-8 text-gray-400 group-hover:text-indigo-500 transition-colors" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-gray-600 dark:text-gray-400", children: "Clique para fazer upload" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 mt-1", children: "PNG, JPG ou SVG (Max. 2MB)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "file",
                onChange: handleLogoChange,
                className: "absolute inset-0 opacity-0 cursor-pointer",
                accept: "image/*"
              }
            )
          ] }),
          errors.app_logo && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-xs text-red-500 font-medium", children: errors.app_logo })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "submit",
          disabled: processing,
          className: "flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white rounded-xl font-bold shadow-lg shadow-indigo-200 dark:shadow-none transition-all hover:scale-105 active:scale-95",
          children: [
            processing ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-5 h-5" }),
            "Salvar Alterações"
          ]
        }
      ) })
    ] })
  ] });
}
export {
  GeneralTab as default
};
