const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export function withBase(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (!basePath || normalizedPath === basePath || normalizedPath.startsWith(`${basePath}/`)) {
    return normalizedPath;
  }

  return `${basePath}${normalizedPath}`;
}
