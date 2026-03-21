import { r as reactExports, u as useForm, j as jsxRuntimeExports } from "./app-3e9XK7Ij.js";
import { T as TextInput, I as InputError } from "./TextInput-NLp4pFdO.js";
import { I as InputLabel } from "./InputLabel-B24MWDgx.js";
import { P as PrimaryButton } from "./PrimaryButton-DPX9lxa2.js";
import { e as Ke } from "./transition-BhKRD75I.js";
function UpdatePasswordForm({ className = "" }) {
  const passwordInput = reactExports.useRef();
  const currentPasswordInput = reactExports.useRef();
  const {
    data,
    setData,
    errors,
    put,
    reset,
    processing,
    recentlySuccessful
  } = useForm({
    current_password: "",
    password: "",
    password_confirmation: ""
  });
  const updatePassword = (e) => {
    e.preventDefault();
    put(route("password.update"), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: (errors2) => {
        if (errors2.password) {
          reset("password", "password_confirmation");
          passwordInput.current.focus();
        }
        if (errors2.current_password) {
          reset("current_password");
          currentPasswordInput.current.focus();
        }
      }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: "Update Password" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400", children: "Ensure your account is using a long, random password to stay secure." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: updatePassword, className: "mt-6 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          InputLabel,
          {
            htmlFor: "current_password",
            value: "Current Password"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextInput,
          {
            id: "current_password",
            ref: currentPasswordInput,
            value: data.current_password,
            onChange: (e) => setData("current_password", e.target.value),
            type: "password",
            className: "mt-1 block w-full",
            autoComplete: "current-password"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          InputError,
          {
            message: errors.current_password,
            className: "mt-2"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { htmlFor: "password", value: "New Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextInput,
          {
            id: "password",
            ref: passwordInput,
            value: data.password,
            onChange: (e) => setData("password", e.target.value),
            type: "password",
            className: "mt-1 block w-full",
            autoComplete: "new-password"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          InputLabel,
          {
            htmlFor: "password_confirmation",
            value: "Confirm Password"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextInput,
          {
            id: "password_confirmation",
            value: data.password_confirmation,
            onChange: (e) => setData("password_confirmation", e.target.value),
            type: "password",
            className: "mt-1 block w-full",
            autoComplete: "new-password"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          InputError,
          {
            message: errors.password_confirmation,
            className: "mt-2"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { disabled: processing, children: "Save" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ke,
          {
            show: recentlySuccessful,
            enter: "transition ease-in-out",
            enterFrom: "opacity-0",
            leave: "transition ease-in-out",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Saved." })
          }
        )
      ] })
    ] })
  ] });
}
export {
  UpdatePasswordForm as default
};
