import { j as jsxRuntimeExports, H as Head_default } from "./app-DAqhXEHp.js";
import { A as AuthenticatedLayout, C as Car } from "./AuthenticatedLayout-CLxKr89o.js";
import { F as FileText } from "./file-text-DJw65QJm.js";
import { C as Calendar } from "./calendar-BZ01TiJO.js";
import { D as Download } from "./download-B28p2v3v.js";
import { C as Clock } from "./clock-o5zKPbFU.js";
import { C as CircleX } from "./circle-x-BAsrvLJM.js";
import { C as CircleCheckBig } from "./circle-check-big-CdO7ZCjd.js";
import "./transition-0kAmd3-I.js";
import "./search-CSWeEelg.js";
import "./createLucideIcon-ywatB_CX.js";
import "./mail-BKmufb-O.js";
import "./users-BD9R8uO-.js";
import "./settings-CApIqDzJ.js";
import "./chevron-right-CCd13iFW.js";
function Index({ proposals }) {
  const getStatusIcon = (status) => {
    switch (status) {
      case "accepted":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 text-green-500" });
      case "rejected":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-4 h-4 text-red-500" });
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-yellow-500" });
    }
  };
  const getStatusText = (status) => {
    switch (status) {
      case "accepted":
        return "Aceita";
      case "rejected":
        return "Recusada";
      case "sent":
        return "Enviada";
      default:
        return "Pendente";
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    AuthenticatedLayout,
    {
      header: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Propostas / Orçamentos" }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Head_default, { title: "Propostas" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white overflow-hidden shadow-sm sm:rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 text-gray-900", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between items-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium", children: "Histórico de Propostas" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Proposta" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Cliente" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Veículo" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Valor" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Ações" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "bg-white divide-y divide-gray-200", children: [
              proposals.map((proposal) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-5 h-5 text-indigo-500 mr-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-gray-900", children: proposal.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-gray-500 flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3" }),
                      new Date(proposal.created_at).toLocaleDateString()
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-6 py-4 whitespace-nowrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-900", children: proposal.contact.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-500", children: proposal.contact.phone })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: proposal.vehicle ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Car, { className: "w-4 h-4 text-gray-400 mr-1" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-900", children: [
                    proposal.vehicle.make,
                    " ",
                    proposal.vehicle.model
                  ] })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400", children: "Nenhum veículo" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900", children: [
                  "R$ ",
                  parseFloat(proposal.total_value).toLocaleString("pt-BR", { minimumFractionDigits: 2 })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-sm", children: [
                  getStatusIcon(proposal.status),
                  getStatusText(proposal.status)
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: `/proposals/${proposal.id}/download`,
                    target: "_blank",
                    className: "text-indigo-600 hover:text-indigo-900 flex items-center gap-1 font-medium",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
                      "Download"
                    ]
                  }
                ) })
              ] }, proposal.id)),
              proposals.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: "6", className: "px-6 py-12 text-center text-gray-500", children: "Nenhuma proposta gerada ainda. Vá ao Inbox para criar sua primeira proposta." }) })
            ] })
          ] }) })
        ] }) }) }) })
      ]
    }
  );
}
export {
  Index as default
};
