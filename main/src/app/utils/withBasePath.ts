const normalizeBasePath = (value?: string) => {
  if (!value || value === "/") {
    return "";
  }

  const trimmed = value.trim().replace(/^\/+|\/+$/g, "");
  return trimmed ? `/${trimmed}` : "";
};

const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH);

export const withBasePath = (path: string) => {
  if (
    !path ||
    /^(?:[a-z]+:)?\/\//i.test(path) ||
    path.startsWith("data:") ||
    path.startsWith("blob:") ||
    !path.startsWith("/")
  ) {
    return path;
  }

  if (!basePath || path === basePath || path.startsWith(`${basePath}/`)) {
    return path;
  }

  return `${basePath}${path}`;
};
