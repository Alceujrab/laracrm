import { j as jsxRuntimeExports } from "./app-DAqhXEHp.js";
function InputLabel({
  value,
  className = "",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "label",
    {
      ...props,
      className: `block text-sm font-medium text-gray-700 dark:text-gray-300 ` + className,
      children: value ? value : children
    }
  );
}
export {
  InputLabel as I
};
