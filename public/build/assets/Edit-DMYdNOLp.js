import { j as jsxRuntimeExports, H as Head_default } from "./app-Bog6UFGg.js";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-D5ArjXwT.js";
import DeleteUserForm from "./DeleteUserForm-thPDLcJu.js";
import UpdatePasswordForm from "./UpdatePasswordForm-DCVmOcCR.js";
import UpdateProfileInformation from "./UpdateProfileInformationForm-81HYRQAl.js";
import "./transition-Cf76lwyn.js";
import "./search-C019foUc.js";
import "./createLucideIcon-BtfvjG5O.js";
import "./mail-DVpZ3ipl.js";
import "./users-BQdyuWS6.js";
import "./settings-6QJv9DpG.js";
import "./calendar-Q2nOf-8T.js";
import "./chevron-right-BTtjm_y1.js";
import "./TextInput-DBQ1ff9t.js";
import "./InputLabel-DSehOE9D.js";
import "./PrimaryButton-CWdXFzaP.js";
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
