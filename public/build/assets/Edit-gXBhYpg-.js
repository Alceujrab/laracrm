import { j as jsxRuntimeExports, H as Head_default } from "./app-1-diUusC.js";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-DUauARBp.js";
import DeleteUserForm from "./DeleteUserForm-BefQu7c9.js";
import UpdatePasswordForm from "./UpdatePasswordForm-JV9875L6.js";
import UpdateProfileInformation from "./UpdateProfileInformationForm-DIFkeNwX.js";
import "./transition-C1Y34t7P.js";
import "./search-D1zl0ZB3.js";
import "./createLucideIcon-CucIFwh5.js";
import "./mail-kvw2HtkU.js";
import "./users-D-nzpfn6.js";
import "./settings-2J-TzRoq.js";
import "./calendar-Bfov22PT.js";
import "./chevron-right-LWBASXz6.js";
import "./TextInput-dIO6-9h-.js";
import "./InputLabel-DKw87TSO.js";
import "./PrimaryButton-D4mjmLwS.js";
function Edit({ mustVerifyEmail, status }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    AuthenticatedLayout,
    {
      header: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200", children: "Profile" }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Head_default, { title: "Profile" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            UpdateProfileInformation,
            {
              mustVerifyEmail,
              status,
              className: "max-w-xl"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UpdatePasswordForm, { className: "max-w-xl" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteUserForm, { className: "max-w-xl" }) })
        ] }) })
      ]
    }
  );
}
export {
  Edit as default
};
