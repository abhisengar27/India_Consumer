export class ConfigDetails {
    constructor(
		public office365LoginEnabled?:string,
    public adminUrl?:string,
    public clientUrl?:string
    ){
		this.office365LoginEnabled=office365LoginEnabled;
    this.clientUrl=clientUrl;
    this.adminUrl=adminUrl;
    }
}