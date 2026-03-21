import { j as jsxRuntimeExports, H as Head_default } from "./app-D5XQWmF0.js";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-BE4-ngH3.js";
import DeleteUserForm from "./DeleteUserForm-Bwb-FdfF.js";
import UpdatePasswordForm from "./UpdatePasswordForm-f1FBxIWT.js";
import UpdateProfileInformation from "./UpdateProfileInformationForm-DLftKguV.js";
import "./transition-B-s2bp7B.js";
import "./search-C8JRIK7s.js";
import "./createLucideIcon-C7XOQWLe.js";
import "./mail-DkceVxq1.js";
import "./users-CLBoGBX-.js";
import "./settings-DfxriKmP.js";
import "./calendar-D9yTYZNR.js";
import "./chevron-right-DdVteP0R.js";
import "./TextInput-C68HYMeR.js";
import "./InputLabel-R7DI9kwU.js";
import "./PrimaryButton-CSbKB3OR.js";
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
