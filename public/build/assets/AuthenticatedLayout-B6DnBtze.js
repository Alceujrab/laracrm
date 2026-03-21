import { r as reactExports, j as jsxRuntimeExports, L as Link_default, c as usePage } from "./app-DITW5dun.js";
import { e as Ke } from "./transition-SoJuNQK0.js";
import { S as Search } from "./search-D-mc58C7.js";
import { M as Mail } from "./mail-aCxgJQ6o.js";
import { U as Users } from "./users-Kv6Gcbr3.js";
import { c as createLucideIcon } from "./createLucideIcon-C6NVuwOJ.js";
import { S as Settings } from "./settings-CvJvE2as.js";
import { C as Calendar } from "./calendar-IU5HW2RZ.js";
import { C as ChevronRight } from "./chevron-right-BPfAUUu8.js";
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$6 = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8", key: "7n84p3" }]
];
const AtSign = createLucideIcon("at-sign", __iconNode$6);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
];
const Bell = createLucideIcon("bell", __iconNode$5);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  [
    "path",
    {
      d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
      key: "5owen"
    }
  ],
  ["circle", { cx: "7", cy: "17", r: "2", key: "u2ysq9" }],
  ["path", { d: "M9 17h6", key: "r8uit2" }],
  ["circle", { cx: "17", cy: "17", r: "2", key: "axvx0g" }]
];
const Car = createLucideIcon("car", __iconNode$4);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M5 21v-6", key: "1hz6c0" }],
  ["path", { d: "M12 21V3", key: "1lcnhd" }],
  ["path", { d: "M19 21V9", key: "unv183" }]
];
const ChartNoAxesColumn = createLucideIcon("chart-no-axes-column", __iconNode$3);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$2);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$1);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    { d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344", key: "2acyp4" }
  ],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const SquareCheckBig = createLucideIcon("square-check-big", __iconNode);
const DropDownContext = reactExports.createContext();
const Dropdown = ({ children }) => {
  const [open, setOpen] = reactExports.useState(false);
  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DropDownContext.Provider, { value: { open, setOpen, toggleOpen }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children }) });
};
const Trigger = ({ children }) => {
  const { open, setOpen, toggleOpen } = reactExports.useContext(DropDownContext);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: toggleOpen, children }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-40",
        onClick: () => setOpen(false)
      }
    )
  ] });
};
const Content = ({
  align = "right",
  width = "48",
  contentClasses = "py-1 bg-white dark:bg-gray-700",
  children
}) => {
  const { open, setOpen } = reactExports.useContext(DropDownContext);
  let alignmentClasses = "origin-top";
  if (align === "left") {
    alignmentClasses = "ltr:origin-top-left rtl:origin-top-right start-0";
  } else if (align === "right") {
    alignmentClasses = "ltr:origin-top-right rtl:origin-top-left end-0";
  }
  let widthClasses = "";
  if (width === "48") {
    widthClasses = "w-48";
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Ke,
    {
      show: open,
      enter: "transition ease-out duration-200",
      enterFrom: "opacity-0 scale-95",
      enterTo: "opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "opacity-100 scale-100",
      leaveTo: "opacity-0 scale-95",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`,
          onClick: () => setOpen(false),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `rounded-md ring-1 ring-black ring-opacity-5 ` + contentClasses,
              children
            }
          )
        }
      )
    }
  ) });
};
const DropdownLink = ({ className = "", children, ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link_default,
    {
      ...props,
      className: "block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:bg-gray-800 " + className,
      children
    }
  );
};
Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;
function Topbar({ activeModule = "inbox" }) {
  const { auth, app_settings } = usePage().props;
  const { user } = auth;
  const modules = [
    { id: "inbox", label: "Caixa de Entrada", icon: Mail, route: "inbox.index" },
    { id: "crm", label: "CRM", icon: Users, route: "crm.index" },
    { id: "tasks", label: "Tarefas", icon: SquareCheckBig, route: "tasks.index" },
    { id: "catalog", label: "Catálogo de Veículos", icon: Car, route: "catalog.index" },
    { id: "reports", label: "Relatórios", icon: ChartNoAxesColumn, route: "reports.index" },
    { id: "settings", label: "Configurações", icon: Settings, route: "settings.index" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4 fixed top-0 w-full z-30 transition-colors duration-200", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center flex-1 space-x-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-64 hidden sm:block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 text-gray-400" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            className: "block w-full pl-10 pr-3 py-1.5 border border-gray-300 dark:border-gray-700 rounded-md leading-5 bg-gray-50 dark:bg-gray-800 placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-colors",
            placeholder: "Pesquisar (Ctrl+K)"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex space-x-1", children: modules.map((mod) => {
        const Icon = mod.icon;
        const isActive = activeModule === mod.id;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link_default,
          {
            href: route(mod.route),
            className: `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-400" : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"}`,
            title: mod.label,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 hidden md:block", children: mod.label })
            ]
          },
          mod.id
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "relative p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-900" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-5 w-5" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AtSign, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block border-l border-r border-gray-200 dark:border-gray-700 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors gap-2", children: [
        app_settings.app_logo && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: app_settings.app_logo, alt: "Logo", className: "h-6 object-contain" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: app_settings.app_name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "ml-1 h-4 w-4" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Dropdown, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Dropdown.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "flex items-center space-x-2 focus:outline-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xs ring-2 ring-transparent hover:ring-indigo-300 transition-all", children: user.name.charAt(0) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Dropdown.Content, { align: "right", width: "48", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 border-b border-gray-100 dark:border-gray-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-gray-900 dark:text-white", children: user.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 truncate dark:text-gray-400", children: user.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Dropdown.Link, { href: route("profile.edit"), children: "Minha conta" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Dropdown.Link, { href: "#", children: "Configurações" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Dropdown.Link, { href: "#", children: "Central de ajuda" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Dropdown.Link, { href: "#", children: "Novidades" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Dropdown.Link, { href: route("logout"), method: "post", as: "button", children: "Sair" })
        ] })
      ] })
    ] })
  ] });
}
function Sidebar({ menuItems = [], secondaryAction = null }) {
  const [isCollapsed, setIsCollapsed] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "aside",
    {
      className: `flex flex-col h-[calc(100vh-4rem)] bg-gray-50 dark:bg-gray-800/50 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 ${isCollapsed ? "w-16" : "w-64"}`,
      children: [
        secondaryAction && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-4 ${isCollapsed ? "hidden" : "block"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: secondaryAction.onClick,
            className: "w-full flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-md text-sm font-medium transition-colors shadow-sm",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: secondaryAction.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: secondaryAction.label })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "space-y-1 px-2", children: menuItems.map((item, index) => {
          const ItemIcon = item.icon;
          const isActive = item.active;
          const content = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ItemIcon,
              {
                className: `flex-shrink-0 h-5 w-5 ${isActive ? "text-indigo-600 dark:text-indigo-400" : "text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-300"}`,
                "aria-hidden": "true"
              }
            ),
            !isCollapsed && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-3 flex-1 flex items-center justify-between", children: [
              item.label,
              item.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center justify-center rounded-full px-2 py-0.5 text-xs font-medium ${isActive ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300" : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"}`, children: item.badge })
            ] })
          ] });
          const className = `group flex items-center w-full px-2 py-2 text-sm font-medium rounded-md transition-colors ${isActive ? "bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10" : "text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"}`;
          if (item.onClick) {
            return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: item.onClick, className, children: content }, index);
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Link_default, { href: item.route ? route(item.route) : "#", className, children: content }, index);
        }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-gray-200 dark:border-gray-800 p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setIsCollapsed(!isCollapsed),
            className: "flex w-full items-center justify-center p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 rounded-md dark:hover:bg-gray-800 dark:hover:text-gray-300 transition-colors",
            children: isCollapsed ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-5 w-5" })
          }
        ) })
      ]
    }
  );
}
function AuthenticatedLayout({
  children,
  activeModule = "inbox",
  sidebarMenuItems = [],
  sidebarAction = null
}) {
  const { auth } = usePage().props;
  reactExports.useEffect(() => {
    if (!window.Echo) return;
    const channel = window.Echo.private("inbox");
    const handleNewMessage = (e) => {
      if (e.message && e.message.sender_type === "contact") {
        try {
          const ctx = new (window.AudioContext || window.webkitAudioContext)();
          const os = ctx.createOscillator();
          const gain = ctx.createGain();
          os.connect(gain);
          gain.connect(ctx.destination);
          os.type = "sine";
          os.frequency.setValueAtTime(880, ctx.currentTime);
          os.frequency.setValueAtTime(1046.5, ctx.currentTime + 0.15);
          gain.gain.setValueAtTime(0.2, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
          os.start();
          os.stop(ctx.currentTime + 0.5);
        } catch (err) {
          console.log("Audio API bloqueada ou indisponível", err);
        }
      }
    };
    channel.listen("NewMessageReceived", handleNewMessage);
    return () => {
      channel.stopListening("NewMessageReceived", handleNewMessage);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-100 transition-colors duration-200", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Topbar, { activeModule }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 pt-16 h-screen overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sidebar, { menuItems: sidebarMenuItems, secondaryAction: sidebarAction }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 overflow-y-auto w-full h-full bg-white dark:bg-gray-950", children })
    ] })
  ] });
}
export {
  AuthenticatedLayout as A,
  Car as C,
  SquareCheckBig as S,
  AtSign as a,
  ChevronDown as b,
  ChartNoAxesColumn as c
};
