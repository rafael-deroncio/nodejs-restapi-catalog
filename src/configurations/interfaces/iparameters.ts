interface IParameters {
    get(key: string): string | undefined;
    environment(): NodeJS.ProcessEnv;
}

export default IParameters;
