function Embed(){};
Embed.prototype.setTitle = function(titleName){
    this.valueOf.title = titleName;
    return this;
}
Embed.prototype.setDescription = function(des){
    this.valueOf.description = des
    return this;
}
Embed.prototype.setThumbnail = function(url){
    this.valueOf.image = [url];
    return this;
}
Embed.prototype.setThumbnails = function(urls){
    this.valueOf.image = urls;
    return this;
}
Embed.prototype.setField = function(name,value,url){
    this.valueOf.fields = [{name: name, value: value, url: url}];
    return this;
}
Embed.prototype.setFields = function (fields) {
    this.valueOf.fields = fields;
    return this;
}
Embed.prototype.setButton = function (btn, url) {
    this.valueOf.btn  = [{
        name: btn,
        url: url
    }];
    return this;
}
Embed.prototype.setButtons = function (btns) {
    this.valueOf.btn = btns;
    return this;
}
Embed.prototype.setHeader = function (headerName) {
    this.valueOf.header = headerName;
    return this;    
}
Embed.prototype.setUp = function (templateID) {
    if(templateID == "69049"){ //List
        let result = {
            "Title" : this.valueOf.title!=null?this.valueOf.title:"",
            "Name1" : this.valueOf.fields!=null?this.valueOf.fields[0]!=null?this.valueOf.fields[0].name:"":"",
            "Name2" : this.valueOf.fields!=null?this.valueOf.fields[1]!=null?this.valueOf.fields[1].name:"":"",
            "Name3" : this.valueOf.fields!=null?this.valueOf.fields[2]!=null?this.valueOf.fields[2].name:"":"",
            "Name4" : this.valueOf.fields!=null?this.valueOf.fields[3]!=null?this.valueOf.fields[3].name:"":"",
            "Name5" : this.valueOf.fields!=null?this.valueOf.fields[4]!=null?this.valueOf.fields[4].name:"":"",
            "Value1" : this.valueOf.fields!=null?this.valueOf.fields[0]!=null?this.valueOf.fields[0].value:"":"",
            "Value2" : this.valueOf.fields!=null?this.valueOf.fields[1]!=null?this.valueOf.fields[1].value:"":"",
            "Value3" : this.valueOf.fields!=null?this.valueOf.fields[2]!=null?this.valueOf.fields[2].value:"":"",
            "Value4" : this.valueOf.fields!=null?this.valueOf.fields[3]!=null?this.valueOf.fields[3].value:"":"",
            "Value5" : this.valueOf.fields!=null?this.valueOf.fields[4]!=null?this.valueOf.fields[4].value:"":"",
            "url1" : this.valueOf.fields!=null?this.valueOf.fields[0]!=null?this.valueOf.fields[0].url:"":"",
            "url2" : this.valueOf.fields!=null?this.valueOf.fields[1]!=null?this.valueOf.fields[1].url:"":"",
            "url3" : this.valueOf.fields!=null?this.valueOf.fields[2]!=null?this.valueOf.fields[2].url:"":"",
            "url4" : this.valueOf.fields!=null?this.valueOf.fields[3]!=null?this.valueOf.fields[3].url:"":"",
            "url5" : this.valueOf.fields!=null?this.valueOf.fields[4]!=null?this.valueOf.fields[4].url:"":"",
            "THU1" : this.valueOf.image!=null?this.valueOf.image[0]:"",
            "THU2" : this.valueOf.image!=null?this.valueOf.image[1]:"",
            "THU3" : this.valueOf.image!=null?this.valueOf.image[2]:"",
            "THU4" : this.valueOf.image!=null?this.valueOf.image[3]:"",
            "THU5" : this.valueOf.image!=null?this.valueOf.image[4]:"",
            "Button1" : this.valueOf.btn!=null?this.valueOf.btn[0]!=null?this.valueOf.btn[0].name:"":"",
            "btn1_url" : this.valueOf.btn!=null?this.valueOf.btn[0]!=null?this.valueOf.btn[0].url:"":"",
            "Button2" : this.valueOf.btn!=null?this.valueOf.btn[1]!=null?this.valueOf.btn[1].name:"":"",
            "btn2_url" : this.valueOf.btn!=null?this.valueOf.btn[1]!=null?this.valueOf.btn[1].url:"":"",
        };
        this.valueOf.header = "";
        this.valueOf.description = "";
        this.valueOf.title = "";
        this.valueOf.btn = "";
        this.valueOf.image = "";
        this.valueOf.fields = "";
        let format = ("- # "+result.Title+" # -"+"\u200b".repeat(1000))+(result.Name1!=""&&result.Value1!=""?("\n\n\n--------------------\n\n"+result.Name1+"    -    "+result.Value1):"")+(result.Name2!=""&&result.Value2!=""?("\n\n--------------------\n\n"+result.Name2+"    -    "+result.Value2):"")+(result.Name3!=""&&result.Value3!=""?("\n\n--------------------\n\n"+result.Name3+"    -    "+result.Value3):"")+(result.Name4!=""&&result.Value4!=""?("\n\n--------------------\n\n"+result.Name4+"    -    "+result.Value4):"")+(result.Name5!=""&&result.Value5!=""?("\n\n--------------------\n\n"+result.Name5+"    -    "+result.Value5):"");
        return format;
    }else{ //Feed
        let result = {
            "THU1" : this.valueOf.image!=null?this.valueOf.image[0]!=null?this.valueOf.image[0]:"":"",
            "THU2" : this.valueOf.image!=null?this.valueOf.image[1]!=null?this.valueOf.image[1]:"":"",
            "THU3" : this.valueOf.image!=null?this.valueOf.image[2]!=null?this.valueOf.image[2]:"":"",
            "Header" : this.valueOf.header!=null?""+this.valueOf.header:"",
            "btn1" : this.valueOf.btn!=null?this.valueOf.btn[0]!=null?this.valueOf.btn[0].name:"":"",
            "btn2" : this.valueOf.btn!=null?this.valueOf.btn[1]!=null?this.valueOf.btn[1].name:"":"",
            "Description" : this.valueOf.title!=null?this.valueOf.title:"",
            "Field" : this.valueOf.description!=null?this.valueOf.description:"",
            "btn1_url" : this.valueOf.btn!=null?this.valueOf.btn[0]!=null?this.valueOf.btn[0].url:"":"",
            "btn2_url" : this.valueOf.btn!=null?this.valueOf.btn[1]!=null?this.valueOf.btn[1].url:"":"",
        };
        this.valueOf.image = "";
        this.valueOf.header = "";
        this.valueOf.title = "";
        this.valueOf.btn = "";
        this.valueOf.description = "";
        let format = (result.Header==""?"":"- # "+result.Header+" # -")+((result.Description!=""&&result.Header!="")?"\n\n":"")+(result.Description==""?"":" >  "+result.Description)+(result.Field==""?"":"\n\n"+result.Field);
        return format;
    }
}
module.exports = Embed;