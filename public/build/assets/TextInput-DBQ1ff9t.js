import { j as jsxRuntimeExports, r as reactExports } from "./app-Bog6UFGg.js";
function InputError({ message, className = "", ...props }) {
  return message ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    "p",
    {
      ...props,
      className: "text-sm text-red-600 dark:text-red-400 " + className,
      children: message
    }
  ) : null;
}
const TextInput = reactExports.forwardRef(function TextInput2({ type = "text", className = "", isFocused = false, ...props }, ref) {
  const localRef = reactExports.useRef(null);
  reactExports.useImperativeHandle(ref, () => ({
    focus: () => {
      var _a;
      return (_a = localRef.current) == null ? void 0 : _a.focus();
    }
  }));
  reactExports.useEffect(() => {
    var _a;
    if (isFocused) {
      (_a = localRef.current) == null ? void 0 : _a.focus();
    }
  }, [isFocused]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      ...props,
      type,
      className: "rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 " + className,
      ref: localRef
    }
  );
});
export {
  InputError as I,
  TextInput as T
};
