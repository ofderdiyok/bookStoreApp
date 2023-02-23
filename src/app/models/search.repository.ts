export class SearchRepository{
    public searching: string;

    constructor(){
        this.searching = "";
    }

    getSearching():string{
        return this.searching;
    }

    setSearching(input: string){
        this.searching = input;
    }
}