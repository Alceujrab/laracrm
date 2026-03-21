import { j as jsxRuntimeExports, H as Head_default } from "./app-BHvocwkH.js";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-wPlT3sTx.js";
import DeleteUserForm from "./DeleteUserForm-xh_qBV0A.js";
import UpdatePasswordForm from "./UpdatePasswordForm-B3UauJTg.js";
import UpdateProfileInformation from "./UpdateProfileInformationForm-gNR6YLb7.js";
import "./transition-CaBnbbji.js";
import "./search-BUcI92C1.js";
import "./createLucideIcon-ClSosjIo.js";
import "./mail-BEMfLCCN.js";
import "./users-YviXzON0.js";
import "./settings-aENAsyhd.js";
import "./calendar-_9r-vvfA.js";
import "./chevron-right-DN8TdXWN.js";
import "./TextInput-CrxivzIC.js";
import "./InputLabel-DxHtwjV3.js";
import "./PrimaryButton-yaQVlm3w.js";
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
