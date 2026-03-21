import { j as jsxRuntimeExports, H as Head_default } from "./app-DITW5dun.js";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-B6DnBtze.js";
import DeleteUserForm from "./DeleteUserForm-DDmBwmgy.js";
import UpdatePasswordForm from "./UpdatePasswordForm-Bjo3s6uC.js";
import UpdateProfileInformation from "./UpdateProfileInformationForm-RoIPjr-L.js";
import "./transition-SoJuNQK0.js";
import "./search-D-mc58C7.js";
import "./createLucideIcon-C6NVuwOJ.js";
import "./mail-aCxgJQ6o.js";
import "./users-Kv6Gcbr3.js";
import "./settings-CvJvE2as.js";
import "./calendar-IU5HW2RZ.js";
import "./chevron-right-BPfAUUu8.js";
import "./TextInput-CK4xxAOF.js";
import "./InputLabel-C6flOg_z.js";
import "./PrimaryButton-X3WZgcgl.js";
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
