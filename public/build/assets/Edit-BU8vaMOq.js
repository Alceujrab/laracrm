import { j as jsxRuntimeExports, H as Head_default } from "./app-CpdAeTN9.js";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-CNDp9twW.js";
import DeleteUserForm from "./DeleteUserForm-B2meOicI.js";
import UpdatePasswordForm from "./UpdatePasswordForm-BOvZGrle.js";
import UpdateProfileInformation from "./UpdateProfileInformationForm-D1q3SUjw.js";
import "./transition-DswrlKBA.js";
import "./search-SYQrMeu3.js";
import "./createLucideIcon-UsPif6H6.js";
import "./mail-BMiUGrM6.js";
import "./users-COA4xk2Y.js";
import "./settings-B_ts1Ehj.js";
import "./calendar-CjsWjhUG.js";
import "./chevron-right-B3Y8VvNf.js";
import "./TextInput-DeKew5QF.js";
import "./InputLabel-ND-TV6FC.js";
import "./PrimaryButton-ufeGuCXJ.js";
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
