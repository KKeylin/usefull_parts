declare type nil = null | undefined | never;
declare type AnyFunction = (...args: any[]) => any;
declare type AnyObject = { [Key in string]: any };
