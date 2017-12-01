declare module "rxjs-fetch" {
    import * as Rx from "rxjs";

    function fetch(url: string, requestInit: RequestInit): Rx.Observable<Response>;

    export = fetch;
}
