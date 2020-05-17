export const navigateToExternalUrl = (url: string, shouldOpenNewTab: boolean = true) =>
    shouldOpenNewTab ? () => window.open(url, "_blank") : () => window.location.href = url;