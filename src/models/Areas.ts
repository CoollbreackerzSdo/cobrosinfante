import type ListModel from "./ListModel";

export default class Areas{
  constructor(title:String,elements:ListModel[]){
    this.Title = title;
    this.Services = elements;
  }
    Title:String;
    Services:ListModel[]
}