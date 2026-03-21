import { j as jsxRuntimeExports, H as Head_default } from "./app-3e9XK7Ij.js";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-hmUmJcX6.js";
import DeleteUserForm from "./DeleteUserForm-DdsH_vPt.js";
import UpdatePasswordForm from "./UpdatePasswordForm-CJ0xE5cf.js";
import UpdateProfileInformation from "./UpdateProfileInformationForm-Dv5221uQ.js";
import "./transition-BhKRD75I.js";
import "./search-HfAQsgG2.js";
import "./createLucideIcon-B6l4ffqL.js";
import "./mail-CzlcNYbI.js";
import "./users-_hSpNbHy.js";
import "./settings-D-BYWaUX.js";
import "./calendar-DGr312oN.js";
import "./chevron-right-BkmCI_qK.js";
import "./TextInput-NLp4pFdO.js";
import "./InputLabel-B24MWDgx.js";
import "./PrimaryButton-DPX9lxa2.js";
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
