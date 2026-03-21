import { r as reactExports, u as useForm, j as jsxRuntimeExports, H as Head_default, b as router3 } from "./app-DITW5dun.js";
import { A as AuthenticatedLayout, C as Car } from "./AuthenticatedLayout-B6DnBtze.js";
import { U as Upload, I as Image } from "./upload-1D3adYUz.js";
import { P as Plus } from "./plus-CGUw857e.js";
import { S as Search } from "./search-D-mc58C7.js";
import { F as Funnel } from "./funnel-BLMA1-FI.js";
import { C as Check } from "./check-DWVOlzvz.js";
import { C as CircleAlert } from "./circle-alert-u10olA9G.js";
import { S as SquarePen } from "./square-pen-11Sg-IkL.js";
import { T as Trash2 } from "./trash-2-CVGjSH52.js";
import { c as createLucideIcon } from "./createLucideIcon-C6NVuwOJ.js";
import { X } from "./x-yBa_plo7.js";
import "./transition-SoJuNQK0.js";
import "./mail-aCxgJQ6o.js";
import "./users-Kv6Gcbr3.js";
import "./settings-CvJvE2as.js";
import "./calendar-IU5HW2RZ.js";
import "./chevron-right-BPfAUUu8.js";
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
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  [
    "path",
    { d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1", key: "1oajmo" }
  ],
  [
    "path",
    { d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1", key: "mpwhp6" }
  ]
];
const FileBraces = createLucideIcon("file-braces", __iconNode);
function CatalogIndex({ vehicles = [], setting, flash }) {
  const [isImportModalOpen, setIsImportModalOpen] = reactExports.useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = reactExports.useState(false);
  const [editingVehicle, setEditingVehicle] = reactExports.useState(null);
  const [viewingVehicle, setViewingVehicle] = reactExports.useState(null);
  const [selectedImage, setSelectedImage] = reactExports.useState(0);
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const filteredVehicles = vehicles.filter((v) => {
    if (statusFilter !== "all" && v.status !== statusFilter) return false;
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      return (v.make || "").toLowerCase().includes(term) || (v.model || "").toLowerCase().includes(term) || (v.year || "").toString().includes(term);
    }
    return true;
  });
  const { data: syncData, setData: setSyncData, post: postSync, processing: syncProcessing } = useForm({
    xml_feed_url: (setting == null ? void 0 : setting.xml_feed_url) || "",
    auto_sync: (setting == null ? void 0 : setting.auto_sync) || false
  });
  const [forceProcessing, setForceProcessing] = reactExports.useState(false);
  const { data: vData, setData: setVData, post: postVehicle, put: putVehicle, processing: vProcessing, errors: vErrors, reset: resetVData } = useForm({
    make: "",
    model: "",
    year: (/* @__PURE__ */ new Date()).getFullYear(),
    price: "",
    km: "",
    plate: "",
    status: "available",
    images: null
    // arrays of files if editing/creating manual
  });
  const openCreateModal = () => {
    setEditingVehicle(null);
    resetVData();
    setVData({
      make: "",
      model: "",
      year: (/* @__PURE__ */ new Date()).getFullYear(),
      price: "",
      km: "",
      plate: "",
      status: "available",
      images: null
    });
    setIsEditModalOpen(true);
  };
  const openEditModal = (v) => {
    setEditingVehicle(v);
    setVData({
      make: v.make || "",
      model: v.model || "",
      year: v.year || (/* @__PURE__ */ new Date()).getFullYear(),
      price: v.price || "",
      km: v.km || "",
      plate: v.plate || "",
      status: v.status || "available",
      images: null
      // Keep null, unless uploading new ones
    });
    setIsEditModalOpen(true);
  };
  const handleDelete = (id) => {
    if (confirm("Tem certeza que deseja remover este veículo do estoque? Ele deixará de aparecer no chat imediatamente.")) {
      router3.delete(`/catalog/${id}`);
    }
  };
  const submitSettings = (e) => {
    e.preventDefault();
    postSync(route("catalog.settings.update"), {
      preserveScroll: true,
      onSuccess: () => {
        setIsImportModalOpen(false);
      }
    });
  };
  const forceSync = () => {
    setForceProcessing(true);
    router3.post(route("catalog.sync.force"), {}, {
      preserveScroll: true,
      onFinish: () => setForceProcessing(false),
      onSuccess: () => setIsImportModalOpen(false)
    });
  };
  const submitVehicle = (e) => {
    e.preventDefault();
    if (editingVehicle) {
      router3.post(`/catalog/${editingVehicle.id}`, {
        _method: "put",
        ...vData
      }, {
        onSuccess: () => {
          setIsEditModalOpen(false);
          resetVData();
        }
      });
    } else {
      postVehicle(route("catalog.store"), {
        onSuccess: () => {
          setIsEditModalOpen(false);
          resetVData();
        }
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AuthenticatedLayout, { activeModule: "catalog", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Head_default, { title: "Gerenciar Catálogo" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-bold text-gray-900 dark:text-white flex items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Car, { className: "w-8 h-8 mr-3 text-indigo-600 dark:text-indigo-400" }),
            "Catálogo de Veículos"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: "Gerencie o estoque disponível que será projetado na Caixa de Entrada Omnichannel." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 md:mt-0 flex space-x-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setIsImportModalOpen(true),
              className: "inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none transition ease-in-out duration-150",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-4 h-4 mr-2" }),
                "Configurar Sync"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: openCreateModal,
              className: "inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-700 focus:outline-none transition ease-in-out duration-150",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-2" }),
                "Adicionar Manual"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full md:w-96", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-5 w-5 text-gray-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              className: "block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors",
              placeholder: "Buscar por marca, modelo ou ano...",
              value: searchTerm,
              onChange: (e) => setSearchTerm(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 w-full md:w-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "w-5 h-5 text-gray-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: statusFilter,
              onChange: (e) => setStatusFilter(e.target.value),
              className: "block w-full md:w-48 pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg dark:bg-gray-700 dark:text-gray-100 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "Status: Todos" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "available", children: "Somente Disponíveis" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "reserved", children: "Somente Reservados" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "sold", children: "Somente Vendidos" })
              ]
            }
          )
        ] })
      ] }),
      (flash == null ? void 0 : flash.success) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 p-4 rounded-md flex items-center shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-5 h-5 text-green-500 mr-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-green-800 dark:text-green-300", children: flash.success })
      ] }),
      (flash == null ? void 0 : flash.error) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 p-4 rounded-md flex items-center shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-5 h-5 text-red-500 mr-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-red-800 dark:text-red-300", children: flash.error })
      ] }),
      filteredVehicles.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Car, { className: "mx-auto h-16 w-16 text-gray-300 dark:text-gray-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-medium text-gray-900 dark:text-gray-100", children: "Nenhum Veículo no Catálogo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-sm mx-auto", children: "Seu estoque está vazio. Configure a Sincronização Inteligente via Link XML para puxar todos automaticamente, ou adicione manualmente." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: filteredVehicles.map((v) => {
        const images = v.images && typeof v.images === "string" ? JSON.parse(v.images) : v.images;
        const firstImage = images && images.length > 0 ? images[0] : null;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => {
          setViewingVehicle(v);
          setSelectedImage(0);
        }, className: "cursor-pointer group flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md shadow-sm ${v.status === "available" ? "bg-green-500 text-white" : v.status === "sold" ? "bg-red-500 text-white" : "bg-yellow-500 text-white"}`, children: v.status === "available" ? "Disponível" : v.status === "sold" ? "Vendido" : "Reservado" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
              e.stopPropagation();
              openEditModal(v);
            }, className: "p-1.5 bg-white/90 dark:bg-gray-800/90 hover:bg-indigo-50 dark:hover:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-md backdrop-blur-sm shadow-sm transition-colors relative z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
              e.stopPropagation();
              handleDelete(v.id);
            }, className: "p-1.5 bg-white/90 dark:bg-gray-800/90 hover:bg-red-50 dark:hover:bg-red-900 text-red-600 dark:text-red-400 rounded-md backdrop-blur-sm shadow-sm transition-colors relative z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-48 bg-gray-100 dark:bg-gray-900 w-full flex items-center justify-center relative overflow-hidden", children: firstImage ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: firstImage.startsWith("http") ? firstImage : `/storage/${firstImage}`,
              className: "object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500",
              alt: "carro"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center text-gray-400 dark:text-gray-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-10 h-10 mb-2 opacity-50" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-widest", children: "Sem Imagem" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex-1 flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between items-start mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-bold text-gray-900 dark:text-white leading-tight", children: [
              v.make,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-light", children: v.model })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-indigo-600 dark:text-indigo-400 mb-4", children: v.price ? `R$ ${parseFloat(v.price).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}` : "Sob Consulta" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold text-gray-400 dark:text-gray-500 tracking-wider", children: "Ano" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: v.year })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold text-gray-400 dark:text-gray-500 tracking-wider", children: "KM" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: v.km ? v.km.toLocaleString("pt-BR") : "--" })
              ] })
            ] })
          ] })
        ] }, v.id);
      }) })
    ] }) }),
    isImportModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-800/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-bold text-gray-900 dark:text-white flex items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileBraces, { className: "w-5 h-5 mr-2 text-indigo-600 dark:text-indigo-400" }),
          "Inteligência de Sincronização"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsImportModalOpen(false), className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submitSettings, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-6", children: "Configure o seu painel para importar e atualizar o estoque automaticamente a partir de um link da RevendaMais ou similar." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1", children: "URL do Feed (XML/JSON)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "url",
                value: syncData.xml_feed_url,
                onChange: (e) => setSyncData("xml_feed_url", e.target.value),
                className: "w-full text-sm rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500",
                placeholder: "https://app.revendamais.com.br/..."
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center justify-between bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-gray-900 dark:text-white", children: "Auto-Sync (15 Minutos)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Varredura inteligente no background." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: syncData.auto_sync, onChange: (e) => setSyncData("auto_sync", e.target.checked), className: "sr-only peer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end space-x-3 mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: syncProcessing, className: "px-6 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg disabled:opacity-50 transition-colors shadow-sm", children: syncProcessing ? "Salvando..." : "Salvar Configuração" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "my-6 border-gray-200 dark:border-gray-700" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-center text-gray-500 mb-3", children: [
            "Última sincronização: ",
            (setting == null ? void 0 : setting.last_sync_at) ? new Date(setting.last_sync_at).toLocaleString("pt-BR") : "Nunca realizada"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: forceSync, disabled: forceProcessing, className: "w-full py-3 px-4 flex items-center justify-center text-sm font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-lg hover:bg-indigo-100 disabled:opacity-50 transition-all dark:bg-indigo-900/30 dark:border-indigo-800 dark:text-indigo-400 dark:hover:bg-indigo-900/50", children: forceProcessing ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-pulse", children: "Varrendo Arquivo XML..." }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "Disparar Sincronização Agora" }) })
        ] })
      ] })
    ] }) }),
    viewingVehicle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-800/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-gray-900 dark:text-white flex items-center", children: [
          viewingVehicle.make,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-light ml-1.5", children: viewingVehicle.model })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setViewingVehicle(null), className: "p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-6 md:flex md:space-x-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:w-3/5 space-y-4", children: (() => {
          var _a;
          const vImgs = viewingVehicle.images && typeof viewingVehicle.images === "string" ? JSON.parse(viewingVehicle.images) : viewingVehicle.images || [];
          if (vImgs.length === 0) {
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-64 sm:h-80 bg-gray-100 dark:bg-gray-900 rounded-xl flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-16 h-16 text-gray-300 dark:text-gray-700 mb-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 dark:text-gray-500 font-medium tracking-wide uppercase", children: "Sem fotos" })
            ] });
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-64 sm:h-96 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: ((_a = vImgs[selectedImage]) == null ? void 0 : _a.startsWith("http")) ? vImgs[selectedImage] : `/storage/${vImgs[selectedImage]}`,
                alt: "Foto Principal",
                className: "w-full h-full object-cover"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 sm:grid-cols-5 gap-2", children: vImgs.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                onClick: () => setSelectedImage(i),
                className: `aspect-square rounded-lg overflow-hidden border-2 hover:opacity-80 transition-opacity cursor-pointer ${selectedImage === i ? "border-indigo-500" : "border-gray-200 dark:border-gray-700 opacity-60"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: img.startsWith("http") ? img : `/storage/${img}`,
                    className: "w-full h-full object-cover",
                    alt: `Foto ${i + 1}`
                  }
                )
              },
              i
            )) })
          ] });
        })() }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:w-2/5 mt-8 md:mt-0 flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md shadow-sm mb-4 ${viewingVehicle.status === "available" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" : viewingVehicle.status === "sold" ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"}`, children: viewingVehicle.status === "available" ? "Disponível" : viewingVehicle.status === "sold" ? "Vendido" : "Reservado" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-black text-indigo-600 dark:text-indigo-400 tracking-tight", children: viewingVehicle.price ? `R$ ${parseFloat(viewingVehicle.price).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}` : "Sob Consulta" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col border-b border-gray-200 dark:border-gray-700 pb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400", children: "Ano" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-medium text-gray-900 dark:text-gray-100 mt-0.5", children: viewingVehicle.year })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col border-b border-gray-200 dark:border-gray-700 pb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400", children: "Quilometragem (KM)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-medium text-gray-900 dark:text-gray-100 mt-0.5", children: viewingVehicle.km ? viewingVehicle.km.toLocaleString("pt-BR") : "--" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400", children: "Placa / Referência" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-medium text-gray-900 dark:text-gray-100 mt-0.5 uppercase", children: viewingVehicle.plate || "--" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto pt-6 flex gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => {
                setViewingVehicle(null);
                openEditModal(viewingVehicle);
              },
              className: "flex-1 py-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 dark:hover:bg-indigo-800 font-bold rounded-xl transition-colors flex justify-center items-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-4 h-4 mr-2" }),
                " Editar Ficha"
              ]
            }
          ) })
        ] })
      ] })
    ] }) }),
    isEditModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-800/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-900 dark:text-white flex items-center", children: editingVehicle ? "Editar Ficha do Veículo" : "Cadastrar Novo Veículo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsEditModalOpen(false), className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submitVehicle, className: "max-h-[80vh] overflow-y-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 grid grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1", children: "Make (Marca)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: vData.make, onChange: (e) => setVData("make", e.target.value), required: true, className: "w-full text-sm rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500" }),
            vErrors.make && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs mt-1", children: vErrors.make })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1", children: "Modelo Exato" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: vData.model, onChange: (e) => setVData("model", e.target.value), required: true, className: "w-full text-sm rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1", children: "Ano" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: vData.year, onChange: (e) => setVData("year", e.target.value), required: true, className: "w-full text-sm rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1", children: "Preço de Venda (R$)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", step: "0.01", value: vData.price, onChange: (e) => setVData("price", e.target.value), className: "w-full text-sm rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1", children: "Quilometragem (KM)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: vData.km, onChange: (e) => setVData("km", e.target.value), className: "w-full text-sm rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1", children: "Placa / ID Físico" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: vData.plate, onChange: (e) => setVData("plate", e.target.value), className: "w-full text-sm rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1", children: "Status de Operação" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: vData.status, onChange: (e) => setVData("status", e.target.value), className: "w-full text-sm rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "available", children: "Disponível no Estoque" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "reserved", children: "Reservado (Em negociação)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "sold", children: "Vendido (Concluído)" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1", children: "Upload da Foto de Capa" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "file",
                accept: "image/*",
                multiple: true,
                onChange: (e) => setVData("images", e.target.files),
                className: "w-full text-sm rounded-lg border border-gray-300 p-1.5 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 flex justify-end space-x-3 sticky bottom-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setIsEditModalOpen(false), className: "px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors", children: "Cancelar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: vProcessing, className: "px-6 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg disabled:opacity-50 transition-colors shadow-sm", children: vProcessing ? "Salvando Ficha..." : editingVehicle ? "Aplicar Modificações" : "Cadastrar na Prateleira" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  CatalogIndex as default
};
