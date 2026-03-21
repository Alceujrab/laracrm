import { j as jsxRuntimeExports, H as Head_default } from "./app-DAqhXEHp.js";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-CLxKr89o.js";
import DeleteUserForm from "./DeleteUserForm-CqIHDA34.js";
import UpdatePasswordForm from "./UpdatePasswordForm-CFt3mEi2.js";
import UpdateProfileInformation from "./UpdateProfileInformationForm-Dq1K_rpX.js";
import "./transition-0kAmd3-I.js";
import "./search-CSWeEelg.js";
import "./createLucideIcon-ywatB_CX.js";
import "./mail-BKmufb-O.js";
import "./users-BD9R8uO-.js";
import "./settings-CApIqDzJ.js";
import "./calendar-BZ01TiJO.js";
import "./chevron-right-CCd13iFW.js";
import "./TextInput-D-nSMD1K.js";
import "./InputLabel-COQaDHwM.js";
import "./PrimaryButton-BD1h6BNl.js";
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
