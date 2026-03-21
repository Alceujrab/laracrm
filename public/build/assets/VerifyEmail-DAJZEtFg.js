import { u as useForm, j as jsxRuntimeExports, H as Head_default, L as Link_default } from "./app-hrHU2Rta.js";
import { P as PrimaryButton } from "./PrimaryButton-B-d712vo.js";
import { G as GuestLayout } from "./GuestLayout-BepdTQd5.js";
function VerifyEmail({ status }) {
  const { post, processing } = useForm({});
  const submit = (e) => {
    e.preventDefault();
    post(route("verification.send"));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(GuestLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Head_default, { title: "Email Verification" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 text-sm text-gray-600 dark:text-gray-400", children: "Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another." }),
    status === "verification-link-sent" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 text-sm font-medium text-green-600 dark:text-green-400", children: "A new verification link has been sent to the email address you provided during registration." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { disabled: processing, children: "Resend Verification Email" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link_default,
        {
          href: route("logout"),
          method: "post",
          as: "button",
          className: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800",
          children: "Log Out"
        }
      )
    ] }) })
  ] });
}
export {
  VerifyEmail as default
};
