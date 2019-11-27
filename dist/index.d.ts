declare type Opts = {
    defaultLocale: string;
    format?: string;
    flat?: boolean;
    fillLocalesWithDefaultMessage?: boolean;
    [key: string]: unknown;
};
export declare const extractReactIntl: (locales: string[], pattern: string, { defaultLocale, withDescriptions, cwd, ...pluginOptions }?: {
    [key: string]: unknown;
    defaultLocale?: string | undefined;
    cwd?: string | undefined;
    withDescriptions?: boolean | undefined;
    moduleSourceName?: unknown;
    enforceDefaultMessage?: boolean | undefined;
    enforceDescriptions?: boolean | undefined;
    extractSourceLocation?: boolean | undefined;
    messagesDir?: string | undefined;
    overrideIdFn?: unknown;
    removeDefaultMessage?: unknown;
    extractFromFormatMessageCall?: unknown;
    additionalComponentNames?: unknown;
}, fillLocalesWithDefaultMessage?: boolean) => Promise<Record<string, Record<string, {}>>>;
declare const extractMessage: (locales: string[], pattern: string, buildDir: string, { format, flat, defaultLocale, fillLocalesWithDefaultMessage, ...opts }?: Opts) => Promise<any[]>;
export default extractMessage;
