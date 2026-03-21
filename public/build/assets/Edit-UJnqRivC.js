import { j as jsxRuntimeExports, H as Head_default } from "./app-hrHU2Rta.js";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-DNHfWTVk.js";
import DeleteUserForm from "./DeleteUserForm-ZPGafRsz.js";
import UpdatePasswordForm from "./UpdatePasswordForm-DtSOkV5Y.js";
import UpdateProfileInformation from "./UpdateProfileInformationForm-BQLn_S8O.js";
import "./transition-Txhu5uZW.js";
import "./search-C_4m6HXm.js";
import "./createLucideIcon-Cs3ft1Gr.js";
import "./mail-CZ3lwBn3.js";
import "./users-yMgWY2wd.js";
import "./settings-Ubvud4p3.js";
import "./calendar-Re6Vc4Ka.js";
import "./chevron-right-DgBPBSsd.js";
import "./TextInput-CBPJ9e0L.js";
import "./InputLabel-BA8qHYXh.js";
import "./PrimaryButton-B-d712vo.js";
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
