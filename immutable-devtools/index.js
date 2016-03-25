import createFormatters from "./create-formatters"

export default function install(Immutable) {
  if (typeof window === "undefined") {
    throw new Error("Can only install immutable-devtools in a browser environment.");
  }

  // Don't install more than once.
  if (window.__ImmutableJSDevToolsFormattersInstalled === true) {
    return;
  }

  window.devtoolsFormatters = window.devtoolsFormatters || [];
  window.__ImmutableJSDevToolsFormattersInstalled = true;

  const {
    RecordFormatter,
    OrderedMapFormatter,
    OrderedSetFormatter,
    ListFormatter,
    MapFormatter,
    SetFormatter,
    StackFormatter
  } = createFormatters(Immutable);

  window.devtoolsFormatters.push(
    RecordFormatter,
    OrderedMapFormatter,
    OrderedSetFormatter,
    ListFormatter,
    MapFormatter,
    SetFormatter,
    StackFormatter
  );

  installed = true;
}
