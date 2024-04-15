import { config } from "dotenv";
import IParameters from "./interfaces/iparameters";

class Parameters implements IParameters {
    private static _instance: IParameters;
    private _environment: NodeJS.ProcessEnv;

    public static instance = () => !this._instance ? this._instance = new Parameters() : this._instance

    private constructor() {
        config();
        this._environment = process.env;
        if (Object.keys(this._environment).length === 0)
            console.warn('process.env is empty!');
    }

    public environment = (): NodeJS.ProcessEnv => this._environment;
    public get = (key: string): string | undefined => this._environment[key];
}

export default Parameters;