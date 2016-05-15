import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class githubService {
    private _base_url = 'https://api.github.com/';

    constructor(private _http: Http){
    }

    getReadme(owner, repo){
        return this._http.get(this._base_url + 'repos/' + owner + '/' + repo + '/readme')
            .map(data => data.json())
    }
}