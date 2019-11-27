declare type Options = {
    defaultLocale?: string;
    cwd?: string;
    withDescriptions?: boolean;
    moduleSourceName?: unknown;
    enforceDefaultMessage?: boolean;
    enforceDescriptions?: boolean;
    extractSourceLocation?: boolean;
    messagesDir?: string;
    overrideIdFn?: unknown;
    removeDefaultMessage?: unknown;
    extractFromFormatMessageCall?: unknown;
    additionalComponentNames?: unknown;
    [key: string]: unknown;
};
declare const _default: (locales: string[], pattern: string, { defaultLocale, withDescriptions, cwd, ...pluginOptions }?: Options, fillLocalesWithDefaultMessage?: boolean) => Promise<Record<string, Record<string, {}>>>;
export default _default;
