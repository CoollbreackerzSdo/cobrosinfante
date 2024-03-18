import type ListModel from "./ListModel";

export default class Areas{
  constructor(title:String,elements:ListModel[],tag:String,description:String){
    this.Title = title;
    this.Services = elements;
    this.Tag = tag;
    this.Description = description;
  }
  Description: String;
  Title:String;
  Services:ListModel[];
  Tag:String;
}