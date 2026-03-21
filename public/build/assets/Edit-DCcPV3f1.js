import { j as jsxRuntimeExports, H as Head_default } from "./app-y-n9EzWq.js";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-BbRtMTUL.js";
import DeleteUserForm from "./DeleteUserForm-DWKtsVtv.js";
import UpdatePasswordForm from "./UpdatePasswordForm-ipa_Z8Qu.js";
import UpdateProfileInformation from "./UpdateProfileInformationForm-Dqc6xRSm.js";
import "./transition-DODoSbji.js";
import "./search-Cgyv8K65.js";
import "./createLucideIcon-uxZSl1sR.js";
import "./mail-BHgWiUW-.js";
import "./users-cXdFXwWm.js";
import "./settings-D5_0T45O.js";
import "./calendar-CRqyN6uS.js";
import "./chevron-right-D-W6fJrd.js";
import "./TextInput-CYSKYPdR.js";
import "./InputLabel-klpYVs24.js";
import "./PrimaryButton-DGwgCVOm.js";
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
