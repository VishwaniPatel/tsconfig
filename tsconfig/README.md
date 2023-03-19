# tsconfig. json

# compileOnSave
Enable compiler on save for this project (true/false)

# compilerOption
Instructs the typescript compiler how to compile .ts file

# baseUrl
Specify the base directory to resolve non-relative module names
./ means you can define a root folder where you can do absolute file resoultion

# outDir
Specify an output folder for all emitted files

# forceConsistentCasingInFileNames
Ensure that casing is correct in imports

# strict
Enable all strcit type checking options

# noImplicitOverride
Ensuring overrideing members in derived classes are marked with an override modifiers

# noPropertyAccessFromIndexSignature
It is used to control whether or not TypeScript should raise an error when a property access is used with an index signature that has a string or number type.

# noImplicitReturns
TypeScript will check all code paths in a function to ensure they return a value.

# noFallthroughCasesInSwitch
Report errors for fallthrough cases in switch statements. Ensures that any non-empty case inside a switch statement includes either break or return. This means you won’t accidentally ship a case fallthrough bug.

# sourceMap
It used to control whether or not TypeScript should generate source maps for the compiled JavaScript files.

# declaration
It is used to control whether or not TypeScript should generate declaration files (.d.ts files) for your TypeScript code.

# downlevelIteration
TypeScript’s term for transpiling to an older version of JavaScript.
ECMAScript 6 added several new iteration primitives: the for / of loop (for (el of arr)), Array spread ([a, ...b]), argument spread (fn(...args)), and Symbol.iterator. downlevelIteration allows for these iteration primitives to be used more accurately in ES5 environments if a Symbol.iterator implementation is present.
 This option enables experimental support for the ES7 decorators proposal, which allows you to add metadata to classes, methods, properties, and other declarations in your TypeScript code.

# experimentalDecorators

# moduleResolution
 This option specifies how the compiler resolves module imports in your TypeScript code.

There are two options for moduleResolution:
1. classic
2. node

# importHelpers
It is used to enable importing a set of runtime helper functions rather than inlining them into the output code.

# target
You might choose to set a lower target if your code is deployed to older environments, or a higher target if your code is guaranteed to run in newer environments.

# module
It is used to specify the module code generation mode. It determines the format of the JavaScript module code that TypeScript will generate when we transpile our TypeScript code into JavaScript.

# lib
It  is used to specify the built-in APIs that TypeScript should make available to our code. It allows us to specify which APIs we want to use in our TypeScript code, and which we want to exclude.

# angularCompilerOptions

# enableI18nLegacyMessageIdFormat
It  is used in Angular projects and is used to enable backward compatibility with the previous version's message ID format. When enabled, it allows the use of the legacy message ID format which starts with an underscore character followed by the message's content.

# strictInjectionParameters
It is used to enforce stricter type checking for dependency injection in Angular applications. When enabled, it requires that all injection parameters have a corresponding provider or have a default value.

# strictInputAccessModifiers
It is used to enforce stricter access modifiers for input properties in Angular components. When enabled, it requires that input properties have an explicit access modifier (public, protected, or private) specified in their declaration.

# strictTemplates
It is used to enable stricter template type checking in Angular applications. When enabled, it requires that templates have correct syntax and types, and it disallows certain types of errors that could cause issues at runtime.
