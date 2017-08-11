export class Customers {
    constructor(
        public fname: string,
        public mname: string,
        public lname: string,
        public dob: string,
        public email?: string,
        public mobile?: string,
        public tfn?: string,
        public DLidState?: string,
        public LNum?: string,
        public color?: string,
        public idnum?: string,
        public idstate?: string,
        public refnum?: string,
        public validTo?: string,
        public exemption?: string,
        public housenum?: string,
        public streetnum?: string,
        public streetname?: string,
        public streettype?: string,
        public suburb?: string,
        public state?: string,
        public postcode?: string,
        public address?: string,
        public phousenum?: string,
        public pstreetnum?: string,
        public pstreetname?: string,
        public pstreettype?: string,
        public psuburb?: string,
        public pstate?: string,
        public ppostcode?: string,
        public paddress?: string,
        public app_id?:String,
        public application_id?:String,
          public application_status?:String,     
         public product_code?:String,
         public product_code_name?:String,
         public loanreason?:any,
         public campaign_id?:string
         
         
    ){
        this.fname=fname;
        this.mname=mname;
        this.lname=lname;
        this.dob=dob;
        this.email=email;
        this.mobile=mobile;
        this.tfn=tfn;
        this.DLidState=DLidState;
        this.LNum=LNum;
        this.color=color;
        this.idnum=idnum;
        this.idstate=idstate;
        this.refnum=refnum;
        this.validTo=validTo;
        this.exemption=exemption;
        this.housenum=housenum
        this.streetnum=streetnum
        this.streetname=streetname
        this.streettype=streettype
        this.suburb=suburb
        this.state=state
        this.postcode=postcode
        this.address=address
        this.phousenum=phousenum
        this.pstreetnum=pstreetnum
        this.pstreetname=pstreetname
        this.pstreettype=pstreettype
        this.psuburb=psuburb
        this.pstate=pstate
        this.ppostcode=ppostcode
        this.paddress=paddress
        this.app_id=app_id
        this.application_id=application_id
        this.application_status=application_status
        this.product_code=product_code
        this.product_code_name=product_code_name
        this.loanreason = loanreason
        this.campaign_id = campaign_id
    }
}